// Import Inquirer 
const inquirer = require('inquirer');

// Import modules from Node.js
const fs = require('fs');
const path = require('path');

// Import classes from 'lib' folder
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: Create an array to store the team members
let teamMembers = [];

// TODO: Create a function to initialize the application
function init() {
  // TODO: Call the function to prompt for the manager's information
  promptManager();
}

// TODO: Call the init() function to start the application
init();