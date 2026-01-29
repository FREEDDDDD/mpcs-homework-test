# mpcs-homework-test
This project is a simple Node.js web application built with Express. It includes basic API endpoints, unit tests, code quality checks, and a CI pipeline implemented using GitHub Actions.

Prerequisites

Ensure the following tools are installed on your system:

Node.js (version 24 or later recommended)

npm

Git

Verify installation:

node -v
npm -v
git --version

Project Setup
1. Clone the Repository
the url is given in thedocument

2. Install Dependencies
npm install

3. Run the Application
npm start


The application will start on:

http://localhost:3000

Available Endpoints
Method	Endpoint	Description
GET	/	Health check
GET	/greet/:name	Returns a greeting message
GET	/add?a=&b=	Returns the sum of two numbers
Running Tests

Run unit tests:

npm test


Run tests with coverage:

npm test -- --coverage


Coverage reports are generated in the coverage/ directory.

Code Quality Checks

Run ESLint:

npm run lint


Check code formatting with Prettier:

npm run format:check

CI Pipeline

This project uses GitHub Actions for Continuous Integration.

The pipeline:

Triggers on push to the main branch

Triggers on pull requests targeting main

Installs dependencies

Runs ESLint

Checks Prettier formatting

Runs unit tests with coverage enforcement

Builds the application

Uploads test coverage reports as artifacts

The workflow file is located at:

.github/workflows/ci.yml
