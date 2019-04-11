const yargs = require("yargs");
const chalk = require('chalk')
yargs.command({
  command: "delete",
  builder: {
    title: {
      discription: "delete user from list",
      alias: "t",
      demandOption: true,
      type: "string",
      
    }
  },
  handler: argv => {
    console.log(chalk.bgGreenBright("deleted user .", argv.title));
  }
})
yargs.parse()