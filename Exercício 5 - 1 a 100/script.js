const numero = document.querySelector("[data-numero]");
const verificar = document.querySelector("[data-adicionar]");
const lista = document.querySelector("[data-lista]");
const finalizar = document.querySelector("[data-finalizar]");
const resultado = document.querySelector("[data-resultado]");
const apagar = document.querySelector("[data-apagar]");
const arrayNumeros = [];
let itemSelecionado;

// ADICIONAR NÚMERO
function adicionarNumero() {
  if (
    numero.value === "" ||
    numero.value > 100 ||
    numero.value < 1 ||
    arrayNumeros.indexOf(+numero.value) > -1
  ) {
    //validando se o valor ta vazio ou se é maior que 100 ou menor que 1 e também se  já existe o número adicionado, dentro do array
    window.alert("Digite um número válido");
  } else {
    //CRIANDO A OPTION COM O VALUE IGUAL O NUMERO DIGITADO
    const option = document.createElement("option");
    option.setAttribute("value", numero.value);
    option.innerHTML = `Valor ${numero.value} adicionado`;
    lista.appendChild(option); // ADICIONANDO ELE NA LISTA
    arrayNumeros.push(+numero.value); // ADICIONANDO ELE NO ARRAY
    numero.value = ""; // ZERANDO O INPUT ENVIADO
  }
}

//FINALIZAR LISTA
function finalizarNumeros() {
  //CONDIÇÃO QUE VERIFICAR SE ALGUM VALOR FOI ADICIONADO NA LISTA
  if (arrayNumeros.length <= 0) {
    window.alert("Adicione algum número");
  } else {
    //ENCONTRANDO AS CONDIÇÕES
    const maior = Math.max(...arrayNumeros);
    const menor = Math.min(...arrayNumeros);
    let media = 0;
    let soma = 0;

    //RODANDO NO ARRAY E SOMANDO E ACHANDO A MÉDIA
    arrayNumeros.forEach((numero) => {
      soma += numero;
      media = (soma / arrayNumeros.length).toFixed(2);
    });

    //CRIANDO O RESULTADO FINAL COM TUDO QUE ENCONTRAMOS
    const resultadoTexto = document.createElement("p");
    resultadoTexto.innerHTML = `Ao todo temos ${arrayNumeros.length} números registrados.<br><br> O maior valor informado foi o ${maior}.<br><br> O menor valor informado foi o ${menor}.<br><br> Somando todos os valores, temos ${soma}.<br><br> A média dos valores informados é ${media}`;
    resultado.appendChild(resultadoTexto);
  }
}

function selecionarItem(event) {
  itemSelecionado = event.target; //recebe a tag clicada
}

function apagarItem() {
  const valor = +itemSelecionado.getAttribute("value"); // recebe o valor que tiver no value do option selecionado.
  arrayNumeros.forEach((item) => {
    if (item === valor) {
      const index = arrayNumeros.indexOf(item); //coletar em qual index o item selecionado está
      arrayNumeros.splice(index, 1); // splice recebe dois parametros, qual index ele vai apagar e quantos item a partir dali ele vai apagar
      itemSelecionado.remove();
    }
  });
}

verificar.addEventListener("click", adicionarNumero);
finalizar.addEventListener("click", finalizarNumeros);
lista.addEventListener("click", selecionarItem);
apagar.addEventListener("click", apagarItem);
