#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { execSync } = require('child_process');

const packageJson = require('../package.json');

program
  .version(packageJson.version)
  .argument('[project-name]', 'Name of the project')
  .option('-y, --yes', 'Skip prompts and use default values')
  .action(async (projectName, options) => {
    try {
      let appName = projectName;
      let moduleName;

      if (!options.yes && !projectName) {
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'appName',
            message: 'What is your project name?',
            default: 'my-fiber-app',
            validate: (input) => {
              if (/^[a-zA-Z0-9-_]+$/.test(input)) return true;
              return 'Project name can only contain letters, numbers, hyphens, and underscores';
            },
          },
          {
            type: 'input',
            name: 'moduleName',
            message: 'What is your Go module name?',
            default: (answers) => `github.com/yourusername/${answers.appName}`,
            validate: (input) => {
              if (input.trim()) return true;
              return 'Module name is required';
            },
          },
        ]);

        appName = answers.appName;
        moduleName = answers.moduleName;
      } else {
        appName = appName || 'my-fiber-app';
        moduleName = `github.com/yourusername/${appName}`;
      }

      const targetDir = path.join(process.cwd(), appName);
      const templateDir = path.join(__dirname, '..', 'template');

      // Check if directory exists
      if (fs.existsSync(targetDir)) {
        console.error(chalk.red(`Error: Directory ${appName} already exists!`));
        process.exit(1);
      }

      console.log(chalk.blue(`Creating a new Fiber app in ${chalk.green(targetDir)}`));

      // Copy template files
      await fs.copy(templateDir, targetDir);

      // Process template files
      const filesToProcess = [
        'go.mod',
        'README.md',
        'Makefile',
      ];

      for (const file of filesToProcess) {
        const filePath = path.join(targetDir, file);
        if (fs.existsSync(filePath)) {
          let content = await fs.readFile(filePath, 'utf8');
          content = content.replace(/{{\.ModuleName}}/g, moduleName);
          content = content.replace(/{{\.AppName}}/g, appName);
          await fs.writeFile(filePath, content);
        }
      }

      console.log(chalk.green('✓ Project created successfully!'));
      console.log();
      console.log('Next steps:');
      console.log(chalk.cyan(`  cd ${appName}`));
      console.log(chalk.cyan('  go mod tidy'));
      console.log(chalk.cyan('  go run main.go'));
      console.log();
      console.log('To run with Docker:');
      console.log(chalk.cyan('  docker-compose up'));
      console.log();
      console.log(chalk.yellow('Happy coding! 🚀'));

    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

program.parse();