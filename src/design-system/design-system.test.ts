import { describe, it, expect } from 'vitest';
import { cn } from './utils';
import { spacing } from './spacing';

describe('Design System - Utils', () => {
  describe('cn utility function', () => {
    it('combines multiple classes', () => {
      expect(cn('m-4', 'p-2')).toBe('m-4 p-2');
    });

    it('filters out falsy values', () => {
      expect(cn('m-4', undefined, null, false, 'p-2')).toBe('m-4 p-2');
    });

    it('handles empty input', () => {
      expect(cn()).toBe('');
    });

    it('handles all falsy values', () => {
      expect(cn(undefined, null, false)).toBe('');
    });

    it('works with conditional classes', () => {
      const isActive = true;
      expect(cn('m-4', isActive && 'p-2')).toBe('m-4 p-2');
    });

    it('works with conditional classes (false)', () => {
      const isActive = false;
      expect(cn('m-4', isActive && 'p-2')).toBe('m-4');
    });
  });
});

describe('Design System - Spacing Scale', () => {
  it('has correct spacing values', () => {
    expect(spacing[0]).toBe('0');
    expect(spacing[1]).toBe('0.25rem');
    expect(spacing[2]).toBe('0.5rem');
    expect(spacing[4]).toBe('1rem');
    expect(spacing[8]).toBe('2rem');
    expect(spacing.auto).toBe('auto');
  });

  it('has all expected spacing keys', () => {
    const expectedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '8',
      '10',
      '12',
      '16',
      '20',
      '24',
      '32',
      '40',
      '48',
      '56',
      '64',
      'auto',
    ];
    expect(Object.keys(spacing)).toEqual(expectedKeys);
  });
});
