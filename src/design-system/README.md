# Design System

A lightweight utility library for spacing (margin, padding, gap) similar to Tailwind CSS.

## Features

- 🎨 Tailwind-like utility classes for spacing
- 📏 Consistent spacing scale (0 to 64, plus auto)
- 💪 TypeScript support with type-safe class names
- 🪶 Minimal and focused - just spacing utilities
- ✅ Fully tested

## Spacing Scale

The spacing scale follows a consistent pattern:

| Key | Value | Pixels |
|-----|-------|--------|
| 0 | 0 | 0px |
| 1 | 0.25rem | 4px |
| 2 | 0.5rem | 8px |
| 3 | 0.75rem | 12px |
| 4 | 1rem | 16px |
| 5 | 1.25rem | 20px |
| 6 | 1.5rem | 24px |
| 8 | 2rem | 32px |
| 10 | 2.5rem | 40px |
| 12 | 3rem | 48px |
| 16 | 4rem | 64px |
| 20 | 5rem | 80px |
| 24 | 6rem | 96px |
| 32 | 8rem | 128px |
| 40 | 10rem | 160px |
| 48 | 12rem | 192px |
| 56 | 14rem | 224px |
| 64 | 16rem | 256px |
| auto | auto | auto |

## Usage

### Margin Utilities

```tsx
// All sides
<div className="m-4">Margin on all sides</div>

// Individual sides
<div className="mt-4">Margin top</div>
<div className="mr-4">Margin right</div>
<div className="mb-4">Margin bottom</div>
<div className="ml-4">Margin left</div>

// Horizontal and vertical
<div className="mx-4">Horizontal margin (left + right)</div>
<div className="my-4">Vertical margin (top + bottom)</div>

// Auto margins (centering)
<div className="mx-auto">Centered horizontally</div>
```

### Padding Utilities

```tsx
// All sides
<div className="p-4">Padding on all sides</div>

// Individual sides
<div className="pt-4">Padding top</div>
<div className="pr-4">Padding right</div>
<div className="pb-4">Padding bottom</div>
<div className="pl-4">Padding left</div>

// Horizontal and vertical
<div className="px-4">Horizontal padding (left + right)</div>
<div className="py-4">Vertical padding (top + bottom)</div>
```

### Gap Utilities (Flexbox/Grid)

```tsx
// All directions
<div className="gap-4">Gap between children</div>

// Horizontal and vertical
<div className="gap-x-4">Horizontal gap (column-gap)</div>
<div className="gap-y-4">Vertical gap (row-gap)</div>
```

### Combining Classes

Use the `cn` utility to combine multiple classes:

```tsx
import { cn } from '@/design-system';

// Basic combination
<div className={cn('m-4', 'p-2')}>Content</div>

// Conditional classes
<div className={cn('m-4', isActive && 'p-2')}>Content</div>

// With existing classes
<div className={cn('my-custom-class', 'm-4', 'p-2')}>Content</div>
```

### TypeScript Support

The design system provides type-safe class names:

```tsx
import type { MarginClass, PaddingClass, SpacingClass } from '@/design-system';

// These will be type-checked
const marginClass: MarginClass = 'm-4';
const paddingClass: PaddingClass = 'px-2';
const spacingClass: SpacingClass = 'gap-4';
```

### Accessing Spacing Values

You can also access the spacing scale programmatically:

```tsx
import { spacing } from '@/design-system';

// Use in inline styles or calculations
<div style={{ marginTop: spacing[4] }}>Content</div>
```

## Examples

### Card with spacing

```tsx
<div className="p-6 m-4">
  <h2 className="mb-4">Card Title</h2>
  <p className="mb-2">Card content with spacing</p>
</div>
```

### Flex container with gap

```tsx
<div className="gap-4" style={{ display: 'flex' }}>
  <button className="px-4 py-2">Button 1</button>
  <button className="px-4 py-2">Button 2</button>
  <button className="px-4 py-2">Button 3</button>
</div>
```

### Centered content

```tsx
<div className="mx-auto" style={{ maxWidth: '600px' }}>
  <h1 className="mb-6">Centered Content</h1>
  <p className="mb-4">This content is centered horizontally</p>
</div>
```

## Installation

The design system is already included in this project. Just import and use:

```tsx
import { cn, spacing } from '@/design-system';
import type { SpacingClass } from '@/design-system';
```

The CSS is automatically included via the main entry point.
