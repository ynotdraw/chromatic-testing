import { expect, test, takeSnapshot } from '@chromatic-com/playwright';

test('renders a primary button', async ({ page }, testInfo) => {
  await page.goto('/iframe.html?args=&id=button--primary&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  // Call this when we want to test hovering, for example.
  // await takeSnapshot(page, testInfo);
});

test('renders a secondary button', async ({ page }, testInfo) => {
  await page.goto('/iframe.html?args=&id=button--secondary&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  // await takeSnapshot(page, testInfo);
});

test('renders a primary small button', async ({ page }, testInfo) => {
  await page.goto('/iframe.html?args=&id=button--primary-small&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  // await takeSnapshot(page, testInfo);
});

test('renders a secondary small button', async ({ page }, testInfo) => {
  await page.goto(
    '/iframe.html?args=&id=button--secondary-small&viewMode=story',
  );

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  // await takeSnapshot(page, testInfo);
});
