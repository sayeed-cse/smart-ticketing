
function getElementTextValue(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;

}
function setElementTextValue(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementText(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
}

function getInputFieldValue(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.value;
    return elementValue;
}