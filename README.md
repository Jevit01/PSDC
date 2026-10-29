# P.S Digital Collectives

Production static source for https://www.psdigitalcollectives.com/.

Edit index.html, style.css, app.js, and assets directly on the gh-pages branch. No build step is required. Keep CNAME set to www.psdigitalcollectives.com and preserve .nojekyll. Legacy React source on other branches predates this release; running its old deployment script would replace the new site.

## Contact form

Uses Formspree endpoint https://formspree.io/f/mnppzjan, configured to deliver to info@psdigitalcollectives.com. Fields: name, email, message; _gotcha is a honeypot. A standard form action provides a fallback without JavaScript. Success/error UI is verified with mocked responses; actual inbox delivery has not been tested.

## Rollback

Previous published commit: f97c56280e8ebcff3583bc022a3e03a92d3df456.
Backup branch: backup/pre-redesign-2026-10-29.

To restore without rewriting history, create a new commit on gh-pages whose tree matches the backup commit (6000359eebc56324af45572b1592bbccc930935a). GitHub Pages will redeploy it. Preserve the existing domain and Pages settings. The backup branch contains the complete previous site.
