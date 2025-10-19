// tests/utils.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isActivePath } from '../js/utils/userInterface';
import { getUsername } from '../js/utils/storage';

// Mock localStorage
beforeEach(() => {
  const store = {};
  global.localStorage = {
    getItem: vi.fn((key) => store[key]),
    setItem: vi.fn((key, value) => (store[key] = value)),
    clear: vi.fn(() => Object.keys(store).forEach((k) => delete store[k])),
  };
});

describe('isActivePath', () => {
  it('returns true when paths match', () => {
    expect(isActivePath('/home', '/home')).toBe(true);
  });

  it('returns false when paths differ', () => {
    expect(isActivePath('/home', '/about')).toBe(false);
  });
});

describe('getUsername', () => {
  it('returns the username from localStorage', () => {
    localStorage.setItem('username', 'Fabian');
    expect(getUsername()).toBe('Fabian');
  });

  it('returns null if username is not set', () => {
    localStorage.clear();
    expect(getUsername()).toBeNull();
  });
});
