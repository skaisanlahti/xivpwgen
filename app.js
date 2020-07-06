/*=== App overview ===
Generate a number password with no repeats or straights (max 10 digits)
=============================================================================*/
const pwGen = (() => {

    /*=== Settings ===
    =============================================================================*/
    const digits = 4;
    const debug = false;
    const testOutput = 0;

    /*=== DOM Elements ===
    =============================================================================*/
    const password = document.querySelector(".pw-main__password");
    const generate = document.querySelector(".pw-main__generate");

    /*=== Subroutines ===
    =============================================================================*/
    function getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    function getNumber(str){
        let test = null;
        do {
            test = getRandomInteger(0, 9).toString();
        }while (includesNumber(str, test))
        return test;
    }
    function includesNumber(str, test){
        if (str.includes(test)){
            if (debug && testOutput <= 0) console.log(`Found duplicate ${test}. Generating new number.`);
            return true;
        }else {
            return false;
        }
    }
    function includesStraight(str){
        const ascending = "0123456789";
        const decending = "9876543210";
        if (ascending.search(str) > -1 || decending.search(str) > -1){
            if (debug) console.log(`Found straight ${str}. Generating new password.`);
            return true;
        }else{
            return false;
        }
    }

    /*=== Main Function ===
    =============================================================================*/
    function generatePassword() {
        let pw;
        do {
            pw = "";
            for (let i = 0; i < digits; i++){
                pw += getNumber(pw);
            }
        }while (includesStraight(pw))
        password.innerText = pw;
        return pw;
    }

    /*=== Events ===
    =============================================================================*/
    generate.addEventListener("click", generatePassword);
    window.addEventListener("load", generatePassword);

    /*=== Tester ===
    =============================================================================*/
    if (testOutput > 0){
        let pwlog = [];
        for (let i = 0; i < testOutput; i++){
                pwlog.push(generatePassword());
        }
        console.table(pwlog);
    }

})();
