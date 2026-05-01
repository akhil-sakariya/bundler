#!/usr/bin/env node

const { program } = require("commander");

program
    .command("bundle")
    .description("Bundle entire project into one file")
    .action(() => {
        require("./commands/bundle").run();
    });

program.parse();