# Frontend Project Starter

A modern React + TypeScript starter template with all the essential tools configured and ready to use.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast development server and build tool
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **CSS Modules** - Scoped styling with full TypeScript support
- 📏 **ESLint** - Code quality and consistency
- 💅 **Prettier** - Automatic code formatting
- 🧪 **Vitest** - Fast unit testing with React Testing Library
- 🌐 **MSW** - API mocking for testing
- 🏗️ **Plop** - Component generation templates
- 🔒 **Husky + lint-staged** - Pre-commit hooks for code quality
- 📝 **EditorConfig** - Consistent coding styles across editors
- 🎯 **TypeScript** - Strict type checking
- 🤖 **Dependabot** - Automated dependency updates
- 🚀 **GitHub Actions** - CI/CD pipeline with automatic deployment to GitHub Pages
- 📋 **Issue/PR Templates** - Standardized contribution workflow
- 🎨 **VS Code** - Workspace settings and extension recommendations

## 📋 Prerequisites

- Node.js 20+ (use `nvm use` to automatically use the version specified in `.nvmrc`)
- npm

## 🛠️ Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Joelynn94/frontend-project-starter.git
cd frontend-project-starter
nvm use  # Use the correct Node version from .nvmrc
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

| Script                  | Description                            |
| ----------------------- | -------------------------------------- |
| `npm run dev`           | Start development server               |
| `npm run build`         | Build for production                   |
| `npm run preview`       | Preview production build               |
| `npm run lint`          | Run ESLint                             |
| `npm run lint:fix`      | Fix ESLint errors automatically        |
| `npm run format`        | Format code with Prettier              |
| `npm run format:check`  | Check code formatting                  |
| `npm run typecheck`     | Run TypeScript type checking           |
| `npm run test`          | Run tests in watch mode                |
| `npm run test:ui`       | Run tests with UI                      |
| `npm run test:coverage` | Run tests with coverage report         |
| `npm run test:ci`       | Run tests once with coverage (for CI)  |
| `npm run generate`      | Generate new component with Plop       |
| `npm run clean`         | Clean build artifacts and node_modules |

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

### API Testing with MSW

This template includes [Mock Service Worker (MSW)](https://mswjs.io/) for mocking API requests in tests. MSW intercepts network requests at the service worker level, allowing you to test components that make API calls without hitting real endpoints.

#### Example API Test

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { UserList } from './UserList';

describe('UserList', () => {
  it('renders users after successful fetch', async () => {
    render(<UserList />);

    // Wait for loading to finish
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    // Check that mocked users are rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

#### Mocking API Handlers

MSW handlers are defined in `src/test/mocks/handlers.ts`:

```tsx
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.example.com/users', () => {
    return HttpResponse.json([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
  }),
];
```

#### Overriding Handlers in Tests

You can override handlers for specific test cases:

```tsx
it('displays error when fetch fails', async () => {
  const { server } = await import('../test/mocks/server');
  const { http, HttpResponse } = await import('msw');

  server.use(
    http.get('https://api.example.com/users', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<UserList />);
  // Test error handling...
});
```

#### Example Files

- **API utilities**: [`src/utils/api.ts`](src/utils/api.ts)
- **MSW handlers**: [`src/test/mocks/handlers.ts`](src/test/mocks/handlers.ts)
- **Component example**: [`src/components/UserList/UserList.tsx`](src/components/UserList/UserList.tsx)
- **Component test**: [`src/components/UserList/UserList.test.tsx`](src/components/UserList/UserList.test.tsx)
- **API test**: [`src/utils/api.test.ts`](src/utils/api.test.ts)

## 🚀 Deployment to GitHub Pages

This template includes a GitHub Actions workflow that automatically:

1. Runs linting and formatting checks
2. Runs TypeScript type checking
3. Runs all tests with coverage
4. Builds the project
5. Deploys to GitHub Pages (on push to main/master)

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to main/master branch to trigger deployment

Your site will be available at: `https://<username>.github.io/<repository>/`

## 📁 Project Structure

```
├── .github/
│   ├── workflows/
│   │   └── ci-cd.yml          # CI/CD pipeline
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   ├── pull_request_template.md
│   └── dependabot.yml         # Dependency updates config
├── .vscode/
│   ├── extensions.json        # Recommended extensions
│   └── settings.json          # Workspace settings
├── plop-templates/            # Component generation templates
│   ├── Component.tsx.hbs
│   ├── Component.module.css.hbs
│   ├── Component.test.tsx.hbs
│   └── index.ts.hbs
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── Button/          # Example component
│   │   └── UserList/        # Example component with API
│   ├── test/                # Test setup
│   │   ├── mocks/          # MSW API mocks
│   │   │   ├── handlers.ts # API mock handlers
│   │   │   └── server.ts   # MSW server setup
│   │   └── setup.ts        # Test configuration
│   ├── utils/              # Utility functions
│   │   └── api.ts          # API utilities
│   ├── App.tsx              # Main app component
│   ├── App.module.css       # App styles
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # TypeScript declarations
├── .editorconfig            # Editor configuration
├── .env.example             # Environment variables template
├── .gitignore
├── .husky/                  # Git hooks
│   └── pre-commit          # Pre-commit checks
├── .nvmrc                   # Node version
├── .prettierrc              # Prettier config
├── .prettierignore
├── CHANGELOG.md             # Version history
├── CONTRIBUTING.md          # Contribution guidelines
├── eslint.config.js         # ESLint config
├── LICENSE                  # MIT License
├── plopfile.js              # Plop config
├── README.md
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

### Pre-commit Hooks

Husky + lint-staged ensure code quality before commits:

- **lint-staged**: Runs ESLint and Prettier only on staged files
- **Type checking**: Validates TypeScript types
- **Tests**: Runs test suite to catch breaking changes

### VS Code Integration

Recommended workspace settings and extensions are configured in `.vscode/`:

- Auto-format on save
- ESLint auto-fix on save
- Recommended extensions prompt on first open

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🎯 Next Steps

After cloning this template:

1. Update `package.json` with your project details
2. Update `vite.config.ts` base path for GitHub Pages
3. Copy `.env.example` to `.env.local` and configure environment variables
4. Review and customize `.vscode/settings.json` for your preferences
5. Update `LICENSE` with your name/organization
6. Customize the example components or remove them
7. Add your own components using `npm run generate`
8. Write tests for your components
9. Update `CHANGELOG.md` as you make changes
10. Push to GitHub and enjoy automatic deployments!

## 🔄 Keeping Dependencies Updated

This template uses Dependabot to automatically:

- Check for dependency updates weekly
- Create PRs for security updates
- Group minor and patch updates
- Update GitHub Actions

Review and merge Dependabot PRs regularly to keep your project secure and up-to-date.

---

Happy coding! 🎉
