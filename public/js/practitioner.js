$(document).ready(() => {
  const patientTable = $("#patient-table");
  //let current modal action
  $.ajax({
    url: "/api/patients",
    method: "GET"
  }).then(response => {
    console.log(response);
    render(response);
  });

  function render(patients) {
    patients.forEach(patient => {
      const patientTableEntry = $(`
        <tr>
          <td scope="row" class="unit">${patient.unit}</td>
          <td class="room-number">${patient.roomNumber}</td>
          <td class="first-name">${patient.firstName}</td>
          <td class="last-name">${patient.lastName}</td>
          <td class="age">${patient.age}</td>
          <td class="code-status">${patient.codeStatus}</td>
          <td class="diagnosis">${patient.diagnosis}</td>
          <td><button id="patient-modal-button" type="button" class="btn btn-secondary fas fa-plus-square" data-patientId="${patient.id}" data-toggle="modal" data-target="#patient-modal">
              </button>
          </td>
        </tr>`);
      patientTable.append(patientTableEntry);
    });
  }
  $("#patient-modal").on("show.bs.modal", event => {
    const modalButton = $(event.relatedTarget);
    const patientSelected = modalButton.data("patientId");
    $.ajax({
      url: "/api/patients/" + patientSelected,
      method: "GET"
    }).then(response => {
      console.log(response);
    });
  });
});
