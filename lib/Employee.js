// Employee class definition
class Employee {
  // Employee constructor with name, id, and email parameters
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to return the name of the employee
  getName() {
    return this.name;
  }

  // Method to return the ID of the employee
  getId() {
    return this.id;
  }

  // Method to return the email of the employee
  getEmail() {
    return this.email;
  }

  // Method to return the role of the employee (in this case, 'Employee')
  getRole() {
    return 'Employee';
  }
}

// Export the Employee class for use in other modules
module.exports = Employee;
