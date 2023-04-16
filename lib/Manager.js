// Import the Employee class from Employee.js
const Employee = require('./Employee');

// Manager class definition, which extends the Employee class
class Manager extends Employee {
  // TODO: Add constructor with name, id, email, and officeNumber parameters. Use 'super' to call the Employee constructor with name, id, and email

  // TODO: Add a method to return the office number of the manager

  // TODO: Override the getRole() method to return 'Manager' instead of 'Employee'
}

// Export the Manager class for use in other modules
module.exports = Manager;
