// tests/e2e/navigation.spec.js
import { test, expect } from "@playwright/test";

test("click through venue list and open details page", async ({ page }) => {
  await page.goto("/venues");

  const listLocator = page.getByTestId("venue-list");
  await expect(listLocator).toBeVisible();

  const firstVenue = page.getByTestId("venue-card").first();
  await expect(firstVenue).toBeVisible();
  await firstVenue.click();

  await expect(page).toHaveURL(/\/venues\/[\w-]+/);
  await expect(page.getByTestId("venue-title")).toBeVisible();
});
