function insertToDisplay (data) {
    document.querySelector("#display").value += data;
}

function cleanAll () {
    document.querySelector("#display").value = "";
}

function backspace() {
    const display = document.querySelector("#display");
    display.value = display.value.slice(0, -1);
}

function resultFinal() {
    const display = document.querySelector("#display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error in System";
    }
}

// -----------------------------------------------------------------------

var typed = new Typed ("#typedText", {
    strings: ["&copy; Kaick Nasc"],
    typeSpeed: 75,
    loop: false,
    showCursor: false,
    fadeOut: true,
});