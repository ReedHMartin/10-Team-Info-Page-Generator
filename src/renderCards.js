function renderEmployeeCard(employee) {
    const CardHTML = `
      <div class="card text-bg-primary m-2" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-name">${employee.getName()}</h2>
          <h5 class="card-title">${employee.getRole()}</h5>
          <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: ${employee.getEmail()}</li>
          </ul>
        </div>
      </div>
    `;
    return CardHTML;
  }
  
  module.exports = renderEmployeeCard;
  