const mongoose    = require("mongoose");

mongoose.Promise = global.Promise;

before(function(done) {

  mongoose.connect("mongodb://localhost/testaroo");

  mongoose.connection.once("open", () =>{
    console.log("I HAVE CONECTED!!! BEHOLD MY POWER!!!");
    done();
  }).on("error", (err) =>{
    console.log("damn those carots for ", err);
  })

})


//remove database for tests

beforeEach(function(done) {

  //remove colection
  mongoose.connection.collections.characters.drop(function() {
    done();
  });

})
