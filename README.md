# PlaywrightAutomation

A comprehensive Playwright test automation framework demonstrating various web testing scenarios and best practices using Playwright Test.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Test Coverage](#test-coverage)
- [Configuration](#configuration)
- [Reporting](#reporting)

## 🎯 Overview

This repository contains a comprehensive collection of Playwright test automation examples covering various web testing scenarios. It serves as both a learning resource and a reference implementation for Playwright test automation.

## ✨ Features

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Multiple locator strategies and built-in locators
- ✅ UI interaction testing (clicks, inputs, dropdowns, etc.)
- ✅ Advanced interactions (drag & drop, keyboard, mouse operations)
- ✅ Assertions and soft assertions
- ✅ Frame and nested frame handling
- ✅ Multiple window handling
- ✅ File upload functionality
- ✅ Screenshot and video recording capabilities
- ✅ Tracing for debugging
- ✅ Test organization with hooks, tags, and annotations
- ✅ HTML reporting

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MohammadShuvoAli/PlaywrightAutomation.git
cd PlaywrightAutomation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🚀 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/Assertions.spec.js
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests with tags
```bash
npx playwright test --grep @smoke
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### View test report
```bash
npx playwright show-report
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

## 📁 Project Structure

```
PlaywrightAutomation/
├── files/                      # Test files for upload scenarios
│   ├── test1.pdf
│   └── test2.pdf
├── tests/                      # Test specifications
│   ├── Alerts.spec.js         # Alert handling tests
│   ├── Annotations.spec.js    # Test annotations examples
│   ├── Assertions.spec.js     # Assertion examples
│   ├── AutoSuggestDropdown.spec.js
│   ├── BootstrapDropdown.spec.js
│   ├── BuiltinLocators.spec.js
│   ├── Checkbox.spec.js
│   ├── CodegenTestGenerator.spec.js
│   ├── DatePicker.spec.js
│   ├── DragAndDrop.spec.js
│   ├── Dropdown.spec.js
│   ├── DropdownList.spec.js
│   ├── FirstTest.spec.js
│   ├── Frames.spec.js
│   ├── HandlingWindows.spec.js
│   ├── HiddenDropdown.spec.js
│   ├── Hooks1.spec.js
│   ├── Hooks2.spec.js
│   ├── InputBox.spec.js
│   ├── KeyboardActions.spec.js
│   ├── Locators.spec.js
│   ├── MouseOperations.spec.js
│   ├── MultipleElementLocator.spec.js
│   ├── NestedFrames.spec.js
│   ├── RadioButtons.spec.js
│   ├── RecordVideo.spec.js
│   ├── Screenshot/           # Screenshot outputs
│   ├── Screenshot.spec.js
│   ├── SoftAssertions.spec.js
│   ├── Table.spec.js
│   ├── Tags.spec.js
│   ├── TestGroup.spec.js
│   ├── Tracing.spec.js
│   └── UploadFiles.spec.js
├── tests-examples/            # Example tests
│   └── demo-todo-app.spec.js
├── playwright.config.js       # Playwright configuration
├── package.json
└── README.md
```

## 🧪 Test Coverage

### Locators & Selectors
- **Locators.spec.js** - Various locator strategies (CSS, XPath, text, etc.)
- **BuiltinLocators.spec.js** - Playwright's built-in locators (getByRole, getByLabel, etc.)
- **MultipleElementLocator.spec.js** - Handling multiple elements

### UI Interactions
- **InputBox.spec.js** - Text input handling
- **Checkbox.spec.js** - Checkbox interactions
- **RadioButtons.spec.js** - Radio button selection
- **Dropdown.spec.js** - Standard dropdown handling
- **AutoSuggestDropdown.spec.js** - Auto-complete dropdowns
- **BootstrapDropdown.spec.js** - Bootstrap dropdown components
- **HiddenDropdown.spec.js** - Hidden dropdown elements
- **DatePicker.spec.js** - Date picker interactions

### Advanced Interactions
- **MouseOperations.spec.js** - Mouse actions (hover, right-click, double-click)
- **KeyboardActions.spec.js** - Keyboard shortcuts and key presses
- **DragAndDrop.spec.js** - Drag and drop operations

### Page Elements
- **Table.spec.js** - Table data handling
- **Frames.spec.js** - Frame handling
- **NestedFrames.spec.js** - Nested iframe handling
- **Alerts.spec.js** - Alert dialog handling
- **HandlingWindows.spec.js** - Multiple window/tab handling

### Assertions
- **Assertions.spec.js** - Various assertion types
- **SoftAssertions.spec.js** - Soft assertion examples

### Test Organization
- **Hooks1.spec.js** & **Hooks2.spec.js** - Before/After hooks
- **TestGroup.spec.js** - Test grouping strategies
- **Tags.spec.js** - Test tagging for selective execution
- **Annotations.spec.js** - Test annotations (skip, fixme, etc.)

### Utilities
- **Screenshot.spec.js** - Screenshot capture
- **RecordVideo.spec.js** - Video recording
- **Tracing.spec.js** - Test tracing for debugging
- **UploadFiles.spec.js** - File upload handling

## ⚙️ Configuration

The project is configured via `playwright.config.js`:

- **Test Directory**: `./tests`
- **Parallel Execution**: Configurable (currently set to false)
- **Retries**: 2 retries on CI, 0 locally
- **Reporter**: HTML reporter
- **Trace**: Enabled on first retry
- **Browsers**: Chromium, Firefox, and WebKit

### Browser Configuration
Tests run on three major browser engines:
- **Chromium** (Chrome, Edge)
- **Firefox**
- **WebKit** (Safari)

## 📊 Reporting

After test execution, view the HTML report:
```bash
npx playwright show-report
```

The report includes:
- Test execution summary
- Pass/fail status
- Screenshots on failure
- Trace files for failed tests
- Execution timeline

## 🐛 Debugging

### Using Playwright Inspector
```bash
npx playwright test --debug
```

### View traces
```bash
npx playwright show-trace trace.zip
```

### Codegen - Generate tests
```bash
npx playwright codegen <url>
```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Test Runner](https://playwright.dev/docs/test-runners)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Adding new test examples
4. Submitting a pull request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Mohammad Shuvo Ali**

- GitHub: [@MohammadShuvoAli](https://github.com/MohammadShuvoAli)
- Repository: [PlaywrightAutomation](https://github.com/MohammadShuvoAli/PlaywrightAutomation)

---

**Happy Testing! 🎭**