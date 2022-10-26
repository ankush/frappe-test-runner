# Frappe Test Runner


![Peek 2022-10-26 15-40](https://user-images.githubusercontent.com/9079960/198000054-650ef639-ac9c-4cff-a202-459d14d6352f.gif)

This extension lets you run tests from Frappe app using single command or keybind.

Supported test runs:
- Run all test in a file
- Run nearest test to the cursor


# Setup

- Configure `frappeTestRunner.siteName` in settings. This site will be used by bench to run tests on.

## Usage

- Ctrl+shift+p > run nearest or run all.
- Alternatively setup keyboard shortcuts from settings. Note: keyboard shortcuts are not setup by default.

## Vim user?

Checkout the [vim plugin](https://github.com/ankush/frappe_test.vim) instead.

## Credit

- This is heavily inspired by [Django Test Runner](https://github.com/christherama/django-test-runner) and reuses some code from it.

