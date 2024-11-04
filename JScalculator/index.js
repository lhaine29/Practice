const display = document.getElementById("display");




function appenTodisplay(input){ // This function takes an input parameter and appends it to the current value of the display.
    display.value += input; // display.value += input;: The += operator appends the input to the existing value of display.value.
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{ //attempts to evaluate the expression
        display.value = eval(display.value); //which executes the string as JavaScript code. If there's an error
    }
    catch{ //sets the display to "Error
        display.value = "Error"; 
    }
}