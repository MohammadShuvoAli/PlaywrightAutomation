const {test, expect} = require('@playwright/test')

test("select date by filling the input field", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    await page.locator("#datepicker").fill('09/15/2024') // mm/dd/yyyy
    
    await page.waitForTimeout(5000)
    await page.close()
})

test("select date from calendar popup using loop", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    // date information
    const year = "2026"
    const month = "September"
    const date = "15"

    // click on field for calendar pop up
    await page.locator("#datepicker").click()

    while(true){
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()

        if(currentYear == year && currentMonth == month){
            break
        }

        await page.locator('[title="Next"]').click() // Next button
    }

    const dates = await page.$$(".ui-datepicker-calendar > tbody > tr > td > a")

    for(const currentDate of dates){
        if(await currentDate.textContent() == date){
            await currentDate.click()
            break
        }
    }
    
    await page.waitForTimeout(5000)
    await page.close()
})

test("select date from calendar popup without loop", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    // date information
    const year = "2026"
    const month = "September"
    const date = "15"

    // click on field for calendar pop up
    await page.locator("#datepicker").click()

    while(true){
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()

        if(currentYear == year && currentMonth == month){
            break
        }

        await page.locator('[title="Next"]').click() // Next button
    }

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    
    await page.waitForTimeout(5000)
    await page.close()
})