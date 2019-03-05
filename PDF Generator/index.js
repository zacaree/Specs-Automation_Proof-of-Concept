const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });

    await page.pdf({
      path: "SpecSheet.pdf",
      format: "Tabloid",
      printBackground: true
    });

    console.log("done");
    await browser.close();
    process.exit();
  } catch (e) {
    console.log("our error:", e);
  }
})();
