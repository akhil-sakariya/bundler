const glob = require("glob");
const fs = require("fs");
const ignore = require("ignore");

function loadIgnore() {
    const ig = ignore();

    // default ignores
    ig.add([
        "node_modules",
        ".git",
        "dist",
        "build",
        "*.log"
    ]);

    // load .gitignore
    if (fs.existsSync(".gitignore")) {
        const content = fs.readFileSync(".gitignore", "utf8");
        ig.add(content);
    }

    return ig;
}

function scanFiles() {
    const ig = loadIgnore();

    const files = glob.sync("**/*", {
        nodir: true,
        dot: false
    });

    return files.filter(file => !ig.ignores(file));
}

module.exports = { scanFiles };