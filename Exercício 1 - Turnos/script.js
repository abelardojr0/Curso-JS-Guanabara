function carregar() {
  const mensagem = document.querySelector(".msg");
  const imagem = document.querySelector(".foto");
  const data = new Date();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  mensagem.innerHTML = `Agora são exatamente ${hora}hrs e ${minutos} minutos`;
  if (hora >= 0 && hora <= 24) {
    if (hora >= 0 && hora <= 5) {
      imagem.src = "img/madrugada.jpg";
      document.body.style.backgroundColor = "#0a3266";
    } else if (hora >= 6 && hora < 12) {
      imagem.src = "img/manha.jpg";
      document.body.style.backgroundColor = "#a3ad6e";
    } else if (hora >= 12 && hora <= 18) {
      imagem.src = "img/tarde.jpg";
      document.body.style.backgroundColor = "#fcb950";
    } else {
      imagem.src = "img/noite.jpg";
      document.body.style.backgroundColor = "#744a5e";
    }
  } else {
    mensagem.innerHTML = `Horário não identificado`;
  }
}

carregar();
