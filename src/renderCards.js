// Function to render an employee card based on their role
function renderEmployeeCard(employee) {

  // TODO: Add statement to check employee role

    // Creates HTML code for the employee card
    // TODO: Add clickable employee email to the rendered card.
    // TODO: Add additional employee information to the rendered card based on employee role.
    const CardHTML = `
      <div class="card text-bg-primary m-2" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-name">${employee.getName()}</h2>
          <h5 class="card-title">${employee.getRole()}</h5>          
          <ul class="list-group">          
            <li class="list-group-item">ID: ${employee.getId()}</li>
            card.
            <li class="list-group-item">Email: ${employee.getEmail()}</li>            
          </ul>
        </div>
      </div>
    `;

    // Returns  HTML code for the employee card
    return CardHTML;
  }

  // Exports the renderEmployeeCard function
  module.exports = renderEmployeeCard;
  
