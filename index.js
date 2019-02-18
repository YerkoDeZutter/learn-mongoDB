
// import the NPM dependancy package
const express     = require("express");
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");

// initialise express() inside of your app variable
const app = express();

// parse body of incoming json requests
app.use(bodyParser.json());

// import route- and model modules and pass your app
// require("./models/Pet")(app);
// require("./routes/petRoutes")(app);
app.use("/person", require("./routes/api"));

// mongoose.connect("mongodb://username:123password@ds251902.mlab.com:51902/testerino");  THIS IS FOR ONLINE DATABASE

// choose what port on which to run the server
const PORT = 3000;

// use the app variable and listen on the port
app.listen(process.env.port || PORT, () => {
  console.log(`I'M RUNNING ON A SERVER!!! YEY!!!`);
});
