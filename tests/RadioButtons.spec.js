const {test, expect} = require('@playwright/test')

test('Handle Radio Buttons', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Radio Button
    //await page.locator("#male").check()
    await page.check("#male")
    await expect(await page.locator("#male")).toBeChecked()
    await expect(await page.locator("#male").isChecked()).toBeTruthy()

    await expect(await page.locator("#female")).not.toBeChecked()
    await expect(await page.locator("#female").isChecked()).toBeFalsy()

    await page.waitForTimeout(3000)
})