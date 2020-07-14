const router = require("express").Router();
const { Patients } = require("../models");

router.post("/api/patients", (req, res) => {
  Patients.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    unit: req.body.unit,
    age: req.body.age,
    history: req.body.history,
    diagnosis: req.body.diagnosis,
    codeStatus: req.body.codeStatus,
    tests: req.body.tests,
    therapies: req.body.therapies,
    soap: req.body.soap
  })
  .then(() => {
    res.redirect(307, "/api/login");
  .catch(err => {
    res.json();
  });
});

 

  module.exports = router;