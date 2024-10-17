import { expect, test, takeSnapshot } from '@chromatic-com/playwright';

// TODO:
// It's taking multiple screenshots for each test.
// May need to disable the built-in playwright assertion
// in favor of us explicitly using `takeSnapshot`? Or just
// rely on the built-in functionality for non-interactable UI.

test('renders a primary button', async ({ page }, testInfo) => {
  await page.goto('/iframe.html?args=&id=button--primary&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await takeSnapshot(page, testInfo);
});

test('renders a secondary button', async ({ page }, testInfo) => {
  await page.goto('/iframe.html?args=&id=button--secondary&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await takeSnapshot(page, testInfo);
});

test('renders a primary small button', async ({ page }, testInfo) => {
  await page.goto('/iframe.html?args=&id=button--primary-small&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await takeSnapshot(page, testInfo);
});

test('renders a secondary small button', async ({ page }, testInfo) => {
  await page.goto(
    '/iframe.html?args=&id=button--secondary-small&viewMode=story',
  );

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await takeSnapshot(page, testInfo);
});
