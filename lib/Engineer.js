// Import the Employee class from Employee.js
const Employee = require('./Employee');

// Engineer class definition, which extends the Employee class
class Engineer extends Employee {
  // Constructor with name, id, email, and github parameters. Uses 'super' to call the Employee constructor with name, id, and email
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Method to return the GitHub username of the engineer
  getGithub() {
    return this.github;
  }

  // Override the getRole() method to return 'Engineer' instead of 'Employee'
  getRole() {
    return 'Engineer';
  }
}

// Export the Engineer class for use in other modules
module.exports = Engineer;
