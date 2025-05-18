var vez = document.getElementById("vez")
var l1 = document.getElementById("btn_1"); var l2 = document.getElementById("btn_2")
var l3 = document.getElementById("btn_3"); var l4 = document.getElementById("btn_4")
var l5 = document.getElementById("btn_5"); var l6 = document.getElementById("btn_6") 
var l7 = document.getElementById("btn_7"); var l8 = document.getElementById("btn_8") 
var l9 = document.getElementById("btn_9"); 
var div_l1 = document.getElementById("l1"); var div_l2 = document.getElementById("l2")
var div_l3 = document.getElementById("l3"); var div_l4 = document.getElementById("l4")
var div_l5 = document.getElementById("l5"); var div_l6 = document.getElementById("l6")
var div_l7 = document.getElementById("l7"); var div_l8 = document.getElementById("l8")
var div_l9 = document.getElementById("l9")



function add1(){
if(vez.innerText == "Vez do X"){
l1.addEventListener("click", function () {
  l1.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l1.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l1.addEventListener("click", function () {
  l1.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l1.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}}

function add2(){
    if(vez.innerText == "Vez do X"){
l2.addEventListener("click", function () {
  l2.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l2.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l2.addEventListener("click", function () {
  l2.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l2.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}}


function add3(){
if(vez.innerText == "Vez do X"){
l3.addEventListener("click", function () {
  l3.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l3.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l3.addEventListener("click", function () {
  l3.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l3.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}}
function add4(){
    if(vez.innerText == "Vez do X"){
l4.addEventListener("click", function () {
  l4.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l4.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l4.addEventListener("click", function () {
  l4.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l4.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}
}
function add5(){
    if(vez.innerText == "Vez do X"){
l5.addEventListener("click", function () {
  l5.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l5.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l5.addEventListener("click", function () {
  l5.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l5.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}
}
function add6(){
    if(vez.innerText == "Vez do X"){
l6.addEventListener("click", function () {
  l6.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l6.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l6.addEventListener("click", function () {
  l6.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l6.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}
}
function add7(){
    if(vez.innerText == "Vez do X"){
l7.addEventListener("click", function () {
  l7.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l7.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l7.addEventListener("click", function () {
  l7.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l7.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}
}
function add8(){
    if(vez.innerText == "Vez do X"){
l8.addEventListener("click", function () {
  l8.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l8.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l8.addEventListener("click", function () {
  l8.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l8.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}
}
function add9(){
    if(vez.innerText == "Vez do X"){
l9.addEventListener("click", function () {
  l9.remove();
  const imagem = document.createElement("img");
  imagem.src = "imgs/X.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l9.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = " Vez do Circulo"
});
}else{
l9.addEventListener("click", function () {
  l9.remove();
    vez.textContent = "Circulo"
  const imagem = document.createElement("img");
  imagem.src = "imgs/Circ.png";
  imagem.alt = "Imagem no lugar do botão";  
  imagem.style.display = "block";
  imagem.style.justifySelf = "center";
  imagem.style.alignSelf = "center";
  imagem.style.marginTop = "1vw"
  imagem.style.width = "10vw";
  imagem.style.height = "10vw";
  div_l9.appendChild(imagem);
  vez.textContent = ""
  vez.textContent = "Vez do X"
});
}
}

const imagens = document.querySelectorAll('img');
let todasComImagem = true;

imagens.forEach(img => {
  if (!imagens.getAttribute('src') || imagens.getAttribute('src').trim() === '') {
    todasComImagem = false;
    window.alert("tudo ja foi preenchido")
  }
});