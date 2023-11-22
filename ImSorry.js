let mainLetter = document.querySelector("div.mainLetter");
let allLetters = document.querySelectorAll("div.letterContainer");
let readmoreBtn = document.querySelector("button.readMore");
let body = document.querySelector("body");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

readmoreBtn.onclick = function () {
    for (let i = 0; i <= allLetters.length - 1; i++) {
        allLetters[i].style.display = "block";
    }
    mainLetter.classList.add("mainLetterAnim");
    body.classList.add("visibleY");
}
