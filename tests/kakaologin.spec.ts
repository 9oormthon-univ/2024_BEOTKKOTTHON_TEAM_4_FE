import { test, expect } from '@playwright/test';

test('카카오 로그인 접근', async ({ page }) => {
  await page.goto('https://vacgom.co.kr/');

  const kakaoLoginButton = await page.locator('button:has-text("카카오로 계속하기")');
  page.on('console', message => console.log(`Browser console log: ${message.text()}`));
  await kakaoLoginButton.click();
});

