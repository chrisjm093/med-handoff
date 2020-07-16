$(document).ready(() => {
  const patientTable = $("#patient-table");
  //let current modal action
  $.ajax({
    url: "/api/patients",
    method: "GET"
  }).then(response => {
    render(response);
  });

  //   $("#create").on("show.bs.modal", event => {
  //     $.ajax({
  //       url: "/api/patients",
  //       method: "POST"
  //     }).then(response => {
  //        location.reload();
  //     });
  //   });

  function render(patients) {
    patients.forEach(patient => {
      const patientTableEntry = $(`
        <th scope="row" class="unit">${patient.unit}</th>
        <td class="room-number">${patient.roomNumber}</td>
        <td class="first-name">${patient.firstName}</td>
        <td class="last-name">${patient.lastName}</td>
        <td class="age">${patient.age}</td>
        <td class="code-status">${patient.codeStatus}</td>
        <td class="diagnosis">${patient.diagnosis}</td>
        <td><button type="button" class="btn btn-secondary fas fa-plus-square" data-toggle="modal" data="${patient.id}" data-target="#staticBackdrop">
            </button>
        </td>`);
      patientTable.append(patientTableEntry);
    });
  }
});
