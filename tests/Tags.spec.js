/*
Run all tests with the @login tag: npx playwright test --grep @login
Run all tests with the @smoke tag: npx playwright test --grep @smoke
Exclude tests with the @regression tag: npx playwright test --grep-invert @regression
*/

const { test } = require('@playwright/test')

// Test Group 1 with a tag
test.describe('Login Tests @smoke', () => {

  test('Valid login test @login', async ({ page }) => {
    console.log('✅ Running valid login test')
    // Simulate login steps
    console.log('Filling in username: validUser')
    console.log('Filling in password: validPassword')
    console.log('Clicking login button')
    // Simulate validation
    console.log('Login successful')
  })

  test('Invalid login test @login', async ({ page }) => {
    console.log('❌ Running invalid login test')
    // Simulate login steps
    console.log('Filling in username: invalidUser')
    console.log('Filling in password: invalidPassword')
    console.log('Clicking login button')
    // Simulate validation
    console.log('Login failed: Invalid credentials')
  })

})

// Test Group 2 with a tag
test.describe('Signup Tests @regression', () => {

  test('Signup with valid data @signup', async ({ page }) => {
    console.log('✅ Running signup test with valid data')
    // Simulate signup steps
    console.log('Filling in email: valid@example.com')
    console.log('Filling in password: strongPassword123')
    console.log('Clicking signup button')
    // Simulate validation
    console.log('Signup successful')
  })

  test('Signup with invalid data @signup', async ({ page }) => {
    console.log('❌ Running signup test with invalid data')
    // Simulate signup steps
    console.log('Filling in email: invalid-email')
    console.log('Filling in password: short')
    console.log('Clicking signup button')
    // Simulate validation
    console.log('Signup failed: Invalid email or weak password')
  })

})
