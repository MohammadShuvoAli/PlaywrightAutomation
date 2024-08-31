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

    // click on PIM
    await page.click('ul > li:nth-child(2) > a > span')
    // click on dropdown
    await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i')
    // waiting for options
    await page.waitForTimeout(3000)

    const options = await page.$$('//div[@role="listbox"]//span')

    for(const option of options){
        const jobTitle = await option.textContent()
        console.log(jobTitle)
        if(jobTitle.includes('QA Engineer')){
            option.click()
        }
    }

    await page.waitForTimeout(5000)
    await page.close()
})