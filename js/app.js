//titulo.addEventListener("click", mostrarMsg);
//let pessoa;
let buttonAdicionaPaciente = document.querySelector("#adicionar-paciente");
let form = document.querySelector("#form-paciente");
//Botão Enviar dados

buttonAdicionaPaciente.addEventListener("click", function (event) {
  event.preventDefault();
  let pessoa = getFormulario(form);
  const pacienteTR = montaTabela(pessoa);
  let erros = validaPaciente(pessoa);

  if (erros.length > 0) {
    exibirMensagemError(erros);
    return;
  }
  adicionaPaciente(pacienteTR);
  form.reset();
});

function adicionaPaciente(paciente) {
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(paciente);
  return paciente;
}

//cria linhas

function montaTabela(pessoa) {
  let pacienteTd = document.createElement("tr");
  pacienteTd.classList.add("paciente");

  pacienteTd.appendChild(montaTD(pessoa.nome, "info-nome"));
  pacienteTd.appendChild(montaTD(pessoa.peso, "info-peso"));
  pacienteTd.appendChild(montaTD(pessoa.altura, "info-altura"));
  pacienteTd.appendChild(montaTD(pessoa.gordura, "info-gordura"));
  pacienteTd.appendChild(montaTD(pessoa.imc, "info-imc"));

  return pacienteTd;
}

//captura dados
function getFormulario(form) {
  const pessoa = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calImc(form.peso.value, form.altura.value)
  };
  return pessoa;
}

//monta <td>
function montaTD(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

//validar peso
function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}
//validar altura
function validaAltura(altura) {
  if (altura <= 2000 && altura >= 0) {
    return true;
  } else {
    return false;
  }
}

//function exibir erro

function exibirMensagemError(erros) {
  let ul = document.querySelector("#msg-erro");
  ul.textContent = "";
  erros.forEach(erro => {
    let li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

//validar paciente
function validaPaciente(pessoa) {
  const erros = [];
  if (pessoa.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (pessoa.gordura.length == 0) {
    erros.push("A % de gordura deve ser preenchina");
  }

  if (!validaPeso(peso.value) || peso.value == 0) {
    erros.push("Peso inválido");
  }
  if (!validaAltura(altura.value) || altura.value == 0) {
    erros.push("Altura inválido");
  }

  return erros;
}
