const ano = document.querySelector("[data-nascimento]");
const sexo = document.querySelectorAll("[data-sexo]");
const resultado = document.querySelector("[data-resultado");
const texto = document.querySelector("[data-texto");
const botao = document.querySelector("[data-botao]");
const novoElemento = document.createElement("img");

function verificarIdade() {
  const data = new Date();
  const anoAtual = data.getFullYear();
  const idade = anoAtual - ano.value;
  let sexoEscolhido = "Mulher";
  let siglaSexo = "F";

  if (sexo[0].checked) {
    sexoEscolhido = "Homem";
    siglaSexo = "M";
  }

  if (ano.value > anoAtual || ano.value === "") {
    window.alert("ERRO || Digite um ano de nascimento válido");
  } else {
    if (idade >= 0 && idade <= 4) {
      criarElemento("bb", idade, sexoEscolhido, siglaSexo);
    } else if (idade >= 5 && idade <= 10) {
      criarElemento("crianca", idade, sexoEscolhido, siglaSexo);
    } else if (idade >= 11 && idade <= 14) {
      criarElemento("pre-adolescente", idade, sexoEscolhido, siglaSexo);
    } else if (idade >= 15 && idade <= 19) {
      criarElemento("adolescente", idade, sexoEscolhido, siglaSexo);
    } else if (idade >= 20 && idade <= 40) {
      criarElemento("adulto", idade, sexoEscolhido, siglaSexo);
    } else if (idade >= 41 && idade <= 60) {
      criarElemento("adulto2", idade, sexoEscolhido, siglaSexo);
    } else if (idade > 61) {
      criarElemento("idoso", idade, sexoEscolhido, siglaSexo);
    }
  }
}

function criarElemento(faixaEtaria, idade, sexo, sigla) {
  novoElemento.setAttribute("src", `img/${faixaEtaria}-${sigla}.jpg`);
  texto.innerText = `${sexo} com ${idade} anos`;
  resultado.appendChild(novoElemento);
}

botao.addEventListener("click", verificarIdade);
