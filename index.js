var coma = document.getElementById("come")
window.onload = function(){
 const botoes = document.querySelectorAll("#base button");
    botoes.forEach(botao => botao.disabled = true);
    coma.createElement("button");
    com.disabled = false
}
function com(){
    const botoes = document.querySelectorAll("button");
    botoes.forEach(botao => botao.disabled = false);
    const estaAtivo = Array.from(botoes).some(botao => botao !== coma && !botao.disabled);
    coma.remove();
    vez.textContent = "Vez do X"
}
const rese = document.getElementById("btn_res");

function res(){
  localStorage.setItem("placarX", num1.innerText);
  localStorage.setItem("placarO", num2.innerText);
  location.reload();
}
function add1(){
  var l1 = document.getElementById("btn_1");
  var div_l1 = document.getElementById("l1");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l1.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l1.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
  l1.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l1.appendChild(imagem);
  vez.textContent = "Vez do X";
}}

function add2(){
  var l2 = document.getElementById("btn_2");
  var div_l2 = document.getElementById("l2");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l2.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l2.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
  l2.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l2.appendChild(imagem);
  vez.textContent = "Vez do X";
}}

function add3(){
  var l3 = document.getElementById("btn_3");
  var div_l3 = document.getElementById("l3");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
  l3.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l3.appendChild(imagem);
  vez.textContent = "Vez do Circulo";

}else{
  l3.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l3.appendChild(imagem);
  vez.textContent = "Vez do X";
}}

function add4(){
  var l4 = document.getElementById("btn_4");
  var div_l4 = document.getElementById("l4");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l4.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l4.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
  l4.remove();
    const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l4.appendChild(imagem);
  vez.textContent = "Vez do X";
}}

function add5(){
  var l5 = document.getElementById("btn_5");
  var div_l5 = document.getElementById("l5");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l5.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l5.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
  l5.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l5.appendChild(imagem);
  vez.textContent = "Vez do X";
}}

function add6(){
  var l6 = document.getElementById("btn_6");
  var div_l6 = document.getElementById("l6");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l6.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l6.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
  l6.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l6.appendChild(imagem);
  vez.textContent = "Vez do X";
}}

function add7(){
  var l7 = document.getElementById("btn_7");
  var div_l7 = document.getElementById("l7");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l7.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l7.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
  l7.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.width = "12vw";
  imagem.style.height = "12vw";
  div_l7.appendChild(imagem);
  vez.textContent = "Vez do X";
}}

function add8(){
  var l8 = document.getElementById("btn_8");
  var div_l8 = document.getElementById("l8");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l8.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l8.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
    l8.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/Circ.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l8.appendChild(imagem);
    vez.textContent = "Vez do X";
}}

function add9(){
  var l9 = document.getElementById("btn_9"); 
  var div_l9 = document.getElementById("l9");
  var vez = document.getElementById("vez");
if(vez.innerText == "Vez do X"){
    l9.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l9.appendChild(imagem);
    vez.textContent = "Vez do Circulo";
}else{
    l9.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/Circ.png";
    imagem.alt = "Imagem no lugar do botão";  
    imagem.style.display = "block";
    imagem.style.justifySelf = "center";
    imagem.style.alignSelf = "center";
    imagem.style.width = "12vw";
    imagem.style.height = "12vw";
    div_l9.appendChild(imagem);
    vez.textContent = "Vez do X";
}}
let img = 0; 
const botoes = document.querySelectorAll('#base button');
const valores = Array(9).fill(null); 
let jogadorAtual = "X";

const combinacoesGanhadoras = [
  [0,1,2], [3,4,5], [6,7,8], 
  [0,3,6], [1,4,7], [2,5,8], 
  [0,4,8], [2,4,6]           
];

botoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {

    if(valores[index]) return;

    valores[index] = jogadorAtual;
    botao.textContent = jogadorAtual;

    img++;
    if (verificarVitoria(jogadorAtual)) {
      vez.textContent = `Jogador ${jogadorAtual} ganhou!`;
      const num1 = document.getElementById("num1");
      const num2 = document.getElementById("num2");
  if (jogadorAtual === "X") {
    rese.style.display = "block"
    num1.innerText = Number(num1.innerText) + 1;
  } else {
    rese.style.display = "block"
    num2.innerText = Number(num2.innerText) + 1;
  }
      botoes.forEach(b => b.disabled = true);
      return;
    }
    if (Number(num1.innerText) >= 3 || Number(num2.innerText) >= 3) {
        alert(`Jogador ${jogadorAtual} venceu a melhor de 5! Placar será resetado.`);
        setTimeout(function(){location.reload();}, 1000)
        localStorage.setItem("placarX", "0");
        localStorage.setItem("placarO", "0");
        
    }
    if (img === 9) {
      vez.textContent = "Empate!";
      rese.style.display = "block"
      return;
    }

    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
  
  });
});

function verificarVitoria(jogador) {
  return combinacoesGanhadoras.some(combinacao => {
    return combinacao.every(pos => valores[pos] === jogador);
  });
}
window.addEventListener("load", () => {
  num1.innerText = localStorage.getItem("placarX") || "0";
  num2.innerText = localStorage.getItem("placarO") || "0";
});