# Frontend Project Starter

A modern React + TypeScript starter template with all the essential tools configured and ready to use.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast development server and build tool
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **CSS Modules** - Scoped styling with full TypeScript support
- 📏 **ESLint** - Code quality and consistency
- 💅 **Prettier** - Automatic code formatting
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 🏗️ **Plop** - Component generation templates
- 🚀 **GitHub Actions** - CI/CD pipeline with automatic deployment to GitHub Pages

## 📋 Prerequisites

- Node.js 18+ and npm

## 🛠️ Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Joelynn94/frontend-project-starter.git
cd frontend-project-starter
npm install
```

### 2. Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your app.

### 3. Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run test` | Run tests in watch mode |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run generate` | Generate new component with Plop |

## 🧩 Component Generation with Plop

Generate new components quickly with the built-in Plop templates:

```bash
npm run generate
```

Follow the prompts to create a new component with:
- Component file (`.tsx`)
- CSS Module file (`.module.css`) - optional
- Test file (`.test.tsx`) - optional
- Index file for clean exports

Example generated component structure:
```
src/components/MyComponent/
  ├── MyComponent.tsx
  ├── MyComponent.module.css
  ├── MyComponent.test.tsx
  └── index.ts
```

## 🎨 CSS Modules

This template uses CSS Modules for component styling. Example:

```tsx
// Button.tsx
import styles from './Button.module.css';

export const Button = () => {
  return <button className={styles.button}>Click me</button>;
};
```

```css
/* Button.module.css */
.button {
  background-color: blue;
  color: white;
}
```

## 🧪 Testing

This project uses Vitest and React Testing Library for testing.

### Writing Tests

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Running Tests

```bash
# Watch mode
npm run test

# Run once
npm run test -- --run

# With coverage
npm run test:coverage

# With UI
npm run test:ui
```

## 🚀 Deployment to GitHub Pages

This template includes a GitHub Actions workflow that automatically:
1. Runs linting and formatting checks
2. Runs all tests
3. Builds the project
4. Deploys to GitHub Pages (on push to main/master)

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to main/master branch to trigger deployment

Your site will be available at: `https://<username>.github.io/<repository>/`

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # CI/CD pipeline
├── plop-templates/            # Component generation templates
│   ├── Component.tsx.hbs
│   ├── Component.module.css.hbs
│   ├── Component.test.tsx.hbs
│   └── index.ts.hbs
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   └── Button/          # Example component
│   ├── test/                # Test setup
│   │   └── setup.ts
│   ├── App.tsx              # Main app component
│   ├── App.module.css       # App styles
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # TypeScript declarations
├── .prettierrc              # Prettier config
├── eslint.config.js         # ESLint config
├── plopfile.js              # Plop config
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── vitest.config.ts         # Vitest config
└── package.json
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` includes:
- CSS Modules support
- Path aliases (`@/` for `src/`)
- GitHub Pages base path

### TypeScript Configuration

Strict mode enabled with:
- `strict: true`
- Path aliases
- React JSX support

### ESLint + Prettier

ESLint and Prettier work together:
- ESLint handles code quality
- Prettier handles formatting
- No conflicts between the two

## 🤝 Contributing

This is a template project. Feel free to fork and customize it for your needs!

## 📄 License

MIT - feel free to use this template for any project.

## 🎯 Next Steps

After cloning this template:

1. Update `package.json` with your project details
2. Update `vite.config.ts` base path for GitHub Pages
3. Customize the example components
4. Add your own components using `npm run generate`
5. Write tests for your components
6. Push to GitHub and enjoy automatic deployments!

---

Happy coding! 🎉
