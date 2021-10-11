let btImport = document.querySelector("#importar-paciente");

btImport.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      let resposta = xhr.responseText;
      let paciente = JSON.parse(resposta);
      //console.log(newPaciente);
      paciente.forEach(paciente => {
        paciente = montaTabela(paciente);
        adicionaPaciente(paciente);
      });
    } else {
      let msgError = xhr.responseText;
      let errorRequest = document.querySelector("#erroajax");
      errorRequest.classList.remove("none");
      errorRequest.textContent = `Ero ao buscar paciente. Erro: ${msgError}, ${xhr.status}`;
      console.log(msgError);
    }

    //adicionaPaciente(newPaciente);
  });

  xhr.send();
});
