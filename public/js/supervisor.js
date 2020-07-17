$(document).ready(() => {
  const employeeTable = $("#employee-table");

  $.ajax({
    url: "/api/users/supervisor",
    method: "GET"
  }).then(response => {
    renderEmployeeList(response);
  });

  function renderEmployeeList(users) {
    users.forEach(user => {
      const employeeTableEntries = $(`
      <tr data-user-id="${user.id}">
          <td scope="row" class="first-name">${user.firstName}</td>
          <td class="last-name">${user.lastName}</td>
          <td class="role">${user.role}</td>
          <td>
            <select class="form-control unit-select">
            <option value=" " ${
              user.unit === " " ? "selected" : ""
            }>  </option>  
            <option ${user.unit === "ICU" ? "selected" : ""}>ICU</option>
              <option ${user.unit === "ER" ? "selected" : ""}>ER</option>
              <option ${
                user.unit === "Floors" ? "selected" : ""
              }>Floors</option>
              <option ${
                user.unit === "Pediatric" ? "selected" : ""
              }>Pediatric</option>
            </select>
          </td>
          <td>
            <select class="form-control shift-select">
              <option ${user.shift === " " ? "selected" : ""}> </option>  
              <option ${user.shift === "Day" ? "selected" : ""}>Day</option>
              <option ${user.shift === "Night" ? "selected" : ""}>Night</option>
            </select>
          </td>
        </tr>`);
      employeeTable.append(employeeTableEntries);
    });
  }

  employeeTable.on("change", ".shift-select", event => {
    const selectedShift = event.target.value;
    const userId = $(event.target)
      .closest("tr")
      .data("user-id");

    $.ajax({
      method: "PUT",
      url: "/api/users/" + userId,
      data: {
        shift: selectedShift
      }
    }).then(successfulChange);
  });
  employeeTable.on("change", ".unit-select", event => {
    const selectedUnit = event.target.value;
    const userId = $(event.target)
      .closest("tr")
      .data("user-id");

    $.ajax({
      method: "PUT",
      url: "/api/users/" + userId,
      data: {
        unit: selectedUnit
      }
    }).then(successfulChange);
  });
});

function successfulChange() {
  $(document.body)
    .append(`<div id="change-action" class="alert alert-success alert-dismissible fade show" role="alert">
  Change successfully made!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>`);
}
