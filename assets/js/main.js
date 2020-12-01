function randomNumber(min, max) {
  number = Math.floor(Math.random()*(max-min +1)+min);
  return number;
}

var numeriPc = [];

for (var i=0; i < 5; i++) {
    numeriPc.push(randomNumber(1, 100));
}

alert("Memorizza questi numeri: " + numeriPc);

setTimeout(userRememberedNumbers, 30000);

function userRememberedNumbers() {
     userNumbers = [];
    for (var i=0; i < 5; i++){
        numeroDigitato = Number(prompt("Inserisci uno dei numeri che hai visto poco fa"));
        if (numeriPc.includes(numeroDigitato)) {
            userNumbers.push(numeroDigitato);
        }      
    }   
    if (userNumbers.length < 1) {
        console.log("Non hai ricordato nessun numero");
    } else {           
        console.log("Hai ricordato: " + userNumbers.length + " numeri");
        console.log("I numeri che hai ricordato sono: " + userNumbers);
    }  
}


 



