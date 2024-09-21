# WebdriverIO Test Project

This project uses WebdriverIO to run end-to-end tests on a web application.

## Getting Started

To run the tests, make sure you have the necessary dependencies installed. You can do this by running:
$>npm install

To run the tests, use the following command:
$>npm run wdio
This will execute the tests specified in the wdio.conf.js file.

## Test Structure
The tests are organized into page objects, which encapsulate the functionality and selectors for specific pages. The page objects are located in the test/pageobjects directory.

login.page.js: Handles login functionality and selectors.
secure.page.js: Handles secure page functionality and selectors.
page.js: Base page object with common functionality.

# Test Scenarios
The tests are written in the test/specs directory. Currently, there is one test scenario:

test.e2e.js: Tests logging in with valid credentials and verifies the secure page is displayed.

# Configuration
The WebdriverIO configuration is located in wdio.conf.js. This file specifies the test framework, capabilities, and other settings.

# Dependencies
This project uses the following dependencies:

@wdio/cli
@wdio/local-runner
@wdio/mocha-framework
@wdio/spec-reporter
@babel/core
@babel/preset-env
@babel/register

# Babel Configuration
The Babel configuration is located in babel.config.js. This file specifies the presets and targets for the project.

# Allure reporting
To use Allure reporting:
$>npm install @wdio/allure-reporter --save-dev

Include in wdio.conf.js file:
reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

To install Allure comand line tool:
$>npm i allure-commandline

To check if Allure is installed:
$>allure

To generate report:
$>allure generate allure-results && allure open

# License
This project is licensed under [insert license here].

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

Feel free to modify this README.md file to better suit your project's needs.
