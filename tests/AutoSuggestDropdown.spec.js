const {test, expect} = require('@playwright/test')

test("Handle Auto Suggest Dropdown", async({page})=>{
    await page.goto("https://www.shohoz.com")
    await page.locator("#fromcity").click()
    await page.locator("#fromcity").type('Dha', {delay:200})
    
    await page.waitForSelector(".station-filter-dropdown>button")

    const fromCityOptions = await page.$$(".station-filter-dropdown>button")

    for(let option of fromCityOptions){
        if(await option.isVisible()){
            const value = await option.textContent()
            console.log(value)
            if(value.includes('Dhamrai')){
                await option.click()
                break
            }
        }
    }
    
    await page.waitForTimeout(5000)
    await page.close()
})