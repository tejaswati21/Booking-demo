const { chromium } = require('playwright');
const percySnapshot = require('@percy/playwright');

(async () => {
  // 1. Launch the browser (headless: false lets you see it happen)
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // 2. Navigate to the URL
  console.log("Navigating to DemoSite...");
  await page.goto('http://localhost:3000/booking1.html');

   // 3. Optional: Wait for a specific element to ensure it's loaded
   await page.waitForSelector('.w-full.outline-none'); 

   // wait on that page
   await page.waitForTimeout(3000);

  // 4. Take a screenshot
  await page.screenshot({ path: 'demo_site.png' });
  console.log("Success! Screenshot saved as demo_site.png");

  // Percy Screenshot
  await percySnapshot(page, 'homepage', { widths: [360, 768, 1280] });

  // 5. Close the browser
  await browser.close();
})();