/** Program flow:
 * Create array "employeeStack"
 * 1. Prompt for Manager info
 * 1b. Create a new "Manager" with provided details. Push it onto employeeStack.
 * 
 * 2. While Loop
 *  2a. Prompt "Add Intern, Add Engineer, or Complete"
 *  2b -> Intern: Prompt for Intern details, create new Intern instance w/ provided details, push to employeeStack
 *  2c -> Engineer: Same as Intern, except for Engineer details. Push onto employeeStack
 * 
 * 3. Complete -> Build an HTML document. In the center, loop over every entry in employeeStack and call .renderCard()
 */

var employeeStack = [];

/** TODO: Use "Inquirer" to push 1 manager and multiple Engineers and/or Interns to employeeStack */


/** Render HTML */

var htmlFragments = [];

/** Document Header */
htmlFragments.push(`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Info</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div class="text-center text-bg-danger p-3">
            <h1>My Team</h1>
        </div>
        <div class="mt-5 d-inline-flex p-5 d-flex flex-wrap justify-content-center">
`);

/** 1 card per employee */
employeeStack.forEach(function(Employee){
    htmlFragments.push(Employee.renderCard());
});


/** Document Footer */
htmlFragments.push(`
            <div class="card text-bg-primary m-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class>Name</h2>
                    <h5 class="card-title">Title</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">GitHub: </li>
                    </ul>
                </div>
            </div>
            <div class="card text-bg-primary m-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class>Name</h2>
                    <h5 class="card-title">Title</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">GitHub: </li>
                    </ul>
                </div>
            </div>
            <div class="card text-bg-primary m-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class>Name</h2>
                    <h5 class="card-title">Title</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">GitHub: </li>
                    </ul>
                </div>
            </div>
            <div class="card text-bg-primary m-2" style="width: 18rem;">
                <div class="card-body">
                    <h2 class>Name</h2>
                    <h5 class="card-title">Title</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID: </li>
                        <li class="list-group-item">Email: </li>
                        <li class="list-group-item">GitHub: </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>

    </html>
`);

/** Return HTML document */
return htmlFragments.join('');