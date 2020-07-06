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
        const ascending = "0123456789";
        const decending = "9876543210";
        if (ascending.search(str) > 0 || decending.search(str)> 0){
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
