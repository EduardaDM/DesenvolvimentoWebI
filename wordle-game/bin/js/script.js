const palavraSecreta = "piano";
const tentativasMax = 6;
let tentativaAtual = "";
let linhaAtual = 0;

const grid = document.getElementById("grid");
const teclado = document.getElementById("teclado");
const mensagem = document.getElementById("mensagem");

// Cria a grade (6x5)
for (let i = 0; i < tentativasMax * 5; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  grid.appendChild(box);
}

// Letras do teclado virtual
const letras = "QWERTYUIOPASDFGHJKLZXCVBNM";

// Cria as teclas
letras.split("").forEach(letra => {
  const btn = document.createElement("button");
  btn.textContent = letra;
  btn.classList.add("tecla");
  btn.onclick = () => adicionarLetra(letra);
  teclado.appendChild(btn);
});

// ENTER
const enterBtn = document.createElement("button");
enterBtn.textContent = "ENTER";
enterBtn.classList.add("tecla");
enterBtn.style.gridColumn = "span 2";
enterBtn.onclick = verificarTentativa;
teclado.appendChild(enterBtn);

// Apagar
const delBtn = document.createElement("button");
delBtn.textContent = "⌫";
delBtn.classList.add("tecla");
delBtn.onclick = apagarLetra;
teclado.appendChild(delBtn);

function adicionarLetra(letra) {
  if (tentativaAtual.length < 5) {
    tentativaAtual += letra;
    atualizarGrid();
  }
}

function apagarLetra() {
  tentativaAtual = tentativaAtual.slice(0, -1);
  atualizarGrid();
}

function atualizarGrid() {
  const inicio = linhaAtual * 5;
  for (let i = 0; i < 5; i++) {
    const box = grid.children[inicio + i];
    box.textContent = tentativaAtual[i] || "";
  }
}

function verificarTentativa() {
  if (tentativaAtual.length !== 5) {
    alert("Digite uma palavra com 5 letras.");
    return;
  }

  const inicio = linhaAtual * 5;

  for (let i = 0; i < 5; i++) {
    const box = grid.children[inicio + i];
    
    // Normaliza para minúsculas
    const letra = tentativaAtual[i].toLowerCase();
    const letraCorreta = palavraSecreta[i].toLowerCase();

    if (letra === letraCorreta) {
      box.classList.add("correta");
    } else if (palavraSecreta.includes(letra)) {
      box.classList.add("parcial");
    } else {
      box.classList.add("errada");
    }
  }

  if (tentativaAtual.toLowerCase() === palavraSecreta) {
    mensagem.textContent = "Parabéns! Você acertou!";
    desativarTeclado();
    return;
  }

  linhaAtual++;
  tentativaAtual = "";

  if (linhaAtual === tentativasMax) {
    mensagem.textContent = "Fim de jogo! A palavra era: " + palavraSecreta.toUpperCase();
    desativarTeclado();
  }
}

function desativarTeclado() {
  document.querySelectorAll(".tecla").forEach(btn => {
    btn.disabled = true;
  });
}

function reiniciarJogo() {
  location.reload();
}
