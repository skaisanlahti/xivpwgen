/*=== App overview ===
Generate a number password with no repeats or straights (max 10 digits)
=============================================================================*/
const pwGen = (() => {

    const n = 4;
    const debug = false;
    const testOutput = false;

    const password = document.querySelector(".pw-main__password");
    const generate = document.querySelector(".pw-main__generate");
    function getRandomInteger(min, max) {
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
            if (debug) console.log(`Found duplicate ${test}. Generating new number.`);
            return true;
        }else {
            return false;
        }
    }

    function includesStraight(str){
        const ascending = "0123456789";
        const decending = "9876543210";
        if (ascending.search(str) > 0 || decending.search(str)> 0){
            if (debug) console.log(`Found straight ${str}. Generating new password.`);
            return true;
        }else{
            return false;
        }
    }

    function generatePassword () {
        let pw;
        do {
            pw = "";
            for (let i = 0; i < n; i++){
                pw += getNumber(pw);
            }
        }while (includesStraight(pw))
        password.innerText = pw;
        return pw;
    }

    generate.addEventListener("click", generatePassword);
    window.addEventListener("load", generatePassword);

    if (testOutput){
        let pwlog = [];
        for (let i = 0; i < 1000; i++){
            pwlog.push(generatePassword());
        }
        console.table(pwlog);
    }

})();
