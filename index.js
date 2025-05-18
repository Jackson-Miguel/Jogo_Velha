var vez = document.getElementById("vez")
var l1 = document.getElementById("btn_1")
var l2 = document.getElementById("btn_2")
var l3 = document.getElementById("btn_3") 
var l4 = document.getElementById("btn_4")
var l5 = document.getElementById("btn_5") 
var l6 = document.getElementById("btn_6") 
var l7 = document.getElementById("btn_7") 
var l8 = document.getElementById("btn_8") 
var l9 = document.getElementById("btn_9") 
var div_l1 = document.getElementById("l1")

function add1(){
if(vez.innerText == "Vez do X"){
  l1.addEventListener("click", function add1() {
    l1.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/X.png";
    imagem.alt = "Imagem no lugar do botão";
    div_l1.appendChild(imagem);
    vez.textContent = "Vez do Cir";
  });
}else{
l1.addEventListener("click", function () {
    l1.remove();
    const imagem = document.createElement("img");
    imagem.src = "imgs/Circ.png";
    imagem.alt = "Imagem no lugar do botão";

    div_l1.appendChild(imagem);
    vez.innerText = "Vez do Cir"
  });
   vez.innerText = "Vez do X"
}
}


function add2(){
    
}
function add3(){
    
}
function add4(){
    
}
function add5(){
    
}
function add6(){
    
}
function add7(){
    
}
function add8(){
    
}
function add9(){
    
}
