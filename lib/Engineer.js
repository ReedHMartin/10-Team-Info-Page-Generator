// Import the Employee class from Employee.js
const Employee = require('./Employee');

// Engineer class definition, which extends the Employee class
class Engineer extends Employee {
  // TODO: Add constructor with name, id, email, and github parameters. Use 'super' to call the Employee constructor with name, id, and email
  
  // TODO: Add a method to return the GitHub username of the engineer
  
  // TODO: Override the getRole() method to return 'Engineer' instead of 'Employee'
}

// Export the Engineer class for use in other modules
module.exports = Engineer;
