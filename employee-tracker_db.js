const inquirer = require("inquirer");
const fs = require("fs");

// const generateMarkdown = require("./generateMarkdown");


const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employee-tracker_db"
});
//makes connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

///QUESTIONS
const questions = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [],
    name: "title"
  },
  {
    type: "input",
    message: "Which employee manage",
    name: "description"
  },
  {
    type: "input",
    message: "what comand should the user run to install the dependancies?",
    default: "npm i",
    name: "install"
  },
  {
    type: "input",
    message: "How does this user use your application?",
    name: "usage"
  },
  {
    type: "list",
    message: "What kind of licensing does your application have?",
    name: "license",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD", "NONE"]
  },
  {
    type: "input",
    message: "Would you like your users to contribute to your application?",
    name: "contributing"
  },
  {
    type: "input",
    message: "How do your users test your application?",
    name: "tests"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "githubUsername"
  },
  {
    type: "input",
    message: " What is your email address?",
    name: "email"
  }

];














//function for prompting questions
function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, 2));

    // 1. pass answers into generateMarkdown() and save result in a variable
    const md = generateMarkdown(answers);
    console.log(md);

    fs.writeFile("README1.md", md, err => {

    }

      // 2. pass result from line above into writeFile()
      //writeToFile("README.md", md);
    )
  });
}

// function call to initialize program
init();