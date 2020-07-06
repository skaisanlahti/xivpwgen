/*=== App overview ===
Generate 4 number passwords with no repeats or straights
=============================================================================*/
const pwGen = (() => {

    const password = document.querySelector(".pw-main__password");
    const generate = document.querySelector(".pw-main__generate");

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function getNonDuplicate(str){
        let test = null;
        do {
            test = getRandomInteger(0, 9).toString();
        }while (str.includes(test))
        return test;
    }

    function includesStraight(str){
        if (str === "1234" ||
            str === "2345" ||
            str === "3456" ||
            str === "4567" ||
            str === "5678" ||
            str === "6789" ||
            str === "9876" ||
            str === "8765" ||
            str === "7654" ||
            str === "6543" ||
            str === "5432" ||
            str === "4321"){
            return true;
        }else{
            return false;
        }
    }

    function generatePassword () {
        let pw = "";
        do {
            for (let i = 0; i < 4; i++){
                pw += getNonDuplicate(pw);
            }
        }while (includesStraight(pw))
        password.innerText = pw;
        return pw;
    }

    generate.addEventListener("click", generatePassword);
    window.addEventListener("load", generatePassword);

})();
