const fs = require("fs");
const packageJson = require("./package.json");

packageJson.homepage =
  "https://<your-github-username>.github.io/<repository-name>";
packageJson.scripts = {
  ...packageJson.scripts,
  predeploy: "npm run build",
  deploy: "gh-pages -d build"
};

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
console.log("package.json updated for GitHub Pages deployment.");
