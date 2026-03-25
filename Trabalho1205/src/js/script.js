// TELA 1 - Soma e comparação
function somarNumeros() {
  const n1 = parseFloat(document.getElementById("numero1").value);
  const n2 = parseFloat(document.getElementById("numero2").value);
  const resultado = document.getElementById("resultadoSoma");

  if (isNaN(n1) || isNaN(n2)) {
    resultado.innerText = "Por favor, preencha os dois campos corretamente.";
    return;
  }

  resultado.innerText = `A soma dos números é: ${n1 + n2}`;
}

function compararNumeros() {
  const n1 = parseFloat(document.getElementById("numero1").value);
  const n2 = parseFloat(document.getElementById("numero2").value);
  const resultado = document.getElementById("resultadoComparacao");

  if (isNaN(n1) || isNaN(n2)) {
    resultado.innerText = "Por favor, preencha os dois campos corretamente.";
    resultado.style.backgroundColor = "transparent";
    return;
  }

  if (n1 > n2) {
    resultado.innerText = "Primeiro número é maior";
    resultado.style.backgroundColor = "red";
  } else if (n2 > n1) {
    resultado.innerText = "Segundo número é maior";
    resultado.style.backgroundColor = "green";
  } else {
    resultado.innerText = "Ambos são iguais";
    resultado.style.backgroundColor = "yellow";
  }
}

// TELA 2 - Texto interativo
function mostrarTexto() {
  const texto = document.getElementById("campoTexto").value;
  document.getElementById("saidaTexto").innerText = texto;
}

function mostrarTamanho() {
  const texto = document.getElementById("campoTexto").value;
  document.getElementById("saidaTamanho").innerText = `O tamanho atual do campo é de: ${texto.length} caracteres.`;
}

// TELA 3 - Contador e interações
let contador = 0;
function iniciarContador() {
  setInterval(() => {
    contador++;
    const display = document.getElementById("contador");
    if (display) display.innerText = contador;
  }, 1000);
}

function mostrarComida(elemento) {
  alert("Você clicou em: " + elemento.innerText);
}

function mudarCor(celula) {
  celula.style.backgroundColor = "red";
}

// Inicia o contador se a tela tiver esse elemento
window.onload = () => {
  if (document.getElementById("contador")) {
    iniciarContador();
  }
};
