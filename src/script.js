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
