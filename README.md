# QMOI Enhanced New

This is a starter Next.js 14 project with Tailwind CSS v3.x, PostCSS, and autoprefixer.

## Features
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v3.x
- PostCSS & autoprefixer
- ESLint

## Migration Instructions
1. Copy your existing code into the appropriate directories (`app`, `src`, etc.).
2. Ensure your Tailwind classes use supported v3.x syntax.
3. Update any custom configuration in `tailwind.config.js` and `postcss.config.js` as needed.
4. Run `npm install` to install dependencies.
5. Use `npm run dev` to start the development server.

## Getting Started
```bash
npm install
npm run dev
```

## Automation

### QMOI Cloud Automation
The workspace includes `scripts/qmoi-cloud-auto.js`, which automates offloading large folders (e.g., `node_modules`, `.next`) to cloud storage and connects to QMOI server resources. This script is designed to run safely on startup in Codespaces, VS Code, or any environment, and will not cause git corruption or workspace issues. Future enhancements will provide unlimited disk space and seamless resource usage.

To use:
```bash
node scripts/qmoi-cloud-auto.js
```
You may configure cloud provider and hooks as needed.

Automation scripts and error-fixing tools should be placed in the `scripts/` directory. Ensure they are compatible with the current workspace structure.
