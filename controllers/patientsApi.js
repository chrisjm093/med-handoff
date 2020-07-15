const router = require("express").Router();
const { Patient } = require("../models");

router.get("/api/patients/:id", (req, res) => {
  Patient.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbPatient => {
      res.json(dbPatient);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.get("/api/patients", (req, res) => {
  Patient.findAll({})
    .then(dbPatient => {
      res.json(dbPatient);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

module.exports = router;
