const {test, expect} = require('@playwright/test')

test("Handle Hidden Dropdown", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', {type:'submit'}).click()
    //page.getByText() to locate by text content.
    await expect(page.getByText('PIM')).toBeVisible()

    await page.click('ul > li:nth-child(2) > a > span')

    await page.click("div:nth-child(6) > div > div:nth-child(2) > div > div > div.oxd-select-text-input")

    await page.click('//div[@role="listbox]//span"')



    
    await page.waitForTimeout(5000)
    await page.close()
})