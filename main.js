let answer = document.getElementById("answer");
let list = document.getElementById("selection-list");
let submitButton = document.getElementById("submit-button");
let currentChoice = null;
let currentChoiceButton = null;

let firstPane = document.getElementById("first-pane");
let secondPane = document.getElementById("second-pane");

function changeChoice(b) {
    let newChoice = b.textContent;
    currentChoice = (currentChoice === newChoice) ? null : newChoice;
    // console.log("current choice is now", currentChoice);
    
    if (currentChoiceButton !== null) {
        currentChoiceButton.children[0].classList.remove("bg-orange-500");
        currentChoiceButton.children[0].classList.add("hover:bg-slate-400");
        
    }

    if (currentChoice !== null) {
        currentChoiceButton = b;
        b.children[0].classList.add("bg-orange-500");
        b.children[0].classList.remove("hover:bg-slate-400");

    }

    else {
        b.children[0].classList.remove("bg-orange-500");
        b.children[0].classList.add("hover:bg-slate-400");
    }
}

// setup
for (let i = 0; i < list.childElementCount; i++) {
    list.children[i].addEventListener('click', () => changeChoice(list.children[i]));
}

submitButton.addEventListener('click', function() {
    if (currentChoice === null) return;

    answer.textContent = currentChoice;
    firstPane.classList.add("hidden");
    secondPane.classList.remove("hidden");
});