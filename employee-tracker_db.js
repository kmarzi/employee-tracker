const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql");
const cTable = require("console.table");
// const { allowedNodeEnvironmentFlags } = require("process");

// const generateMarkdown = require("./generateMarkdown");


const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employee_tracker_db"
});

///QUESTIONS
const menu = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["View All Employees",
      "View all employee by department",
      "View All Employees by Role",
      "Add Employee",
      "Add Role",
      "Add Department",
      "Update Employee Role",
      "Exit"],
    name: "main"
  }
];

const addEmployee = [
  {
    type: "input",
    message: "What is the employees's first name?",
    name: "emFirst"
  },
  {
    type: "input",
    message: "What is the employees last name?",
    name: "emLast"
  },
  {
    type: "list",
    message: "What is the employee's role?",
    choices: ["Pediatric Surgeon", "General Surgeon", "Cardiothoracic Surgeon",
      "Neurosurgeon", "Plastic Surgeon", "Trauma Surgeon"],
    name: "emRole"
  },
  {
    type: "list",
    message: "Who is the employee's manager?",
    choices: ["Miranda Bailey", "Richard Webber"],
    name: "emManager"

  }
];


const addRole = [
  {
    type: "input",
    message: "What is the title of this role?",
    name: "roleTitle"
  },
  {
    type: "input",
    message: " What is the salary of this role?",
    name: "salaryRole"
  },
  {
    type: "input",
    message: "What department is this role in?",
    name: "depRole"
  }
];

const addDepartment = [
  {
    type: "input",
    message: "What is the title of this department?",
    name: "depTitle"
  }
];

const viewDepartment = [
  {
    type: "list",
    message: " Which department?",
    choices: ["Pediatrics", "General", "Cardiothoracic",
      "Neurosurgery", "Plastic Surgery", "Trauma"],
    name: "whichDep"
  }
];
const viewRole = [
  {
    type: "list",
    message: "Which role?",
    choices: ["Pediatric Surgeon", "General Surgeon", "Cardiothoracic Surgeon",
      "Neurosurgeon", "Plastic Surgeon", "Trauma Surgeon"],
    name: "whichRole"
  }

];

const updateEmployee = [{
  type: "list",
  message: " Which employee do you want to update?",
  choices: ["Alex Karev", "Meredith Grey", "Maggie Pierce",
    "Amelia Shepherd", "Jackson Avery", "Owen Hunt"],
  name: "emUpdate"
},
{
  type: "list",
  message: "Which role is the employee switching to?",
  choices: ["Pediatric Surgeon", "General Surgeon", "Cardiothoracic Surgeon",
    "Neurosurgeon", "Plastic Surgeon", "Trauma Surgeon"],
  name: "roleSwitch"
}
];

//makes connection
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  inquirer.prompt(menu).then(function (userChoice) {
    console.log(userChoice.main);
    const choice = userChoice.main;

    if (choice === "View All Employees") {
      viewEmployees();
    } else if (choice === "View all employee by department") {
      allDepartments();
    } else if (choice === "View All Employees by Role") {
      allRoles();
    } else if (choice === "Add Employee") {
      employeeAdd();
    } else if (choice === "Add Role") {
      roleAdd();
    } else if (choice === "Add Department") {
      departmentAdd();
    } else if (choice === "Update Employee Role") {
      updateEmployeeRole();
    }
    else {
      connection.end();
    }
  })
};

// function afterConnection() {
//   inquirer.query("SELECT * FROM songs", function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     connection.end();
//   });
// }
function employeeAdd() {
  inquirer.prompt(addEmployee).then(function (info) {
    console.log(info)
    console.table(res)

    connection.query("SELECT * FROM role", (err, res) => {
      console.log(res)
      const filteredArray = res.filter(val => info.emRole === val.title
      )
      console.log(filteredArray)
      console.table(res)
      connection.query("INSERT INTO employee SET ?",
        {
          first_name: info.emFirst,
          last_name: info.emLast,
          role_id: filteredArray[0].id
          // manager_id:,


        }, (err, res) => {
          if (err) throw err
          afterConnection()
        })
    })
  })
}


function viewEmployee() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection();
  })
}

function allDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection();
  })
}

function allRoles() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection();
  })
}

function roleAdd() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection();
  })
}

function departmentAdd() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection();
  })
}

function updateEmployeeRole() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res)
    afterConnection();
  })
}