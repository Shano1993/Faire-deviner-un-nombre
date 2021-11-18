/*
    Variable declaration
 */

let gagner = Math.floor(Math.random() * 100 +1);
let number = document.getElementById('number');
let random = document.getElementById('try');
let last = document.getElementById('guess_last');
let again = document.getElementById('again');
let used = document.getElementById('used');
let gg = document.getElementById('gg');
let chance = 9;

/*
    Function if it's winning, too small or too big
 */

function myClick() {
    if (chance > -1) {
        if (parseInt(number.value) === gagner) {
            gg.innerHTML = "C'est gagner !";
            gg.style.textAlign = "center";
            gg.style.fontSize = "2.5rem";
            used.innerHTML += number.value + " ";
        }
        else if (parseInt(number.value) < gagner) {
            gg.innerHTML = "Le nombre est trop petit !";
            gg.style.textAlign = "center";
            gg.style.fontSize = "2.5rem";
            last.innerHTML = chance--;
            used.innerHTML += number.value + " ";
        }
        else if (parseInt(number.value) > gagner) {
            gg.innerHTML = "Le nombre est trop grand !";
            gg.style.textAlign = "center";
            gg.style.fontSize = "2.5rem";
            last.innerHTML = chance--;
            used.innerHTML += number.value + " ";
        }
        else {

        }
    }
    else {
        gg.innerHTML = "Et c'est perdu !";
        gg.style.fontSize = "2rem";
    }
}

/*
    Function to start over
 */

function supp() {
    number.value = null;
    used.innerHTML = null;
    last.innerHTML = '10';
    gg.innerHTML = ' ';
}

/*
    Events
 */

random.addEventListener("click", myClick);
again.addEventListener("click", supp);










