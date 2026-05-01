![Bundler Logo](./src/assets/logo.png)
# 📦 Bundler

A powerful CLI tool to **bundle your entire codebase into a single file** — optimized for sharing with AI tools like ChatGPT, Claude, and others.

---

## 🚀 Features

* 📁 Recursively scans entire project
* 🚫 Respects `.gitignore`
* 🧠 Outputs clean, structured format
* 📦 Combines all files into one file
* 🌳 Includes project folder structure (tree view)
* ⚡ Skips large/binary files
* 🎯 Optimized for AI input (copy-paste friendly)

---

## 📸 Example Output

```
📁 Project Structure:

├── src
│   ├── core
│   ├── commands
│   └── utils
├── package.json

===== FILE: src/core/bundler.js =====
<code here>

===== FILE: src/commands/bundle.js =====
<code here>
```

---

## 📦 Installation

```bash
npm install
npm link
```

---

## ▶️ Usage

### Bundle entire project

```bash
bundler bundle
```

Or (if default command enabled):

```bash
bundler
```

---

## 📄 Output

Generates:

```
ai-bundle.txt
```

You can directly paste this into AI tools.

---

## ⚙️ Tech Stack

* Node.js
* glob
* ignore
* chalk

---

## 📁 Project Structure

```
src/
  cli.js
  commands/
    bundle.js
  core/
    fileScanner.js
    bundler.js
  utils/
```

---

## 🧠 Use Cases

* Debugging with AI
* Sharing full code context
* Code reviews
* Documentation generation

---

## 🔥 Upcoming Features

* 🔍 Smart file filtering (`debug` mode)
* 🧠 AI integration (`ask` command)
* ⚡ Semantic search
* 🧩 Dependency-aware bundling

---

## 🤝 Contributing

Feel free to fork and improve!

---

## 📜 License

MIT
