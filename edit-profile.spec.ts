import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://development.clickvoyant.com/
  await page.goto('https://development.clickvoyant.com/');

  // Go to https://development.clickvoyant.com/login
  await page.goto('https://development.clickvoyant.com/login');

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('anhdotestnile@gmail.com');

  // Click input[name="password"]
  await page.locator('input[name="password"]').click();

  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('Vitamin@1234');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://development.clickvoyant.com/dashboard?p=2');

  // Click text=Profile
  await page.locator('text=Profile').click();
  await expect(page).toHaveURL('https://development.clickvoyant.com/user-profile?p=2');

  // Click .MuiListItem-root > svg >> nth=0
  await page.locator('.MuiListItem-root > svg').first().click();
  await expect(page).toHaveURL('https://development.clickvoyant.com/user-profile?p=2');

  // Click text=Edit Profile
  await page.locator('text=Edit Profile').click();
  await expect(page).toHaveURL('https://development.clickvoyant.com/user-profile?action=edit&p=2');

  // Click input[name="positionInCompany"]
  await page.locator('input[name="positionInCompany"]').click();

  // Fill input[name="positionInCompany"]
 await page.locator('input[name="positionInCompany"]').fill('789');
  // const currentPosition = await page.locator('input[name="positionInCompany")');
  // const currentvaluePosition = await this.currentPosition.inputValue();

  //   await this.page.locator('input[name="positionInCompany"]').click();

  //   await this.page.fill('input[name="positionInCompany"]',["Unknown", "Known"].find((value) => value !== currentValue)
  //   );

  // Click text=Save
  await page.locator('text=Save').click();
    // Click main >> text=Your profile was updated successfully
  const positionfield = await page.locator('main >> text=Your profile was updated successfully').first();
  await expect(await positionfield.textContent()).toMatch('Your profile was updated successfully');

});