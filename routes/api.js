const express = require("express");
const router = express.Router();


router.get("/jim", (req, res) =>{
  res.send({person: "jim"});
})

router.post("/jim", (req, res) =>{
  console.log(req.body.pizza);
  res.send(req.body.pizza);
})



module.exports = router;
