const router = require("express").Router();
const forceRolePage = require("../config/middleware/forceRolePage");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", forceRolePage, (req, res) => {
  // If the user already has an account send them to the members page

  res.render("login");
});

router.get("/signup", forceRolePage, (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  res.render("login");
});

router.get("/practitioner", isAuthenticated, (req, res) => {
  res.render("practitioner");
});

router.get("/supervisor", isAuthenticated, (req, res) => {
  res.render("supervisor");
});

module.exports = router;
