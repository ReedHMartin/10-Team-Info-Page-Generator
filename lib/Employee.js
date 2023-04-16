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

  // Method to render an HTML card for the employee, including their name, role, ID, and email
  renderCard() {
    const CardHTML = `
      <div class="card text-bg-primary m-2" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-name">${this.getName()}</h2>
          <h5 class="card-title">${this.getRole()}</h5>
          <ul class="list-group">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item">Email: ${this.getEmail()}</li>
          </ul>
        </div>
      </div>
    `;
    return CardHTML;
  }
}

// Export the Employee class for use in other modules
module.exports = Employee;
