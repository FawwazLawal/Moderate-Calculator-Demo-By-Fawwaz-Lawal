// What is JavaScript
//Long Answer...

// JavaScript is a programming language that is commonly used to create interactive effects within web browsers. It allows developers
//  to create dynamic and responsive web pages by manipulating the Document Object Model (DOM) and handling events. JavaScript can be 
// used for a wide range of purposes, including form validation, creating animations, making asynchronous requests to servers, and much
//  more. It is an essential part of modern web development and is supported by all major web browsers.

// pretty much html the skeleton and css the skin of the web page and java script is the the muscle of the web page and 
// it is used to create the dynamic web page and it is used to create 

// this block is the code just to add numbers together lol :D
// ((WARNING)) JAVA SCRIPT IS CASE SENSITIVE SO BE CAREFUL WITH THE SPELLING OF THE FUNCTION NAMES AND THE VARIABLE NAMES



 const equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", () => {

    equalsButton.classList.add("equals-animate");

   setTimeout(() => {
        equalsButton.classList.remove("equals-animate");
   }, 200);

});

const display = document.getElementById("display");
const expressionLine = document.getElementById("expression");
const historyList = document.getElementById("history-list");

const valueButtons = document.querySelectorAll("[data-value]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

let currentExpression = "";
let historyItems = [];

function updateDisplay() {
    if (currentExpression === "") {
        display.innerText = "0";
        expressionLine.innerText = "";
    } else {
        display.innerText = currentExpression;
        expressionLine.innerText = currentExpression;
    }
}

function appendValue(value) {
    currentExpression += value;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = "";
    updateDisplay();
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function formatResult(result) {
    if (!Number.isFinite(result)) {
        return "Error";
    }

    return Number(result).toLocaleString("en-US", {
        maximumFractionDigits: 10
    });
}

function addToHistory(expression, result) {
    historyItems.unshift(`${expression} = ${result}`);

    if (historyItems.length > 20) {
        historyItems.pop();
    }

    historyList.innerHTML = historyItems
        .map(item => `<p>${item}</p>`)
        .join("");
}

function evaluateExpression() {
    if (currentExpression.trim() === "") {
        return;
    }

    try {
        const safeExpression = currentExpression.replace(/÷/g, "/").replace(/×/g, "*");
        const rawResult = Function(`return ${safeExpression}`)();
        const formattedResult = formatResult(rawResult);

        addToHistory(currentExpression, formattedResult);

        currentExpression = String(rawResult);
        display.innerText = formattedResult;
        expressionLine.innerText = currentExpression;

        equalsButton.classList.add("equals-animate");
        setTimeout(() => {
            equalsButton.classList.remove("equals-animate");
        }, 2000);

    } catch (error) {
        display.innerText = "Error";
    }
}

valueButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendValue(button.dataset.value);
    });
});

clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteLast);
equalsButton.addEventListener("click", evaluateExpression);

updateDisplay();



function getValue() {
    return Number(display.innerText);
}

function setValue(value) {
    display.innerText = value;
}

/* π button */
document.getElementById("pi").addEventListener("click", () => {
    setValue(Math.PI);
});

/* e button */
document.getElementById("euler").addEventListener("click", () => {
    setValue(Math.E);
});

/* square */
document.getElementById("square").addEventListener("click", () => {
    const value = getValue();
    setValue(value * value);
});

/* reciprocal */
document.getElementById("reciprocal").addEventListener("click", () => {
    const value = getValue();
    setValue(1 / value);
});

/* absolute */
document.getElementById("absolute").addEventListener("click", () => {
    const value = getValue();
    setValue(Math.abs(value));
});

/* square root */
document.getElementById("sqrt").addEventListener("click", () => {
    const value = getValue();
    setValue(Math.sqrt(value));
});

/* exponential */
document.getElementById("exp").addEventListener("click", () => {
    const value = getValue();
    setValue(Math.exp(value));
});

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

const factorialButton = document.getElementById("factorial");

factorialButton.addEventListener("click", () => {

    let value = Number(display.innerText);

    display.innerText = factorial(value);

});