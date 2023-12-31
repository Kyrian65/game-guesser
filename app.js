
let min = 1,
	max =10,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

const game = document.querySelector("#game"),	
	  minNum = document.querySelector(".min-num"),
	  maxNum = document.querySelector(".max-num"),	
	  guessBtn = document.querySelector("#guess-btn"),	
	  guessInput = document.querySelector("#guess-input"),	
	  message = document.querySelector(".message");


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

	
	// Play again event listener
	game.addEventListener("mousedown", function(e){
		if(e.target.className === "Play-again"){
			window.location.reload();
		}
	})

	// Listener for guess 
	guessBtn.addEventListener("click", function(){
		let guess = parseInt(guessInput.value);


		// Validate
		if(isNaN(guess) || guess < min || guess > max){
			setMessage(`please enter a number between ${min} and ${max}`, 'red');
		}

		// Check if won

		if(guess === winningNum){

		//Game over - Won

		gameOver(true, `${winningNum} is correct, YOU WON`);

		} else {
			// Wrong number
			guessesLeft -= 1;

			if(guessesLeft === 0){
			//Game over - lost
			
			gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
			} else {
				// Game continue - anwser wrong
				
				// Change border color 
				guessInput.style.bordercolor = 'red';

				// Clear Input

				guessInput.value = "";

			// Tell user its the wrong number

			setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
			}
		}


	});

	//Game over
	function gameOver(won, msg){
		let color;
		won === true ? color = "green" : color = "red"
		// Disable input	
			guessInput.disable = true;

		// Change border color	
			guessInput.style.bordercolor = 'color';
		// Set text color	
			message.style.color = color;
		// Set message 	
			setMessage(msg);
		// Play Again
		guessBtn.value = "Play Again";
		guessBtn.className += "Play-again"	
	}

		// Get winning number
	function getRandomNum(min, max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	function setMessage(msg, color){
		message.style.color = color;
		message.textContent = msg;
	}