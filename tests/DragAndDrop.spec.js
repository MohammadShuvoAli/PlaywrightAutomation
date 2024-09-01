const {test, expect} = require('@playwright/test')

test("Drag and Drop using Mouse Actions", async({page})=>{
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const sourceSeoul = await page.locator("#box5")
    const destinationSouthKorea = await page.locator("#box105")

    // hover over source and click and hold source element 
    await sourceSeoul.hover()
    await page.mouse.down()

    // release the element on destination
    await destinationSouthKorea.hover()
    await page.mouse.up()

    await page.waitForTimeout(3000)
    await page.close()
})