# React Scroll Reveal

A production-ready, type-safe scroll animation library for React applications. Reveal elements with beautiful animations as they enter the viewport using IntersectionObserver, with support for GSAP, Framer Motion, and Headless UI.

[![npm version](https://img.shields.io/npm/v/@allwells/react-scroll-reveal.svg)](https://www.npmjs.com/package/@allwells/react-scroll-reveal)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@allwells/react-scroll-reveal)](https://bundlephobia.com/package/@allwells/react-scroll-reveal)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **20+ Built-in Animations** - Fade, slide, zoom, rotate, flip, and more
- 🚀 **Multiple Animation Engines** - Choose between Framer Motion, GSAP, or Headless UI
- 📦 **Tree-Shakable** - Only bundle what you use
- 🔒 **Fully Type-Safe** - Written in TypeScript with strict typing
- ⚡ **Performance Optimized** - Efficient IntersectionObserver usage with batching
- 🌐 **SSR Compatible** - Works with Next.js, Gatsby, and other SSR frameworks
- ♿ **Accessibility First** - Respects prefers-reduced-motion
- 🎛️ **Highly Configurable** - Global config, custom animations, and fine control
- 🪝 **Hooks API** - Use animations programmatically
- 📱 **Responsive** - Works on all devices and screen sizes

## Installation

```bash
npm install @allwells/react-scroll-reveal framer-motion gsap @headlessui/react
# or
yarn add @allwells/react-scroll-reveal framer-motion gsap @headlessui/react
# or
pnpm add @allwells/react-scroll-reveal framer-motion gsap @headlessui/react
```

## Quick Start

```tsx
import { ScrollReveal } from 'react-scroll-reveal';

function App() {
  return (
    <ScrollReveal animationType="fadeUp" delay={200}>
      <h1>Hello World!</h1>
    </ScrollReveal>
  );
}
```

## Animation Types

| Animation | Description |
|-----------|-------------|
| `fade` | Simple fade in |
| `fadeUp` | Fade in from bottom |
| `fadeDown` | Fade in from top |
| `fadeLeft` | Fade in from right |
| `fadeRight` | Fade in from left |
| `slideUp` | Slide in from bottom |
| `slideDown` | Slide in from top |
| `slideLeft` | Slide in from right |
| `slideRight` | Slide in from left |
| `zoom` | Scale from 0.8 to 1 |
| `zoomIn` | Scale from 0 to 1 |
| `zoomOut` | Scale from 1.2 to 1 |
| `rotate` | Rotate 180 degrees |
| `rotateLeft` | Rotate from -90 degrees |
| `rotateRight` | Rotate from 90 degrees |
| `flip` | 3D flip on Y axis |
| `flipX` | 3D flip on X axis |
| `flipY` | 3D flip on Y axis |
| `blur` | Blur effect |
| `bounce` | Bounce animation |

## Basic Usage

### Simple Animation

```tsx
<ScrollReveal animationType="fade">
  <div>This will fade in</div>
</ScrollReveal>
```

### With Options

```tsx
<ScrollReveal
  animationType="slideUp"
  delay={300}
  duration={800}
  once={false}
  threshold={0.2}
>
  <Card>
    <h2>Animated Card</h2>
    <p>This slides up every time it enters the viewport</p>
  </Card>
</ScrollReveal>
```

### Custom Animation

```tsx
<ScrollReveal
  customAnimation={{
    initial: { opacity: 0, scale: 0.5, rotate: -180 },
    animate: { opacity: 1, scale: 1, rotate: 0 }
  }}
  duration={1000}
>
  <div>Custom animated element</div>
</ScrollReveal>
```

## Global Configuration

Wrap your app with `ScrollRevealProvider` to set default options:

```tsx
import { ScrollRevealProvider } from 'react-scroll-reveal';

function App() {
  return (
    <ScrollRevealProvider
      config={{
        animationType: 'fadeUp',
        duration: 600,
        delay: 100,
        once: true,
        threshold: 0.15,
        respectReducedMotion: true
      }}
    >
      <YourApp />
    </ScrollRevealProvider>
  );
}
```

## Using Different Animation Engines

### Framer Motion (Default)

```tsx
<ScrollReveal animationType="fade" engine="framer">
  <div>Animated with Framer Motion</div>
</ScrollReveal>
```

### GSAP

```tsx
<ScrollReveal animationType="slideUp" engine="gsap">
  <div>Animated with GSAP</div>
</ScrollReveal>
```

### Headless UI

```tsx
<ScrollReveal animationType="zoom" engine="headless">
  <div>Animated with Headless UI Transition</div>
</ScrollReveal>
```

## Hooks API

### useScrollReveal

For programmatic control:

```tsx
import { useScrollReveal } from 'react-scroll-reveal';

function Component() {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView, hasAnimated, reveal, hide, reset } = useScrollReveal({
    ref,
    threshold: 0.1,
    once: true
  });

  return (
    <div ref={ref}>
      {isInView ? 'In view!' : 'Not in view'}
      <button onClick={reveal}>Reveal</button>
      <button onClick={hide}>Hide</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### useScrollRevealControls

Control multiple elements:

```tsx
import { useScrollRevealControls } from 'react-scroll-reveal';

function Controller() {
  const controls = useScrollRevealControls();

  return (
    <div>
      <button onClick={() => controls.revealAll('.reveal-item')}>
        Reveal All
      </button>
      <button onClick={() => controls.hideAll('.reveal-item')}>
        Hide All
      </button>
    </div>
  );
}
```

## Advanced Examples

### Staggered Animations

```tsx
function StaggeredList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <ScrollReveal
          key={item.id}
          animationType="fadeUp"
          delay={index * 100}
        >
          <ListItem>{item.text}</ListItem>
        </ScrollReveal>
      ))}
    </div>
  );
}
```

### Combining Animations

```tsx
import { combineAnimations, animationPresets } from 'react-scroll-reveal';

