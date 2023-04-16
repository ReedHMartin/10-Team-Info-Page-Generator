// Function to render an employee card based on their role
function renderEmployeeCard(employee) {

  // Check the employee's role and add additional information to the rendered card based on the role
  let roleSpecificHTML = "";
  if (employee.getRole() === "Manager") {
    roleSpecificHTML = `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`;
  } else if (employee.getRole() === "Engineer") {
    roleSpecificHTML = `<li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
  } else if (employee.getRole() === "Intern") {
    roleSpecificHTML = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
  }

    // Creates HTML code for the employee card
    const CardHTML = `
      <div class="card text-bg-primary m-2" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-name">${employee.getName()}</h2>
          <h5 class="card-title">${employee.getRole()}</h5>          
          <ul class="list-group">          
            <li class="list-group-item">ID: ${employee.getId()}</li>
            card.
            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>         
          </ul>
        </div>
      </div>
    `;

    // Returns  HTML code for the employee card
    return CardHTML;
  }

  // Exports the renderEmployeeCard function
  module.exports = renderEmployeeCard;
  
