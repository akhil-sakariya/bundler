const path = require("path");

function buildTree(files) {
    const tree = {};

    files.forEach(file => {
        const parts = file.split(path.sep);
        let current = tree;

        parts.forEach((part, index) => {
            if (!current[part]) {
                current[part] = index === parts.length - 1 ? null : {};
            }
            current = current[part];
        });
    });

    return tree;
}

function renderTree(node, prefix = "") {
    let output = "";

    const entries = Object.keys(node);
    entries.forEach((key, index) => {
        const isLast = index === entries.length - 1;
        const connector = isLast ? "└── " : "├── ";

        output += `${prefix}${connector}${key}\n`;

        if (node[key] !== null) {
            const newPrefix = prefix + (isLast ? "    " : "│   ");
            output += renderTree(node[key], newPrefix);
        }
    });

    return output;
}

function generateTree(files) {
    const tree = buildTree(files);
    return renderTree(tree);
}

module.exports = { generateTree };