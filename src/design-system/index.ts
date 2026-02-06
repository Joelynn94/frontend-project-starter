/**
 * Design System
 * A lightweight utility library for spacing (margin, padding, gap)
 * Similar to Tailwind CSS but minimal and focused
 */

// Export spacing scale
export { spacing } from './spacing';
export type { SpacingKey } from './spacing';

// Export utility functions and types
export { cn } from './utils';
export type { MarginClass, PaddingClass, GapClass, SpacingClass } from './utils';

// Import CSS
import './spacing.css';
