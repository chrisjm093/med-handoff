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
      <tr>
          <td scope="row" class="first-name">${user.firstName}</td>
          <td class="last-name">${user.lastName}</td>
          <td class="role">${user.role}</td>
          <td class="unit">${user.unit}</td>
          <td class="shift">${user.shift}</td>
          <td>
            <select class="form-control" id="assign-unit">
              <option>ICU</option>
              <option>ER</option>
              <option>Floors</option>
              <option>Pediatric</option>
            </select>
          </td>
          <td>
            <select class="form-control" id="assign-shift">
              <option>Day</option>
              <option>Night</option>
            </select>
          </td>
        </tr>`);
      employeeTable.append(employeeTableEntries);
    });
  }
});
