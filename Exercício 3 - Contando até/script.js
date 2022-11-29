const inicio = document.querySelector("[data-inicio]");
const fim = document.querySelector("[data-fim]");
const passo = document.querySelector("[data-passo]");
const botao = document.querySelector("[data-botao]");
const resultado = document.querySelector("[data-resultado");
const texto = document.querySelector("[data-texto]");
const contagem = document.createElement("p");

function contar() {
  if (inicio.value === "" || fim.value === "" || passo.value === "") {
    window.alert("Erro");
  } else {
    const inicioN = Number(inicio.value);
    const fimN = Number(fim.value);
    const passoN = Number(passo.value);

    texto.innerHTML = "Contando: ";
    let contagemTexto = "";
    if (passoN === 0) {
      window.alert("Passo inválido, considerando Passo como 1");
      passoN = 1;
    }
    if (inicioN < fimN) {
      for (let i = inicioN; i <= fimN; i += passoN) {
        contagemTexto += `${i} &#128073;`;
      }
    } else if (inicioN > fimN) {
      for (let i = inicioN; i >= fimN; i -= passoN) {
        contagemTexto += `${i} &#128073;`;
      }
    }

    contagem.innerHTML = `${contagemTexto} &#127937`;
    resultado.appendChild(contagem);
  }
}

botao.addEventListener("click", contar);
