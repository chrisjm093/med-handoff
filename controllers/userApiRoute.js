const router = require("express").Router();
const { User } = require("../models");

router.post("/api/users", (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
    shift: req.body.shift
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.get("/api/users/roles/:role", (req, res) => {
  User.findAll({
    where: {
      role: req.params.role
    }
  }).then(dbUsers => {
    res.json(dbUsers);
  });
});

module.exports = router;
