let tbpacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < tbpacientes.length; i++) {
  let paciente = tbpacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;
  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  if (!validaPeso(peso)) {
    let ivalidImc = paciente.querySelector(".info-imc");
    ivalidImc.textContent = "Peso Inválido";
    paciente.style.backgroundColor = "red";
    paciente.classList.add("ivalid");
    //pesoValido = false;
  }
  if (!validaAltura(altura)) {
    let ivalidImc = paciente.querySelector(".info-imc");
    ivalidImc.textContent = "Altura Inválido";
    paciente.style.backgroundColor = "orange";
    paciente.classList.add("ivalid");
    //alturaValido = false;
  }

  if (validaPeso(peso) && validaAltura(altura)) {
    let imc = calImc(peso, altura);
    let imcPaciente = paciente.querySelector(".info-imc");
    imcPaciente.innerHTML = imc;
  }
}

function calImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

console.log();
