const { test } = require('@playwright/test')

// Runs before all tests
test.beforeAll(async () => {
  console.log('🚀 beforeAll: Setting up resources before all tests')
})

// Runs before each test
test.beforeEach(async ({ page }) => {
  console.log('🛠 beforeEach: Setting up before each test')
  await page.goto('https://example.com')
})

// Runs after each test
test.afterEach(async () => {
  console.log('🧹 afterEach: Cleaning up after each test')
})

// Runs after all tests
test.afterAll(async () => {
  console.log('🏁 afterAll: Cleaning up resources after all tests')
})

// Test Group 1
test.describe('Test Group 1', () => {

  test('Test 1: Sample test case 1', async ({ page }) => {
    console.log('✅ Running Test 1')
    // Add test steps here
    await page.locator('h1').isVisible()
  })

  test('Test 2: Sample test case 2', async ({ page }) => {
    console.log('✅ Running Test 2')
    // Add test steps here
    await page.locator('h1').isVisible()
  })

})

// Test Group 2
test.describe('Test Group 2', () => {

  test('Test 3: Sample test case 3', async ({ page }) => {
    console.log('✅ Running Test 3')
    // Add test steps here
    await page.locator('a').isVisible()
  })

  test('Test 4: Sample test case 4', async ({ page }) => {
    console.log('✅ Running Test 4')
    // Add test steps here
    await page.locator('div').isVisible()
  })

})
