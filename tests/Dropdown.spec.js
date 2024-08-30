const {test, expect} = require('@playwright/test')

test("Handle Dropdowns", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    // diffent ways of selecting dropdown
    await page.locator("#country").selectOption({label:'Japan'}) // label / visible text
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption('China') // visible text
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({value: 'uk'}) // using value
    await page.waitForTimeout(3000)
    await page.locator("#country").selectOption({index: 4}) // using index
    await page.waitForTimeout(3000)
    await page.selectOption("#country", 'canada') // using text
    await page.waitForTimeout(3000)

    await page.close()
})