const {test, expect} = require('@playwright/test')

test("Alert with OK", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    // Enabling dialog window handler
    page.on('dialog',async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    // click on alert button
    await page.click('//*[@id="HTML9"]/div[1]/button[1]')
    
    await page.waitForTimeout(3000)
    await page.close()
})