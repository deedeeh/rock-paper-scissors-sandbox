const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
    const playerOneImg = document.getElementById('player-one-move__img');
    const playerTwoImg = document.getElementById('player-two-move__img');
    const playerOneMoveName = document.getElementById('player-one-move__name');
    const playerTwoMoveName = document.getElementById('player-two-move__name');
    const result = document.createElement('h3');

    playerOneImg.src = `images/${moveOne}.png`
    playerTwoImg.src = `images/${moveTwo}.png`
    
    playerOneMoveName.textContent = moveOne;
    playerTwoMoveName.textContent = moveTwo;
    result.id = 'outcome'
    result.textContent = outcome;
    document.body.append(result);
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  