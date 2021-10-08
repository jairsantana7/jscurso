const inputFiltro = document.querySelector("#filtrar-tabela");
inputFiltro.addEventListener("input", function () {
  inputFiltro.value;
  console.log(inputFiltro.value);
});

let dataSearch = [];
dataSearch = tabela.children;

for (let i = 0; i < dataSearch.length; i++) {
  let busca = dataSearch[i];
  let restBusca = busca.querySelector(".info-nome").textContent;

  setInterval(() => {
    if (restBusca == inputFiltro.value) {
      console.log("ok");
    }
  }, 1000);

  console.log(inputFiltro.value);
}

//console.log(busca.textContent);

//console.log(dataSearch);
