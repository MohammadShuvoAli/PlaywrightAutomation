const {test, expect} = require('@playwright/test')

test('Soft Assertions', async({page})=>{

    // Hard Assertions
    await page.goto('https://www.demoblaze.com')
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com')
    await expect(page.locator('.navbar-brand')).toBeVisible()
    
    page.close()
})