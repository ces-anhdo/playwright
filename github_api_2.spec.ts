import { test, expect } from '@playwright/test';

test('1. After updating authen', async ({ page, request }) => {
  const requiresauthen = await page.request.get('https://api.github.com/user/repos')
  const body = JSON.parse(await requiresauthen.text())
  expect(body.message).not.toBe("Requires authentication")
  expect(requiresauthen.status()).toBe(200)
  });

  test('2. After updating authen', async ({page, context, browser, playwright, request}) => {
    const authenticated = await request.get('https://api.github.com/user/repos')
    expect(await authenticated.json () ).toContainEqual(expect.objectContaining(
      {
      }
    ));
    
    });
  
