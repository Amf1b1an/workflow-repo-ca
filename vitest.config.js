// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Only run unit tests, ignore Playwright specs
    include: ['tests/**/*.test.{js,ts}'],
    exclude: ['tests/e2e/**'],
    // jsdom is handy if your utils touch DOM/localStorage
    environment: 'jsdom',
  },
});
