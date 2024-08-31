const {test, expect} = require('@playwright/test')

test("Handle Table", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    const table = await page.locator("#productTable")

    // total number of rows and columns in table
    const columns = await table.locator("thead > tr > th")
    console.log("Number of columns: ", await columns.count())
    await expect(await columns.count()).toBe(4)

    const rows = await table.locator("tbody > tr")
    console.log("Number of rows: ", await rows.count())
    await expect(await rows.count()).toBe(5)
    
    await page.waitForTimeout(3000)
    await page.close()
})
