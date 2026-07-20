const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        const calculation = display.value;
        const result = eval(calculation);

        display.value = result;

        const historyList = document.getElementById("history-list");

        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");
        historyItem.textContent = calculation + " = " + result;

        historyList.prepend(historyItem);

    } catch (error) {
        display.value = "Error";
    }
}

function clearHistory() {
    document.getElementById("history-list").innerHTML = "";
}
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ("0123456789+-*/.%".includes(key)) {
        appendValue(key);
    } 
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        deleteLast();
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const themeBtn = document.getElementById("theme-btn");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}
function copyResult() {
    if (display.value === "") {
        return;
    }

    navigator.clipboard.writeText(display.value);

    const copyBtn = document.getElementById("copy-btn");
    copyBtn.textContent = "✓ Copied!";

    setTimeout(function() {
        copyBtn.textContent = "📋 Copy Result";
    }, 1500);
}