import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://development.clickvoyant.com/
  await page.goto('https://development.clickvoyant.com/');

  // Go to https://development.clickvoyant.com/login
  await page.goto('https://development.clickvoyant.com/login');

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('sdfsdfs');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();

  // Click input[name="password"]
  await page.locator('input[name="password"]').click();

  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('21321321');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();

  // Click div:has-text("LOGINEmailPasswordForgot passwordLogin") >> nth=4
  await page.locator('div:has-text("LOGINEmailPasswordForgot passwordLogin")').nth(4).click();

  // Click strong:has-text("reCAPTCHA")
  await page.frameLocator('text=LOGINEmailPasswordForgot passwordLogin >> iframe[role="presentation"]').locator('strong:has-text("reCAPTCHA")').click();

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('sdfsdfs@ddsfd');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();


});