const {test, expect} = require('@playwright/test')

test("Drag and Drop", async({page})=>{
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    await page.waitForTimeout(3000)
    await page.close()
})