const customAnimation = combineAnimations(
  animationPresets.fade,
  animationPresets.slideUp,
  { initial: { scale: 0.8 }, animate: { scale: 1 } }
);

<ScrollReveal customAnimation={customAnimation}>
  <div>Combined animations</div>
</ScrollReveal>
```

### Responsive Animations

```tsx
function ResponsiveReveal({ children }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <ScrollReveal
      animationType={isMobile ? 'fadeUp' : 'fadeRight'}
      duration={isMobile ? 400 : 600}
    >
      {children}
    </ScrollReveal>
  );
}
```

## API Reference

### ScrollReveal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to animate |
| `animationType` | `AnimationType` | `'fade'` | Predefined animation |
| `customAnimation` | `CustomAnimation` | - | Custom animation config |
| `delay` | `number` | `0` | Delay in milliseconds |
| `duration` | `number` | `600` | Duration in milliseconds |
| `once` | `boolean` | `true` | Animate only once |
| `threshold` | `number \| number[]` | `0.1` | IntersectionObserver threshold |
| `rootMargin` | `string` | `'0px'` | IntersectionObserver margin |
| `disabled` | `boolean` | `false` | Disable animations |
| `engine` | `'framer' \| 'gsap' \| 'headless'` | `'framer'` | Animation engine |
| `className` | `string` | - | CSS class name |
| `style` | `CSSProperties` | - | Inline styles |
| `onReveal` | `() => void` | - | Callback on reveal |
| `onHide` | `() => void` | - | Callback on hide |

### useScrollReveal Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ref` | `RefObject<Element>` | - | Element reference |
| `threshold` | `number \| number[]` | `0.1` | Visibility threshold |
| `rootMargin` | `string` | `'0px'` | Root margin |
| `once` | `boolean` | `true` | Trigger only once |
| `disabled` | `boolean` | `false` | Disable observer |
| `root` | `Element \| null` | `null` | Custom root element |

## Performance Tips

1. **Use `once={true}`** for elements that don't need to re-animate
2. **Batch animations** with similar configurations using the provider
3. **Disable on mobile** if performance is a concern:
   ```tsx
   <ScrollReveal disabled={isMobile}>
   ```
4. **Use appropriate thresholds** - higher values (0.3-0.5) for important content
5. **Limit simultaneous animations** - stagger delays for lists

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 12.2+)
- IE11: ❌ Not supported (IntersectionObserver polyfill required)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © The Web Architect

## Acknowledgments

Built with:
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Headless UI](https://headlessui.dev/)
- [TypeScript](https://www.typescriptlang.org/)