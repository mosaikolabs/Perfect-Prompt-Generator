import { useState, useMemo } from 'react';
import { PromptTemplate } from '../types/prompt';

export function usePromptGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [variableValues, setVariableValues] = useState<Record<string, string>>({});

  const updateVariable = (name: string, value: string) => {
    setVariableValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setVariableValues({});
    setSelectedTemplate(null);
  };

  const generatedPrompt = useMemo(() => {
    if (!selectedTemplate) return '';

    let prompt = selectedTemplate.template;
    
    // Replace all variables in the template
    selectedTemplate.variables.forEach(variable => {
      const value = variableValues[variable.name] || variable.value || '';
      const regex = new RegExp(`\\{${variable.name}\\}`, 'g');
      prompt = prompt.replace(regex, value);
    });

    return prompt;
  }, [selectedTemplate, variableValues]);

  const isFormValid = useMemo(() => {
    if (!selectedTemplate) return false;
    
    return selectedTemplate.variables.every(variable => {
      if (!variable.required) return true;
      const value = variableValues[variable.name] || variable.value;
      return value && value.trim().length > 0;
    });
  }, [selectedTemplate, variableValues]);

  return {
    selectedTemplate,
    setSelectedTemplate,
    variableValues,
    updateVariable,
    resetForm,
    generatedPrompt,
    isFormValid
  };
}
