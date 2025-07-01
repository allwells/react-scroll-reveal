# Contributing to React Scroll Reveal

First off, thank you for considering contributing to React Scroll Reveal! It's people like you that make React Scroll Reveal such a great tool. 🎉

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive criticism
- Show empathy towards other community members

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

1. **Clear title and description**
2. **Steps to reproduce**
3. **Expected behavior**
4. **Actual behavior**
5. **Code sample or minimal reproduction**
6. **Environment details:**
   - React Scroll Reveal version
   - React version
   - Browser and version
   - Operating system
   - Node.js version

**Example:**

````markdown
### Bug Description

ScrollReveal component throws error when used with Next.js 14 App Router

### Steps to Reproduce

1. Create new Next.js 14 app with App Router
2. Install react-scroll-reveal
3. Import and use ScrollReveal in a client component
4. See error in console

### Expected Behavior

Component should render without errors

### Actual Behavior

TypeError: Cannot read properties of undefined (reading 'observe')

### Code Sample

```tsx
'use client';
import { ScrollReveal } from '@allwells/react-scroll-reveal';

export default function Page() {
  return (
    <ScrollReveal animationType="fade">
      <h1>Hello</h1>
    </ScrollReveal>
  );
}
```
````

### Environment

- React Scroll Reveal: 1.0.0
- React: 18.3.1
- Next.js: 14.1.0
- Browser: Chrome 120
- OS: macOS 14.2
- Node: 20.10.0

````

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

1. **Use case** - Explain why this enhancement would be useful
2. **Proposed solution** - Describe how it should work
3. **Alternatives considered** - List any alternative solutions you've considered
4. **Additional context** - Add any mockups, diagrams, or examples

### 🔧 Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `pnpm install`
3. **Make your changes** following our coding standards
4. **Add tests** for any new functionality
5. **Ensure tests pass**: `pnpm test`
6. **Run the linter**: `pnpm lint:fix`
7. **Build the project**: `pnpm build`
8. **Commit your changes** using conventional commits
9. **Push to your fork** and submit a pull request

#### Pull Request Guidelines

- PRs should be focused on a single change
- Update documentation if needed
- Add tests for new features
- Ensure all tests pass
- Update the CHANGELOG.md
- Follow the PR template

## Development Setup

### Prerequisites

- Node.js >= 14.0.0
- pnpm >= 8.0.0

### Getting Started

```bash
# Clone your fork
git clone https://github.com/allwells/react-scroll-reveal.git
cd react-scroll-reveal

# Install dependencies
pnpm install

# Start development build with watch mode
pnpm dev

# Run tests in watch mode
pnpm test:watch
````

### Project Structure

```
react-scroll-reveal/
├── src/
│   ├── components/     # React components
│   ├── hooks/          # Custom hooks
│   ├── animations/     # Animation presets and types
│   ├── context/        # React context providers
│   ├── utils/          # Utility functions
│   └── index.ts        # Main entry point
├── tests/              # Test files
├── examples/           # Example implementations
└── dist/               # Build output (git ignored)
```

### Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write code following our style guide
   - Add JSDoc comments for public APIs
   - Update TypeScript types if needed

3. **Test your changes**

   ```bash
   # Run all tests
   pnpm test

   # Run tests in watch mode
   pnpm test:watch

   # Check coverage
   pnpm test:coverage
   ```

4. **Lint and format**

   ```bash
   # Check for linting errors
   pnpm lint

   # Auto-fix linting errors
   pnpm lint:fix

   # Type check
   pnpm type-check
   ```

5. **Build and test locally**

   ```bash
   # Build the library
   pnpm build

   # Link for local testing
   npm link

   # In another project
   npm link @allwells/react-scroll-reveal
   ```

## Coding Standards

### TypeScript

- Use strict TypeScript settings
- Provide types for all exports
- Avoid `any` types unless absolutely necessary
- Use descriptive type names

```typescript
// Good
interface ScrollRevealOptions {
  threshold: number;
  rootMargin: string;
}

// Bad
interface Options {
  t: number;
  rm: string;
}
```

### React

- Use functional components with hooks
- Follow React naming conventions
- Memoize expensive computations
- Clean up side effects

```typescript
// Good
export const ScrollReveal: React.FC<ScrollRevealProps> = memo(
  ({ children, animationType = 'fade', ...props }) => {
    // Component logic
  }
);

// Bad
export function scroll_reveal(props) {
  // Component logic
}
```

### Testing

- Write tests for all new features
- Aim for >80% code coverage
- Use descriptive test names
- Test edge cases

```typescript
describe('ScrollReveal', () => {
  it('should render children without animation when disabled', () => {
    // Test implementation
  });

  it('should apply custom animation when provided', () => {
    // Test implementation
  });
});
```

### Documentation

- Add JSDoc comments for public APIs
- Include code examples in comments
- Update README for new features
- Keep CHANGELOG up to date

````typescript
/**
 * Creates a custom animation configuration
 *
 * @param config - Animation configuration object
 * @returns Custom animation object
 *
 * @example
 * ```tsx
 * const slideRotate = createAnimation({
 *   initial: { opacity: 0, x: -100, rotate: -45 },
 *   animate: { opacity: 1, x: 0, rotate: 0 }
 * });
 * ```
 */
export function createAnimation(config: AnimationConfig): CustomAnimation {
  // Implementation
}
````

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions or changes
- `chore:` Build process or auxiliary tool changes

Examples:

```
feat: add blur animation preset
fix: resolve SSR hydration mismatch in Next.js
docs: update installation instructions for pnpm
perf: optimize observer instance caching
```

## Release Process

Maintainers will handle releases, but here's the process:

1. Update version in package.json
2. Update CHANGELOG.md
3. Commit changes: `git commit -m "chore: release v1.1.0"`
4. Tag release: `git tag v1.1.0`
5. Push: `git push origin main --tags`
6. Publish to npm: `npm publish`
7. Create GitHub release

## Adding New Features

When adding new features, consider:

### 1. Animation Presets

To add a new animation preset:

```typescript
// src/animations/presets.ts
export const animationPresets: Record<AnimationType, AnimationConfig> = {
  // ... existing presets

  yourNewAnimation: {
    initial: {
      opacity: 0,
      // your initial state
    },
    animate: {
      opacity: 1,
      // your final state
    },
  },
};
```

Remember to:

- Add the type to `AnimationType`
- Update documentation
- Add tests
- Include in examples

### 2. New Hooks

When creating new hooks:

- Follow the `use` prefix convention
- Provide TypeScript types
- Handle SSR properly
- Clean up effects
- Add comprehensive tests

### 3. Engine Support

To add support for a new animation engine:

1. Add to `AnimationEngine` type
2. Implement in ScrollReveal component
3. Add examples
4. Document differences and use cases

## Questions?

Feel free to:

- Open an issue for questions
- Start a discussion for ideas
- Reach out to maintainers

## Recognition

Contributors will be:

- Listed in the README
- Mentioned in release notes
- Given credit in the changelog

Thank you for contributing! 🙏
