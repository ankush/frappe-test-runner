<div align="center">
    <img src="https://raw.githubusercontent.com/ankush/frappe-test-runner/develop/assets/ftr_logo.png" height="128">
    <h2>Frappe Test Runner</h2>
</div>

![Extension in action](https://user-images.githubusercontent.com/9079960/198000054-650ef639-ac9c-4cff-a202-459d14d6352f.gif)

This extension lets you run tests from Frappe app using single command or keybind.

Supported ways to run tests:
- Run all test in open file
- Run test nearest to the cursor in open file

# Setup

- Configure `frappeTestRunner.siteName` in settings. This site will be used by bench to run tests on.
- If your Workspace root directory is not the app directory, also configure `frappeTestRunner.workspaceRoot` accordingly:
  - `bench`: If your Workspace root directory is the same as the bench root directory
  - `apps`: If your Workspace root directory is the "apps" folder
  - `single-app`: Default. If your Workspace root directory is the app directory

## Usage

- Ctrl+shift+p > run nearest or run all.
- Alternatively setup keyboard shortcuts from settings.

Note: keyboard shortcuts are not setup by default.

## Vim user?

Checkout the [vim plugin](https://github.com/ankush/frappe_test.vim) instead.

## Credit

This is heavily inspired by [Django Test Runner](https://github.com/christherama/django-test-runner) and reuses some code from it.

