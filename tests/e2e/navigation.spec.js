// tests/e2e/navigation.spec.js
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

test('user can navigate to venue and see details', async ({ page }) => {
  await page.goto('/login');
  await page.waitForSelector('.venue-list-item');

  const venueItem = page.locator('.venue-list-item').first();
  await expect(venueItem).toBeVisible();

  await venueItem.click();
  await expect(page.locator('h1')).toContainText('Venue details');
});
