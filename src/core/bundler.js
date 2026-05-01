const fs = require("fs");
const path = require("path");
const { generateTree } = require("./tree");

function isTextFile(file) {
    const textExtensions = [
        ".js", ".ts", ".json", ".html", ".css",
        ".md", ".txt", ".env", ".yml", ".yaml"
    ];

    return textExtensions.includes(path.extname(file));
}

function bundleFiles(files) {
    let output = "";

    files.sort((a, b) => {
        if (a.includes("package.json")) return -1;
        if (b.includes("package.json")) return 1;
        return a.localeCompare(b);
    });

    files.forEach(file => {
        try {
            if (!isTextFile(file)) return;

            const stats = fs.statSync(file);
            if (stats.size > 200000) return;

            const content = fs.readFileSync(file, "utf8");

            output += `\n\n===== FILE: ${file} =====\n`;
            output += content;
        } catch { }
    });

    return output;
}

function bundleWithTree(files) {
    const tree = generateTree(files);
    const bundled = bundleFiles(files);

    return `
📁 Project Structure:

${tree}

${bundled}
`;
}

module.exports = { bundleFiles, bundleWithTree };