const {test, expect} = require('@playwright/test')

test("count number of rows and columns in table", async({page})=>{
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

test("select specific checkbox from table cell", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    const table = await page.locator("#productTable")
    const columns = await table.locator("thead > tr > th")
    const rows = await table.locator("tbody > tr")

    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    matchedRow.locator('input').check()
    
    await page.waitForTimeout(3000)
    await page.close()
})

test("select multiple checkbox from table cell using function", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    const table = await page.locator("#productTable")
    const columns = await table.locator("thead > tr > th")
    const rows = await table.locator("tbody > tr")

    // call the function
    await selectProduct(rows, page, 'Product 1')
    await selectProduct(rows, page, 'Product 3')
    await selectProduct(rows, page, 'Product 5')
    
    await page.waitForTimeout(3000)
    //await page.close()
})

async function selectProduct(rows, page, name){
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()
}