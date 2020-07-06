/*=== App overview ===
Generate 4 number passwords
=============================================================================*/
const password = document.querySelector(".pw-main__password");
const generate = document.querySelector(".pw-main__generate");

generate.addEventListener("click", generatePassword);
window.addEventListener("load", generatePassword);

function generatePassword () {
    let pw = "";
    for (let i = 0; i < 4; i++){
        pw += getRandomInteger(0, 9);
    }
    password.innerText = pw;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}