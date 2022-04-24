var btnTranslate = document.querySelector("#btn-translate #txt-input")
var txtinput = document.querySelector("#txt-input")
var txtoutput = document.querySelector("#output")

console.log(txtinput)
console.log(txtoutput)

function clicker (){ 
    console.log("clicked! ")
    console.log("input", txtinput.value )

}


addEventListener("click",clicker )