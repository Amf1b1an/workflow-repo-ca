// tests/e2e/login.spec.js
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const email = process.env.TEST_USER_EMAIL;
const password = process.env.TEST_USER_PASSWORD;

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

console.log('EMAIL FROM ENV:', process.env.TEST_USER_EMAIL);

test('user can log in with valid credentials', async ({ page }) => {
  console.log('Navigating to login');
  await page.goto('/login');

  console.log('Waiting for login');
  await page.waitForSelector('text=Login');

  console.log('Page loaded');

  console.log('click login');
  await page.click('text=Login');

  console.log('email input wait');
  await page.waitForSelector('input[name="email"]');

  console.log('input field filled');
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);

  console.log('click loginclick login');
  await page.click('button:has-text("Login")');

  await expect(page.locator('text=Welcome')).toBeVisible();
});

test('user sees error on invalid credentials', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Login');
  await page.fill('input[name="email"]', 'wrong@example.com');
  await page.fill('input[name="password"]', 'wrongpass');
  await page.click('button:has-text("Login")');
  await expect(page.locator('text=Invalid')).toBeVisible();
});
