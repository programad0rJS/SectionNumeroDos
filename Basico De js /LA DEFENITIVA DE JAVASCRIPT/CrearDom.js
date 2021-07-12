var Josue = document.getElementsByTagName('p');
var Daniel = document.getElementById('Segundo');




var elemento = document.createElement('h1');


var contenido = document.createTextNode('Hola Word');


elemento.appendChild(contenido);

document.getElementById('Josue').appendChild(elemento)

// una cosa no me funciono

var b = document.querySelector("button");


b.setAttribute("disabled", "");
// esta corregido