const router = require("express").Router();
const { Patients } = require("../models");

router.get("/api/patients", (req, res) => {
  Patients.findAll({})

    .then(dbPatients => {
      res.json(dbPatients);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

module.exports = router;
