const inputFiltro = document.querySelector("#filtrar-tabela");
inputFiltro.addEventListener("input", function () {
  inputFiltro.value;
  console.log(this.value);

  let pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
      let expressao = new RegExp(this.value, "i");
      if (!expressao.test(nome)) {
        paciente.classList.add("none");
      } else {
        paciente.classList.remove("none");
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      const paciente = pacientes[i];
      paciente.classList.remove("none");
    }
  }

  console.log(pacientes);
});

let dataSearch = [];
dataSearch = tabela.children;

console.log(dataSearch);

for (let i = 0; i < dataSearch.length; i++) {
  let busca = dataSearch[i];
  let restBusca = busca.querySelector(".info-nome").textContent;

  setInterval(() => {
    if (restBusca == inputFiltro.value) {
      //add = restBusca.querySelector(".paciente");
      //.log(add);
      console.log("ok");
    }
  }, 1000);

  console.log(add);
}

//console.log(busca.textContent);

//console.log(dataSearch);
