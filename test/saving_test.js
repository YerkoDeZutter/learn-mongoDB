const assert = require("assert");
const characters = require("../models/characters");

describe("saving records", function(){

  it("save record 2 database", function(done){

    var char1 = new characters({
      name: "kyoma",
      age: 18
    })

    char1.save().then(function(){

      assert(char1.isNew === false);
      done();

    });

  })

})
