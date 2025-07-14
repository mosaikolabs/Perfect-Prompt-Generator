# Generador de Prompts IA para Extensiones Chrome

> Ingeniería de prompts profesional y analítica para potenciar tu productividad con IA

## Descripción

Este proyecto es una aplicación React + TypeScript que permite crear, personalizar y reutilizar prompts optimizados para plataformas de IA (ChatGPT, Claude, Gemini, etc.), siguiendo las mejores prácticas de ingeniería de prompts. Está diseñado como base para una extensión de Chrome que captura, analiza y organiza interacciones con IA, facilitando la generación de templates reutilizables y el análisis de productividad.

## Características principales

- **Generador de Prompts Dinámicos:** Usa templates profesionales y variables personalizables para crear prompts efectivos.
- **Biblioteca de Templates:** Organización y sugerencia de patrones reutilizables para distintos casos de uso (marketing, análisis de datos, consultoría, etc.).
- **Vista Previa y Exportación:** Copia o descarga tus prompts listos para usar en cualquier plataforma de IA.
- **Métricas y Analytics (futuro):** Análisis de eficiencia, tasa de éxito y productividad de tus interacciones con IA.
- **Integración con n8n (futuro):** Automatización y análisis avanzado de workflows.
- **Privacidad:** Todos los datos se almacenan localmente, sin enviar información sensible a servidores externos.

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd <carpeta-del-proyecto>
   ```
2. **Instala dependencias:**
   ```bash
   npm install
   ```
3. **Ejecuta en modo desarrollo:**
   ```bash
   npm run dev
   ```
4. **Compila para producción:**
   ```bash
   npm run build
   ```

## Estructura del Proyecto

```
project/
├── src/
│   ├── components/         # Componentes React (UI)
│   ├── data/               # Templates y datos base
│   ├── hooks/              # Custom hooks
│   ├── types/              # Tipos TypeScript
│   ├── index.css           # Estilos globales (Tailwind)
│   ├── App.tsx, main.tsx   # Entradas principales
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── ...
```

## Tecnologías principales

- **React 18** + **TypeScript**
- **Vite** (build rápido)
- **TailwindCSS** (estilos utilitarios)
- **Lucide Icons** (iconografía)

## Inspiración y Especificación

Este proyecto sigue la [Especificación Técnica Insights Extension v3.0](./Especificacion%203.0.txt), que define:
- Arquitectura modular y segura para extensiones Chrome
- Patrones de captura, análisis y generación de prompts
- Guías de UI/UX, seguridad y performance
- Integración futura con n8n y APIs de IA

## Documentación adicional

- [Especificación Técnica completa](./Especificacion%203.0.txt)
- [Guía de UI/UX](./Especificacion%203.0.txt#L1000)  
- [Plan de Implementación](./Especificacion%203.0.txt#L200)  
- [Modelo de Datos y Seguridad](./Especificacion%203.0.txt#L1500)

## Licencia

MIT

---

> Optimiza tus interacciones con IA usando ingeniería de prompts profesional y analítica avanzada. 
