import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div div')).toContainText('Hello World');
  // const divs = page.locator('div');
  // var found = false
  // for(var d in divs){
  //     if(d 'Hello World'){
  //       found = true
  //     }
  // }
  // await expect(found).toEqual(true);
})