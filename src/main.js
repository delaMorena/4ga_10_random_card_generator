require('./style.css');

window.onload = function() { 
    
/* You should generate a random number between 1 and 4 to pick a 
suit and another random number 
between 0 and 12 to pick a card number.
var getRandomNumber = Math.floor((Math.random() * 4) + 1);
    var getRandomSuit = Math.floor(Math.random() * 12);
 */ 
document.querySelector(".card").classList.add(generateRandomSuit());
document.getElementById("myNumber").innerHTML = generateRandomNumber();
 
    function generateRandomNumber() {
        let numeros = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
        let randomIndexNumber = Math.floor(Math.random() * 12) ;
        return numeros[randomIndexNumber];
    }
    generateRandomNumber()
    function generateRandomSuit() {
        let palo = ["corazon","pica","trebol","rombo"]
        let randomIndexSuit = Math.floor(Math.random() * 4);
        return palo[randomIndexSuit];
    }
    generateRandomSuit()

}