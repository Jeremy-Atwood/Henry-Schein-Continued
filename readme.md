
# Henry Schein One
## Explanation

Create a web form that gathers the following information from the user:

- Full Name
- Position/Title
- Manager's Name
- Company Name
- Phone Number
- Salary
- Current Employment Status

Provide a "Process Info" button that, when clicked, completes the following:

1. Re-display the data in a business card style block
2. Display a table of adjusted salary values for different regions:
	- Base: original salary
	- West Coast: salary * 0.6
	- Mid West: salary * 1.2
	- East Coast: salary * 0.8

If the form data is changed allow the "Process Info" button to be clicked again to update the page.

Provide simple validation on the salary field. The field should be a positive number above 10000.
It should also accept the [$,.] characters so a value like $15,512.13 is considered valid.

## Requirements

The salary calculation should be performed on the server side. The web page should send an asynchronous request to the server and then display the results as described in the Explanation section.

The preferred technology stack includes node.js and vue.js but any working implementation is acceptable. You are free to use any other packages or libraries.

You should also include a document that describes the best practices you applied for data modeling and view modeling. Also describe what principals you applied to your web API design.
Additionally, describe the security considerations that you would address if this application were hosted publicly on the Internet.

## Notes

The included HTML and CSS are provided as basic templates. Replace or modify them as needed.

You should spend no more than 4 ~ 8 hours on this exercise.

Your solution should demonstrate the following skills:
- Client/Server communication
- Modern API design
- Modern server application design
- Dynamic DOM manipulation
- Understanding of HTML, CSS, JavaScript
- Understanding of Models, Views, Components
- Input validation and security


