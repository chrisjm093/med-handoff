$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const firstName = $("#first-name");
  const lastName = $("#last-name");
  const roleChoosen = $("#role");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      first: firstName.val().trim(),
      last: lastName.val().trim(),
      role: roleChoosen.val(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.first,
      userData.last,
      userData.role,
      userData.email,
      userData.password
    );
    firstName.val("");
    lastName.val("");
    roleChoosen.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first, last, role, email, password) {
    $.post("/api/signup", {
      first: first,
      last: last,
      role: role,
      email: email,
      password: password
    })
      // eslint-disable-next-line no-unused-vars
      .then(result => {
        window.location.reload();
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
