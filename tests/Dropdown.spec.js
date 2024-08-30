const {test, expect} = require('@playwright/test')

test("Diffent ways of selecting dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    await page.locator("#country").selectOption({label:'Japan'}) // label / visible text
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption('China') // visible text
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({value: 'uk'}) // using value
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({index: 4}) // using index
    await page.waitForTimeout(2000)
    await page.selectOption("#country", 'canada') // using text
    await page.waitForTimeout(2000)

    await page.close()
})

test("Check number of options in dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    // check number of options in dropdown - method 1
    const option1 = await page.locator('#country option')
    await expect(option1).toHaveCount(10)

    // check number of options in dropdown - method 2
    const option2 = await page.$$('#country option')
    console.log("Number of options:", option2.length)
    await expect(option2.length).toBe(10)

    await page.close()
})

test("Check presence of value in dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    // Check presence of value in dropdown - Method 1
    const dropdownContent = await page.locator("#country").textContent()
    await expect(dropdownContent.includes('Canada')).toBeTruthy()

    // Check presence of value in dropdown - Method 1 - using loop
    const options = await page.$$('#country option')
    let status = false

    for(const option of options){
        console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('China')){
            status = true
            break
        }
    }

    await expect(status).toBeTruthy()

    await page.close()
})

test("Select option from dropdown using loop", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    const options = await page.$$('#country option')

    for(const option of options){
        console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('China')){
            await page.selectOption("#country", value)
            break
        }
    }

    await page.close()
})