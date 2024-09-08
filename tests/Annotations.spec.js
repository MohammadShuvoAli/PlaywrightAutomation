/*
test.skip(): Skips a test if the condition is true. You can add a reason why it's skipped.
test.fail(): Marks a test as expected to fail.
test.fixme(): Used to mark tests that are known to be broken and need fixing.
test.skip() with condition: This test will only run on Chromium, skipping other browsers.
Normal Test: This is a regular test with no annotations.
*/

const { test } = require('@playwright/test')

// Skipping this test
test('Skipped test @skip', async ({ page }) => {
  test.skip(true, 'This test is not ready yet')
  console.log('🚫 This test should be skipped')
})

// Marking this test as expected to fail
test('Failing test @fail', async ({ page }) => {
  test.fail(true, 'This test is expected to fail')
  console.log('❌ Running test expected to fail')
  // Simulate a failure
  console.log('Simulated failure: Assertion failed')
})

// Fixme for tests needing future work
test('Fixme test @fixme', async ({ page }) => {
  test.fixme(true, 'This test needs fixing')
  console.log('🔧 Marked as fixme, needs future work')
})

// Conditional test execution based on certain conditions (e.g., environment or feature availability)
test('Conditional test @onlyOnChromium', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Only runs on Chromium browser')
  console.log('🌐 Running on Chromium only')
})

// Normal test without annotations
test('Normal test', async ({ page }) => {
  console.log('✅ Running normal test with no annotations')
  // Simulate success
  console.log('Simulated success: Everything works fine')
})
