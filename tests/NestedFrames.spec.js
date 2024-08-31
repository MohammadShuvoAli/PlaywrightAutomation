const {test, expect} = require('@playwright/test')

test("Inner Frames", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // locating frame using URL
    const frame_3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame_3.fill("input[name='mytext3']", 'Hello, Shuvo!')

    // nested frames - child frame
    const childFrames = await frame_3.childFrames()
    await childFrames[0].locator('//*[@id="i5"]/div[3]/div').check()
    
    await page.waitForTimeout(3000)
    await page.close()
})
