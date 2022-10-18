import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page })  => {
  await page.goto('https://development.clickvoyant.com/login');
})
test.describe("@LOGINFORM", async () => {

test('TC1.Display error "Please enter a valid email"', async ({ page }) => {

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('anhdotestnile@gmail');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();

  // Click text=Please enter a valid email
  const invalidemail= page.locator('text=Please enter a valid email');
  await page.locator('text=Please enter a valid email').click();
 // await expect(invalidemailactual).toBeVisible();
  await expect(invalidemail).toHaveText('Please enter a valid email');
})

  test('TC2.Display "Your email or password is invalid"', async ({ page }) => {
    // Click input[name="email"]
    await page.locator('input[name="email"]').click();
  
    // Fill input[name="email"]
    await page.locator('input[name="email"]').fill('anhdotestnile+1@gmail.com');
  
    // Press Tab
    await page.locator('input[name="email"]').press('Tab');
  
    // Fill input[name="password"]
    await page.locator('input[name="password"]').fill('Vitamin@1234');
  
    // Click button:has-text("Login")
    await page.locator('button:has-text("Login")').click();
  
    // Click text=Your email or password is invalid
    const validemail= page.locator('text=Your email or password is invalid');
    await page.locator('text=Your email or password is invalid').click();
    await expect (await (validemail)).toContainText('Your email or password is invalid');
  });
})