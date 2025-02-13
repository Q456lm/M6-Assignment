const random = Math.floor(Math.random() * 10) + 1; 
let guess = prompt("Guess a number from 1 to 10: ");
let numGuess = Number(guess);
let attempts = 0;
console.log(random)

while (guess != random){
    if (isNaN(numGuess)){
        alert("Enter a valid number");
    }
    else if (numGuess === 999){
        alert("Loop Broken")
        break
    }
    else if(numGuess > 10 || numGuess < 0){
        alert("Not in range")
    }
    else if(numGuess === random){
        break;
    }
    else{
        if (guess > random){
            alert("Too high")
        }
        else{
            alert("Too low")
        }
        attempts ++;
    }
    guess = prompt("Guess a number from 1 to 10: ")
    numGuess = Number(guess);
}

if (numGuess === 999){
    pass
} else{
    if (attempts === 1){
        alert(`You guessed right in ${attempts} attempt`)
    }
    else{
        attempts ++;
        alert(`You guessed right in ${attempts} attempts`)
    }
}

console.log(random)




