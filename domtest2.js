
function init() {
    console.log('Browser has finished rendering');
    var theH = document.getElementById('mainHeading');
    console.log(theH.innerText);
    theH.innerText = '<h3>Changed Heading</h3>';

    var allInputs = document.getElementsByTagName('input');
    console.log(allInputs);

    // read and change text form an input field
    // 1 get the (reference) allInputs
}

function readData() {
    let name = document.getElementById('name');
    let textInput = document.getElementById('textInput');
    console.log(name.value);
    console.log(textInput.value);
    name.value = '';
    textInput.value = '';
}

window.onload = init;
