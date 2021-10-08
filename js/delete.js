let paciente = document.querySelectorAll(".paciente");
let tabela = document.querySelector("#tabela-pacientes");

deletarPaciente(tabela);

//delet Paciente
function deletarPaciente(tabela) {
  tabela.addEventListener("dblclick", function (e) {
    //e = e.target;
    e.target.parentNode.classList.add("fade-out");
    //e.target.parentNode.classList.add("fade-out");
    let eventoClick = e.target;
    let eventoPai = eventoClick.parentNode;

    setTimeout(function () {
      eventoPai.remove();
    }, 1000);
  });
}

// paciente.forEach(paciente => {
//   paciente.addEventListener("dblclick", function (event) {
//     console.log("click");
//     console.log(paciente);
//     this.remove();
//   });
// });

//console.log(paciente);
//console.log(getFormulario(form));
//console.log(deletarPaciente(paciente));
//console.log(document.querySelectorAll(".paciente"));

//document.querySelectorAll(".paciente")
