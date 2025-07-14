export interface PromptVariable {
  name: string;
  label: string;
  value: string;
  type: 'text' | 'textarea' | 'select';
  options?: string[];
  required: boolean;
  placeholder?: string;
}

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  variables: PromptVariable[];
  template: string;
}

export interface GeneratedPrompt {
  template: PromptTemplate;
  variables: Record<string, string>;
  content: string;
}
