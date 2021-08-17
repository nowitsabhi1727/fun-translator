var inputTranslate = document.querySelector("#input-translate");
var btnTranslate = document.querySelector("#btn-translate");
var outputTranslate = document.querySelector("#output-translate");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured ", error);
    alert("something is wrong with server! Please try after some time");
}




function clickEventHandler() {
    var inputtext = inputTranslate.value;
    fetch(getTranslationURL(inputtext))
        .then(Response => Response.json())
        .then(json => {
            var outputtext = json.contents.translated;
            outputTranslate.innerText = outputtext;
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickEventHandler);