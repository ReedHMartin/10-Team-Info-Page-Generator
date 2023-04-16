// Import the Employee class from Employee.js
const Employee = require('./Employee');

// Intern class definition, which extends the Employee class
class Intern extends Employee {
  // TODO: Add constructor with name, id, email, and school parameters. Use 'super' to call the Employee constructor with name, id, and email

  // TODO: Add a method to return the school of the intern

  // TODO: Override the getRole() method to return 'Intern' instead of 'Employee'
}

// Export the Intern class for use in other modules
module.exports = Intern;
