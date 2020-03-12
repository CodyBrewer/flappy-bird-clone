const port = 8080; // Specify web server port
const express = require("express"); //load express
const app = express(); //Create instance of express
app.use(express.static(__dirname + "/")); // Serving static files
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
