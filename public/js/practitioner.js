$(document).ready(() => {
  //let current modal action
  $.ajax({
    url: "/api/patients",
    method: "GET"
  }).then(response => {
    render(response);
  });

  //   $("#create").on("show.bs.modal", event => {
  //       $.ajax({
  //           url:"",
  //           method:""
  //       }).then(response=>{

  //       })

  //   });

  function render(patients) {
    const patientTableEntry = $(`
        <th scope="row" class="unit">${patients.unit}</th>
        <td class="room-number">${patients.roomNumber}</td>
        <td class="first-name">${patients.firstName}</td>
        <td class="last-name">${patients.lastName}</td>
        <td class="age">${patients.age}</td>
        <td class="code-status">${patients.codeStatus}</td>
        <td class="diagnosis">${patients.diagnosis}</td>
        <td><button type="button" class="btn btn-secondary fas fa-plus-square" data-toggle="modal" data="patient-ID" data-target="#staticBackdrop">
            </button>
        </td>`);

    patients.forEach(patients).append(patientTableEntry);

    // patients.forEach(() => {
    //     render()
    // });
  }
});
