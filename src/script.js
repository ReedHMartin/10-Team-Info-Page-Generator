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

// TODO: Create a function to render the  HTML cards for each team member
function renderEmployeeCard(teamMember) {
    // TODO: Call the method or function to generate the HTML card based on role
  
    // TODO: Return the generated HTML card as a string
  }

  // TODO: Create function to generate the final HTML output
function generateHTML(teamMembers) {
    // TODO: Use renderEmployeeCard function to generate HTML cards for each team member
    // and join them into a single string
  
    // TODO: Combine rendered HTML cards with an HTML template to create the final HTML output
  
    // TODO: Return the final HTML output as a string
  }