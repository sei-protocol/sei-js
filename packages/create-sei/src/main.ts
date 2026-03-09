#!/usr/bin/env node

import { Command } from "commander";
import { listExtensions, runWizard, type WizardOptions } from "./lib.js";

const program = new Command();
program
	.command("app")
	.description("Create a new SEI dApp")
	.option(
		"--name <name>",
		"Specify the name of your dApp. Name must be a valid package name.",
	)
	.option(
		"--extension <extension>",
		"Specify an extension to apply to the base template",
	)

	.action(async (options: WizardOptions) => {
		try {
			await runWizard(options);
		} catch (error) {
			console.error("An error occurred:", error);
			process.exit(1);
		}
	});

program
	.command("list-extensions")
	.description("List all available extensions")
	.action(async () => {
		try {
			await listExtensions();
		} catch (error) {
			console.error("An error occurred:", error);
			process.exit(1);
		}
	});

program.parse(process.argv);
