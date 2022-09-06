//Selectores
let input = document.querySelector("#input-texto");
let btnEncriptador = document.querySelector("#btn-encriptar");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let mensaje = document.querySelector("#mensaje");
let btnCopiar = document.querySelector("#btn-copiar");

//captura el id y desaparece la div-aparece de la pantalla
document.getElementById("div-aparece").style.display = 'none';
inputverificar();

//caputura el id en el click y direcciona el programa para el método que encripta
document.getElementById('btn-encriptar').onclick = (e) => {
  e.preventDefault();
  let textoEncriptado = encriptar(input.value.toLowerCase());
  mensaje.value = textoEncriptado;
  input.value = "";
  aparece()
}

//caputura el id en el click y direcciona el programa para el método que desencripta
document.getElementById('btn-desencriptar').onclick = (e) => {
  e.preventDefault();
  let textoDesencriptado = desencriptar(input.value);
  mensaje.value = textoDesencriptado;
  input.value = "";
  aparece()
}

//caputura el id en el momento del click y copia el texto
document.getElementById('btn-copiar').onclick = (e) => {
  e.preventDefault();
  let mensaje = document.querySelector("#mensaje");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
}

//encripta
function encriptar(stringEncriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringEncriptada.includes(matrixCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringEncriptada
}

//desencripta
function desencriptar(stringDesencriptada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDesencriptada.includes(matrixCode[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDesencriptada
}

//algunos componentes aparezcen y desaparezcen de la pantalla
function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}


//verifica lo que el usuario digitó
function inputverificar() {
  let inputPalabra = document.querySelector("#input-texto");
  inputPalabra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}


