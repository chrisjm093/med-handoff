const router = require("express").Router();
const { User } = require("../models");

//create a  new user in database
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

router.get("/api/users/supervisor", (req, res) => {
  User.findAll({}).then(dbUsers => {
    res.json(dbUsers);
  });
});

router.put("/api/users/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbUser => {
    res.json(dbUser);
  });
});

module.exports = router;
