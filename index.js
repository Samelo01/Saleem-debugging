document.addEventListener('DOMContentLoaded', () => {
  const guessInput = document.getElementById('guess');
  const submitButton = document.getElementById('submit');
  const resetButton = document.getElementById('reset');
  const numberOfGuesses = document.getElementById('number-of-guesses');
  const tooHighMessage = document.getElementById('too-high');
  const tooLowMessage = document.getElementById('too-low');
  const maxGuessesMessage = document.getElementById('max-guesses');
  const correctMessage = document.getElementById('correct');
  
  let targetNumber = Math.floor(Math.random() * 99) + 1; // Target number between 1-99
  let attempts = 5;
  
  console.log("Target number:", targetNumber); // For debugging purpose

  // Hide all messages
  function hideMessages() {
      tooHighMessage.style.display = 'none';
      tooLowMessage.style.display = 'none';
      maxGuessesMessage.style.display = 'none';
      correctMessage.style.display = 'none';
  }

  // Reset game
  function resetGame() {
      attempts = 5;
      targetNumber = Math.floor(Math.random() * 99) + 1; // Generate a new random number
      guessInput.value = '';
      guessInput.disabled = false;
      submitButton.disabled = false;
      numberOfGuesses.textContent = '';
      hideMessages();
      resetButton.style.display = 'none'; // Hide reset button
      console.log("Target number:", targetNumber); // For debugging purpose
  }

  // Validate guess and update game state
  function submitGuess() {
      const guess = parseInt(guessInput.value);

      if (isNaN(guess) || guess < 1 || guess > 99) { // Prevent out of bounds guesses
          numberOfGuesses.textContent = "Please enter a valid number between 1 and 99.";
          return;
      }

      attempts--;
      hideMessages(); // Hide all previous messages

      numberOfGuesses.textContent = `You have ${attempts} ${attempts === 1 ? 'guess' : 'guesses'} remaining.`;

      if (guess === targetNumber) {
          correctMessage.style.display = 'block';
          guessInput.disabled = true;
          submitButton.disabled = true;
          resetButton.style.display = 'block'; // Show reset button
      } else if (guess < targetNumber) {
          tooLowMessage.style.display = 'block';
      } else {
          tooHighMessage.style.display = 'block';
      }

      if (attempts === 0 && guess !== targetNumber) {
          guessInput.disabled = true;
          submitButton.disabled = true;
          maxGuessesMessage.style.display = 'block';
          resetButton.style.display = 'block'; // Show reset button
      }
  }

  // Event listeners
  submitButton.addEventListener('click', submitGuess);
  resetButton.addEventListener('click', resetGame);

  // Start with reset game setup
  resetGame();
});
