const botaomostrapalavra = document .querySelector("#botao-palavrachave");
botaomostrapalavra.addEventListener("clik", mostrapalavraschaves);
function mostrapalavraschaves(){
const Texto=document.querySelector("#entrada-de-texto").Value;
const camporesultado=document.querySelector("resultado-palavrachave");
const palavras= Texto.split(" ")

camporesultado. textContent = palavras.join (",");
}
 
