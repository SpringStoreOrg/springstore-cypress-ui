# Fractal Wood Stories Test Project

This project contains automated tests for the e-commerce website [Fractal Wood Stories](https://fractalwoodstories.com) using [Cypress](https://www.cypress.io/). Cypress is a modern, open-source test framework that makes it easy to write and run end-to-end tests.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests Locally](#running-tests-locally)
- [Running Tests in Headless Mode](#running-tests-in-headless-mode)
- [Project Structure](#project-structure)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fractalwoodstories-cypress-tests.git
   cd fractalwoodstories-cypress-tests```

2. Install the project dependencies:
 npm install
 
Running Tests Locally
To open the Cypress Test Runner and run tests interactively, use the following command:

npx cypress open

Running Tests in Headless Mode
To run all tests in headless mode use the following command:
npx cypress run --headless --browser chrome

3. Project Structure
The project directory structure is as follows:

fractalwoodstories-cypress-tests/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   └── examples/
│   ├── plugins/
│   └── support/
├── cypress.json
├── package.json
└── README.md

cypress/fixtures: Contains test data in JSON format.
cypress/integration: Contains test files (specs).
cypress/plugins: Contains custom plugins.
cypress/support: Contains support files and custom commands.
cypress.json: Cypress configuration file.

4. License
This project is licensed under the MIT License. See the LICENSE file for details.
Feel free to customize this `README.md` further based on the specifics of your project or any additional details you'd like to include.




