const {test, expect} = require('@playwright/test')

test('Soft Assertions', async({page})=>{

    await page.goto('https://www.demoblaze.com')
    
    /*
    // Hard Assertions
    await expect(page).toHaveTitle('STORE123')
    await expect(page).toHaveURL('https://www.demoblaze.com')
    await expect(page.locator('.navbar-brand')).toBeVisible()
    */

    // Soft Assertions
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
    
    page.close()
})