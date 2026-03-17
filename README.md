# Percy Demo Project

This project demonstrates the integration of Percy for visual testing with Playwright. It includes sample HTML files and a Playwright test setup to capture visual snapshots and ensure UI consistency.

## Project Structure

```
booking1.html
booking2.html
playwright-percy-demo/
    demo_site.png
    package.json
    test.js
```

## Prerequisites

- Node.js installed on your system.
- Percy CLI installed globally or available via `npx`.
- A Percy project token.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/percy/example-percy-playwright.git
   ```

2. Navigate to the project directory:
   ```bash
   cd example-percy-playwright
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Export the Percy token:
   ```bash
   export PERCY_TOKEN=your_percy_project_token
   ```

## Running Tests

To execute the Playwright tests with Percy integration, run:
```bash
npx percy exec --verbose -- mvn test -P sample-percy-test
```

## Notes

- Ensure that the `PERCY_TOKEN` environment variable is set before running the tests.
- You can replace `your_percy_project_token` with the actual token for your Percy project.

## Commands History

Here are some of the commands executed during the setup and testing process:

1. Exporting Percy token:
   ```bash
   export PERCY_TOKEN=web_0042a566fdf20ef45f1abcdafd658603234bace7d4c3ce6388f925dc1bd3045d
   ```

2. Installing dependencies:
   ```bash
   npm install
   ```

3. Running Percy tests:
   ```bash
   npx percy exec --verbose -- mvn test -P sample-percy-test
   ```