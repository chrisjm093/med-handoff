$(document).ready(() => {
  let patientSelected;
  const patientTable = $("#patient-table");

  $.ajax({
    url: "/api/patients",
    method: "GET"
  }).then(response => {
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
    const patientSelected = modalButton.data("patientid");

    if (patientSelected) {
      $.ajax({
        url: "/api/patients/" + patientSelected,
        method: "GET"
      }).then(response => {
        $("#patientUnit").val(response.unit),
          $("#room-number").val(response.roomNumber),
          $("#patient-first-name").val(response.firstName),
          $("#patient-last-name").val(response.lastName),
          $("#age").val(response.age),
          $("#code-status").val(response.codeStatus),
          $("#diagnosis").val(response.diagnosis),
          $("#history").val(response.history),
          $("#tests").val(response.tests),
          $("#therapies").val(response.therapies),
          $("#soap").val(response.soap);
      });
    }
  });

  $("#add-save").on("click", () => {
    const patient = {
      unit: $("#patientUnit").val(),
      roomNumber: $("#room-number").val(),
      firstName: $("#patient-first-name").val(),
      lastName: $("#patient-last-name").val(),
      age: $("#age").val(),
      codeStatus: $("#code-status").val(),
      diagnosis: $("#diagnosis").val(),
      history: $("#history").val(),
      tests: $("#tests").val(),
      therapies: $("#therapies").val(),
      soap: $("#soap").val()
    };

    if (patientSelected) {
      $.ajax({
        url: "/api/patients/" + patientSelected,
        method: "PUT",
        data: patient
      }).then(() => {
        window.location.reload();
      });
    } else {
      $.ajax({
        url: "/api/patients/",
        method: "POST",
        data: patient
      }).then(() => {
        window.location.reload();
      });
    }
  });

  $("#dischargePatient").on("click", () => {
    $.ajax({
      url: "/api/patients/" + patientSelected,
      method: "DELETE"
    }).then(() => {
      window.location.reload();
    });
  });
});
