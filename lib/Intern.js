// Import the Employee class from Employee.js
const Employee = require('./Employee');

// Intern class definition, which extends the Employee class
class Intern extends Employee {
  // Constructor with name, id, email, and school parameters. Use 'super' to call the Employee constructor with name, id, and email
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // Method to return the school of the intern
  getSchool() {
    return this.school;
  }

  // Override the getRole() method to return 'Intern' instead of 'Employee'
  getRole() {
    return 'Intern';
  }
}

// Export the Intern class for use in other modules
module.exports = Intern;
