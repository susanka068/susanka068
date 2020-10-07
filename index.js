#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:triinsiagle@gmail.com");
          console.log("\nDone, see ya soon.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Saiyonara .\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("             Susanka Majumder"),
  handle: chalk.white("@susanka068"),
  Academics: `${chalk.white("Student at")} ${chalk
    .hex("#2b82b2")
    .bold("Jadavpur University")}`,
  InstaGram:
    chalk.gray("https://www.instagram.com/") + chalk.cyan("drunk_pheonix"),
  github: chalk.gray("https://github.com/") + chalk.green("susanka068"),
  linkedin: chalk.gray("https://cutt.ly/") + chalk.blue("susanka"),
  web: chalk.cyan("https://susanka068.github.io/"),
  npx: chalk.red("npx") + " " + chalk.white("susanka"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
  labelAcademics: chalk.white.bold("  Academics:"),
  labelInstagram: chalk.white.bold("  Instagram:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelAcademics}  ${data.Academics}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    `${data.labelInstagram}  ${data.InstaGram}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("my inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi, I will try ")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
