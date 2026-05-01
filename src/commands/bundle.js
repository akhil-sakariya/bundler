const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { scanFiles } = require("../core/fileScanner");
const { bundleWithTree } = require("../core/bundler");

function run() {
    console.log(chalk.blue("🔍 Scanning project..."));

    const files = scanFiles();

    if (!files.length) {
        console.log(chalk.red("❌ No files found"));
        return;
    }

    console.log(chalk.yellow(`📁 Found ${files.length} files`));

    console.log(chalk.blue("📦 Building bundle with structure..."));

    const bundled = bundleWithTree(files);

    const outputPath = path.join(process.cwd(), "ai-bundle.txt");

    fs.writeFileSync(outputPath, bundled, "utf8");

    console.log(chalk.green(`✅ Bundle created: ${outputPath}`));
}

module.exports = { run };