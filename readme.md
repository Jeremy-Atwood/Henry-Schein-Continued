# Practices used for data modeling and viewing
-I grabbed the input from the user directly on the HTML file and, to protect data at this time, I used an API request to send that data to server side Javascript file to run the calculations on the salary.
-Once that salary information was calculated I then sent that data to the View/Data/info.js file to save that object into a new array to have the entered persons data replace the information in the business card and the salary adjustment card.
-With that array in the View/Data/info.js file I am going to set it up to be read by the NPM sequilize to add the object into an SQL database to be called back to in the future to be either deleted or updated as desired. Also, a new card is going to be added that retrieves that data from the API call/ database with an added on ID to be able to be updated and deleted to have a full CRUD methodology available.

# API design principals
-Have the data entered into the website by the visitor entered in as an object and send the data to a different file that is not viewable on the front-end viewing and in a browsers console
-Have the data sent through the API be retrieved and displayed in another HTML document either in a new card or in a safe hyperlink that does not send that information to a different website and keeps everything contained in one application/ web page

# Security Considerations
-One main security consideration that I would want to apply to this is having all of the visitors information stored on a database and not within the files themselves as an array. Even though that information would be cleared when the cache is cleared for the browser, or when the server is restarted I would not want it to be storred in the files anywhere if it can be avoided.
-When the database is set up and initialized I would want to run all of the visitors entered information through an encription middleware when it is either received or sent to the server, and decrypted when it is requested from the server or when the response is received from the server.
-One encryption that I was inittially thinking of using is the BCrypt Node Package, and looking through other Node encryption packages to find out what would be the best one to use for this project and to protect visitors information as best as possible.

## Future updates
-Fully add all the API routes and create the database to store visitor information
-Fully remove any Javascript/ Jquery code from the HTML file that contains or manipulates any visitor information that is received from the form and have all of that stored on the server side of things.
-Convert the HTML files to Vue.js to make sure that I am able to convert them correctly and successfully use Vue.js