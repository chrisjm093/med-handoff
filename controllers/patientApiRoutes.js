const router = require("express").Router();
const { Patient } = require("../models");
const db = require("../models");

router.get("/api/patients", (req, res) => {
  Patient.findAll({})

    .then(dbPatients => {
      res.json(dbPatients);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

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

router.post("/api/patients", (req, res) => {
  Patient.create({
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
    .then(dbPatient => {
      res.json(dbPatient);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.put("/api/patients", (req, res) => {
  db.Patient.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbPatient => {
    res.json(dbPatient);
  });
});

router.delete("/api/patients/:id", (req, res) => {
  db.Patient.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPatient => {
    res.json(dbPatient);
  });
});

module.exports = router;
