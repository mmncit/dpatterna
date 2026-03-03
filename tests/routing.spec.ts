import { test, expect } from '@playwright/test';

test.describe('App Routing', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1 a')).toHaveText('dpatterna');
  });

  test('hello-world route works', async ({ page }) => {
    await page.goto('/hello-world');
    await expect(page.locator('p').first()).toContainText('Hello, world!');
  });

  test('navigation links are visible', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('.nav-link');
    await expect(links).toHaveCount(8);
  });

  test('clicking hello-world link navigates', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/hello-world"]');
    await expect(page).toHaveURL('/hello-world');
    await expect(page.locator('p').first()).toContainText('Hello, world!');
  });
});
