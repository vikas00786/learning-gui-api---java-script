var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#output")
//var url1 = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
 var url1 = "https://api.funtranslations.com/translate/minion.json"

function getUrl(text){
    return url1 +"?" + "text=" + text
}
function erroHandler (error) {
    console.log(error)
    alert("something wrong with server so try after some time")
}
function clicker(){ 
    var inputText = txtInput.value
        fetch(getUrl(inputText))
        .then (response => response.json())
        .then (response => {
            var translateText = response.contents.translated;
            txtOutput.innerText = translateText
            
        })
        .catch(erroHandler) 
        
}

addEventListener("click", clicker )