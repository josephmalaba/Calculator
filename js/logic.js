function clearDisplay() {
    // Select the calculator's display
    var display = document.getElementById("display");

    // Clear the global variables and the display
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;        
    display.value = displayNum;

}

function numInput(num) {
    // Select the calculator's display
    var display = document.getElementById("display");

    // Check if the display is empty and the number being pressed is 0
    // This is to make sure the first number isn't 0 because then javascript thinks we are using OCTAL (Base eight)
    if ((display.value == "") && num == "0") {
    // If it is, do nothing
      return;
    }
    // Check if a calculation has finished
    // If it has replace the number in the display (the answer to the calculation with the number
    // that was just pressed and change calculation finished back to false 
    else if (calculationFinished == true) {
        display.value = num;
        calculationFinished = false;
    }
    // if neither of these is the case input the numbers as usual
    else {
      display.value += num;
    }
}