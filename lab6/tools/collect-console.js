const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  page.on('console', msg => {
    try {
      console.log('PAGE LOG:', msg.type(), msg.text());
    } catch (e) {
      console.log('PAGE LOG:', msg.type(), msg);
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.toString());
  });

  page.on('requestfailed', req => {
    console.log('REQUEST FAILED:', req.url(), req.failure().errorText);
  });

  try {
    // attach window.onerror handler to surface runtime errors
    await page.evaluateOnNewDocument(() => {
      window.addEventListener('error', (e) => {
        // eslint-disable-next-line no-console
        console.error('window.error', e.error ? (e.error.stack || e.error.message) : e.message);
      });
      window.addEventListener('unhandledrejection', (e) => {
        // eslint-disable-next-line no-console
        console.error('unhandledrejection', e.reason);
      });
    });

    await page.goto('http://localhost:4200', { waitUntil: 'networkidle2', timeout: 20000 });
    // give app some extra time
    await new Promise(r => setTimeout(r, 2000));
    // snapshot html
    const html = await page.content();
    console.log('PAGE HTML SNAPSHOT START');
    console.log(html.substring(0, 2000));
    console.log('PAGE HTML SNAPSHOT END');
  } catch (err) {
    console.error('Error loading page:', err);
  } finally {
    await browser.close();
  }
})();
