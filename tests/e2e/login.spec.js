// tests/e2e/login.spec.js
import { test, expect } from "@playwright/test";

test("user can log in with env credentials", async ({ page }) => {
  await page.goto("/login");

  const email = process.env.TEST_USER_EMAIL;
  const password = process.env.TEST_USER_PASSWORD;

  expect(email, "TEST_USER_EMAIL is missing").toBeTruthy();
  expect(password, "TEST_USER_PASSWORD is missing").toBeTruthy();

  await page.getByLabel(/email/i).fill(email);
  await page.getByLabel(/password/i).fill(password);

  await page.getByRole("button", { name: /log in|sign in/i }).click();

  await expect(
    page.getByRole("heading", { name: /dashboard|welcome|venues/i }),
  ).toBeVisible();
});
