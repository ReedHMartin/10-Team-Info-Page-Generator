// Import the Employee class from Employee.js
const Employee = require('./Employee');

// Manager class definition, which extends the Employee class
class Manager extends Employee {
  // Add constructor with name, id, email, and officeNumber parameters. Use 'super' to call the Employee constructor with name, id, and email
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Add a method to return the office number of the manager
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Override the getRole() method to return 'Manager' instead of 'Employee'
  getRole() {
    return 'Manager';
  }
}

// Export the Manager class for use in other modules
module.exports = Manager;
