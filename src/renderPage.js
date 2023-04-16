// Function to render the entire HTML page with team members' information
function renderPage(teamMembers) {
    // HTML code for the entire page
    const pageHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>My Team</title>
        </head>
        <body>
          <header>
            <h1>My Team</h1>
          </header>
          <main>
            ${teamMembers.map(member => renderEmployeeCard(member)).join("")}
          </main>
        </body>
      </html>
    `;
    // Returns the entire HTML page as a string
    return pageHTML;
}

module.exports = renderPage;