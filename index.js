// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Import classes and helper functions
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const renderEmployeeCard = require('./src/renderCards');
const renderPage = require('./src/renderPage');

// Placeholder array to store team members
const teamMembers = [];

// Function to add a new team member
async function addTeamMember() {
  const teamMemberOptions = [
    {
      type: 'list',
      name: 'role',
      message: 'What type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Finish building my team'],
    },
  ];

  const { role } = await inquirer.prompt(teamMemberOptions);

  if (role === 'Finish building my team') {
    return;
  }

 // Initialize an empty array to store specific questions based on the team member's role
let specificQuestions = [];

// Check if the role is 'Engineer'
if (role === 'Engineer') {
  // If the role is 'Engineer', set specificQuestions to contain a question asking for the engineer's GitHub username
  specificQuestions = [
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s GitHub username?',
    },
  ];
} else {
  // If the role is not 'Engineer' (in this case, it must be 'Intern'), set specificQuestions to contain a question asking for the intern's school
  specificQuestions = [
    {
      type: 'input',
      name: 'school',
      message: 'What is the intern\'s school?',
    },
  ];
}



async function main() {
    // Prompt user for manager information
    const managerQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the manager\'s ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
      },
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);
}
  
    // Create a new Manager object and add it to the teamMembers array
    const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
    teamMembers.push(manager);
      
    // Generate HTML cards for each team member
    const teamCardsHTML = teamMembers.map(renderEmployeeCard).join('');
  
    // Generate the final HTML file with teamCardsHTML
    const finalHTML = renderPage(teamCardsHTML);
  
    // Write the HTML file to the 'dist' directory
    fs.writeFileSync(path.join(__dirname, 'dist', 'team.html'), finalHTML);
  }
  
  // Run the main function
  main();
  