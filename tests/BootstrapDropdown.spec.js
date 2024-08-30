const {test, expect} = require('@playwright/test')

test("Handle Bootstrap Dropdown", async({page})=>{
    await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2")

    await page.locator(".multiselect").click()
    
    // checking number of options present in dropdown
    const allOption = await page.locator("ul>li label input")
    await expect(allOption).toHaveCount(11)

    // checking number of options present in dropdown using JS array
    const optionDropdown = await page.$$("ul>li label input")
    console.log("Number of options in dropdown: ", optionDropdown.length)
    await expect(optionDropdown.length).toBe(11)

    // select options from dropdown
    const options = await page.$$("ul>li label")

    for(let option of options){
        const value = await option.textContent()
        console.log(value)
        if(value.includes('Java') || value.includes('MySQL') || value.includes('C#')){
            await option.click()
        }
    }

    // deselct options from dropdown
    for(let option of options){
        const value = await option.textContent()
        console.log(value)
        if(value.includes('HTML') || value.includes('CSS')){
            await option.click()
        }
    }

    await page.waitForTimeout(5000)
    await page.close()
})