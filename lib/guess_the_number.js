// YOUR CODE HERE

var randomNumber = Math.floor(Math.random() * 10 + 1)

var name = prompt("Type in your name");
var number = prompt("Guess a random number between 1 and 10.");
var x = 0

var checkNumber = function(name, number) {
  while (x < 2 && parseInt(number) !== randomNumber){
    x++;
    var number = prompt("Guess again.");
  } if (parseInt(number) === randomNumber) {
      alert(name + " wins!");
  } else if ( x === 2 ) {
      alert("Sorry, you ran out of guesses!");
  };
}

checkNumber(name, number);
