function mobileCheck(str) {
    let bracketCheck = /[(]\d{3}[)]/;
    let checkBegining = /^([(]\d{3}[)])/;
    let otherCharsCheck = /^[-]|[^\s-\d(]/;
    let space = /[\s-]/g;
    let countryCodeCheck = /^1/;
    let simple = str.replace(space, "");
    if (otherCharsCheck.test(str)) {
        return false;
    }
    else {
        if (simple.length === 13 && countryCodeCheck.test(simple) && bracketCheck.test(simple)) {
            return true;
        }
        else if (simple.length === 12 && checkBegining.test(simple)) {
            return true;
        }
        else if (simple.length === 11 && countryCodeCheck.test(simple)) {
            return true;
        }
        else if (simple.length === 10) {
            return true;
        }
    }
    return false;
}
const input = document.getElementById('input');
const buttons = document.querySelectorAll('#num-btn');
const resultsDiv = document.getElementById('results');
const phoneBtn = document.getElementById("phone-button");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let number;
        if (e.target.tagName == "SPAN" || e.target.tagName == "P") {
            number = e.target.parentElement.attributes.number.value;
        } else {
            number = e.target.attributes.number.value;
        }
        input.value += number;
    });
});

function displayResults(input) {
    let answer = mobileCheck(input);
    if (answer) {
        resultsDiv.innerHTML = "Valid phone number! 😜";
    } else {
        resultsDiv.innerHTML = "Invalid phone number! 😒";
    }
}
input.addEventListener('keydown', (e) => {
    if (e.keycode === 13) {
        displayResults(e.target.value);
    }
});
phoneBtn.addEventListener('click', () => {
    displayResults(input.value);
});