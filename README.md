# Frappe Test Runner

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

- This is heavily inspired by [Django Test Runner](https://github.com/christherama/django-test-runner) and reuses same some code from it.

