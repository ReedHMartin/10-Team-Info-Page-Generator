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

// Create an array to store the team members
let teamMembers = [];

// Create a function to initialize the application
function init() {
  // Call the function to prompt for the manager's information
  promptManager();
}

// Call the init() function to start the application
init();

// Create a function to render the HTML cards for each team member
function renderEmployeeCard(teamMember) {
  // Check the role of the team member to determine which type of card to generate
  if (teamMember instanceof Manager) {
    // If the team member is a manager, generate a manager card
    return generateManagerCard(teamMember);
  } else if (teamMember instanceof Engineer) {
    // If the team member is an engineer, generate an engineer card
    return generateEngineerCard(teamMember);
  } else if (teamMember instanceof Intern) {
    // If the team member is an intern, generate an intern card
    return generateInternCard(teamMember);
  } else {
    // If the team member is not a manager, engineer, or intern, throw an error
    throw new Error('Invalid team member type');
  }
}

// Create function to generate the final HTML output
function generateHTML(teamMembers) {
  // Use map() function to call the renderEmployeeCard() function for each team member and return an array of HTML card strings
  const renderedCards = teamMembers.map((teamMember) => renderEmployeeCard(teamMember));
  
  // Join the array of HTML card strings into a single string
  const renderedCardsString = renderedCards.join('');
  
  // Create an HTML template string with placeholders for the rendered HTML cards
  const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      ${renderedCardsString}
    </main>
  </body>
  </html>
  `;

  // Return the final HTML output as a string
  return htmlTemplate;
}


  // TODO: Create a function to save the generated HTML to a file in the dist folder
function saveHTML(html) {
    // TODO: Use the fs module to write the final HTML output to a file in the dist folder
  
    // TODO: Log a message to the console indicating that the file has been saved successfully
  }
  
  // TODO: Update the function for prompting to add more team members or finish building the team
function promptAddTeamMember() {
    // TODO: Use Inquirer to prompt the user to add an engineer, an intern, or finish building the team
  
    // TODO: Based on the user's choice, call the appropriate function (promptEngineer, promptIntern, or generate the final HTML output)
  
    // TODO: If the user decides to finish building the team, call the generateHTML function to create the final HTML output

    // TODO: Call the saveHTML function to save the output to to dist folder
  }