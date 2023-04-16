// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Import classes and helper functions
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderEmployeeCard = require('./src/renderCards');

// Placeholder array to store team members
const teamMembers = [];

// Main function to start the application
async function main() {
    // Prompt user for manager information
    // TODO: Add inquirer prompts for manager details
  
    // Create a new Manager object and add it to the teamMembers array
    const manager = new Manager(/* manager details */);
    teamMembers.push(manager);
  
    // Prompt user to add engineers, interns or finish building the team
    // TODO: Add inquirer prompts to choose the next action
  
    // Loop through adding engineers/interns until the user chooses to finish building the team
    // TODO: Add logic to handle user choices and add team members accordingly
  
    // Generate HTML cards for each team member
    const teamCardsHTML = teamMembers.map(renderEmployeeCard).join('');
  
    // Generate the final HTML file with teamCardsHTML
    // TODO: Add a function to generate the final HTML file
  
    // Write the HTML file to the 'dist' directory
    fs.writeFileSync(path.join(__dirname, 'dist', 'team.html'), finalHTML);
  }
  
  // Run the main function
  main();
  