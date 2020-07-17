$(document).ready(() => {
  let patientSelected;
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
    patientSelected = modalButton.data("patientid");
    // console.log(modalButton);
    // console.log(patientSelected);
    if (patientSelected) {
      $.ajax({
        url: "/api/patients/" + patientSelected,
        method: "GET"
      }).then(() => {
        //console.log(response);
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

    console.log(patient);

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
    console.log(patientSelected);
    $.ajax({
      url: "/api/patients/" + patientSelected,
      method: "DELETE"
    }).then(() => {
      //call render function separately
      window.location.reload();
    });
  });
});
