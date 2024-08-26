const {test, expect} = require('@playwright/test')

test('Handle Inputbox', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator("#name")).toBeVisible()
    await expect(page.locator("#name")).toBeEmpty()
    await expect(page.locator("#name")).toBeEditable()
    await expect(page.locator("#name")).toBeEnabled()

    await page.locator("#name").fill("shuvo")
    await page.waitForTimeout(3000)
    await page.locator("#name").clear()
    await page.waitForTimeout(3000)
    await page.fill("#name", "SHUVO")
    await page.waitForTimeout(3000)
})