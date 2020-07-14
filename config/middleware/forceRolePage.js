module.exports = function(req, res, next) {
  if (req.user) {
    if (req.user.role === "Supervisor") {
      res.redirect("/supervisor");
    } else if (req.user.role === "Practitioner") {
      res.redirect("/practitioner");
    }
  }

  return next();
};
