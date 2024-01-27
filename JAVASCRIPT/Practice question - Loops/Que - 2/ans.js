//Practice que :2 
let gameNum = 25;

let userName = prompt("guess the game number : ");

while(userName != gameNum){ //game
    userName = prompt("You entered the wrong number. Guess again: ");

}
console.log("congradulation,you entered the right number");