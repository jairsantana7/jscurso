let paciente = document.querySelectorAll(".paciente");
let tabela = document.querySelector("table");

function deletarPaciente(pessoa) {
  let paciente = pessoa;
  paciente.console.log(paciente);
}

tabela.addEventListener("dblclick", function (e) {
  let eventoClick = e.target;
  let eventoPai = eventoClick.parentNode;
  eventoPai.remove();
});
console.log(tabela);

// paciente.forEach(paciente => {
//   paciente.addEventListener("dblclick", function (event) {
//     console.log("click");
//     console.log(paciente);
//     this.remove();
//   });
// });

//console.log(paciente);
//console.log(getFormulario(form));
console.log(deletarPaciente(paciente));
//console.log(document.querySelectorAll(".paciente"));

//document.querySelectorAll(".paciente")
