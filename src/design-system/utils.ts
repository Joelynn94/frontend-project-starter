import type { SpacingKey } from './spacing';

/**
 * Type-safe utility function to generate spacing class names
 * Similar to Tailwind's utility class naming convention
 */

// Margin utilities
export type MarginClass =
  | `m-${SpacingKey}` // all sides
  | `mt-${SpacingKey}` // top
  | `mr-${SpacingKey}` // right
  | `mb-${SpacingKey}` // bottom
  | `ml-${SpacingKey}` // left
  | `mx-${SpacingKey}` // horizontal (left + right)
  | `my-${SpacingKey}`; // vertical (top + bottom)

// Padding utilities
export type PaddingClass =
  | `p-${SpacingKey}` // all sides
  | `pt-${SpacingKey}` // top
  | `pr-${SpacingKey}` // right
  | `pb-${SpacingKey}` // bottom
  | `pl-${SpacingKey}` // left
  | `px-${SpacingKey}` // horizontal (left + right)
  | `py-${SpacingKey}`; // vertical (top + bottom)

// Gap utilities for flexbox/grid
export type GapClass = `gap-${SpacingKey}` | `gap-x-${SpacingKey}` | `gap-y-${SpacingKey}`;

// All spacing utilities
export type SpacingClass = MarginClass | PaddingClass | GapClass;

/**
 * Combine multiple spacing classes into a single string
 * @param classes - Array of spacing class names
 * @returns Combined class string
 */
export function cn(...classes: (SpacingClass | string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
