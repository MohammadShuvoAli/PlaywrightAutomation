const {test, expect} = require('@playwright/test')

test("Handle Frames using name or URL", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // count total number of frames
    const allFrames = await page.frames()
    console.log("Number of frames:", allFrames.length)

    // locating frame using URL
    const frame_1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    frame_1.fill('name="mytext1"','Hello Shuvo!')
    
    await page.waitForTimeout(3000)
    await page.close()
})