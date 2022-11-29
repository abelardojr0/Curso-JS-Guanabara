const numero = document.querySelector("[data-numero]");
const botao = document.querySelector("[data-botao]");
const operadores = document.querySelector("[data-operadores");
const texto = document.querySelector("[data-texto]");
const textarea = document.querySelector("[data-tabuada]");

function gerarTabuada(operador) {
  if (numero.value === "" || numero.value === "0") {
    window.alert("ERRO || Digite um valor válido");
  } else {
    const valor = Number(numero.value);
    let tabuada = "";
    let resposta = 0;
    texto.innerHTML = "Tabuada gerada:";

    textarea.classList.add("ativo");

    const operadorSelecionado =
      operadores.options[operadores.selectedIndex].value;

    switch (operadorSelecionado) {
      case "soma":
        for (let i = 1; i <= 10; i++) {
          resposta = i + valor;
          tabuada += `
        ${valor} + ${i} = ${resposta} 
        `;
        }
        textarea.innerHTML = tabuada;
        break;
      case "subtracao":
        for (let i = 1; i <= 10; i++) {
          resposta = valor + i - valor;
          tabuada += `
        ${valor + i} - ${valor} = ${resposta} 
        `;
        }
        textarea.innerHTML = tabuada;
        break;
      case "multiplicacao":
        for (let i = 1; i <= 10; i++) {
          resposta = i * valor;
          tabuada += `
        ${valor} * ${i} = ${resposta} 
        `;
        }
        textarea.innerHTML = tabuada;
        break;
      case "divisao":
        for (let i = 1; i <= 10; i++) {
          resposta = (i * valor) / valor;
          tabuada += `
        ${i * valor} / ${valor} = ${resposta} 
        `;
        }
        textarea.innerHTML = tabuada;
        break;
      default:
        window.alert("Escolha uma operação");
    }
  }
}

botao.addEventListener("click", gerarTabuada);
