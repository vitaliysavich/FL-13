let maxInt = 5;
let prizes = [25, 50, 100];
let userPrize = 0;

function game(play) {
  let pocket = Math.floor(Math.random() * Math.floor(maxInt));
  if (play) {
    for (let attempt = 2; attempt >= 0; attempt--) {
      let userChoise = +prompt(
        `Choose a roulette pocket number from 0 to ${maxInt}\nAtempts left: ${
          attempt + 1
        }\nTotal prize: ${userPrize}$\nPossible prize on current attempt: ${
          prizes[attempt]
        }$`
      );
      if (attempt === 2 && userChoise === pocket) {
        userPrize += prizes[attempt];
        newGame(
          confirm(
            `Congratulation, you won!\nYour prize is: ${prizes[attempt]}$.\nDo you want to continue?`
          )
        );
      } else if (attempt === 1 && userChoise === pocket) {
        userPrize += prizes[attempt];
        newGame(
          confirm(
            `Congratulation, you won!\nYour prize is: ${prizes[attempt]}$.\nDo you want to continue?`
          )
        );
      } else if (attempt === 0 && userChoise === pocket) {
        userPrize += prizes[attempt];
        newGame(
          confirm(
            `Congratulation, you won!\nYour prize is: ${prizes[attempt]}$.\nDo you want to continue?`
          )
        );
      } else if (attempt === 0 && userChoise !== pocket) {
        userPrize = 0;
        maxInt = 5;
        prizes = [25, 50, 100];
        alert(`Thank you for your participation. Your prize is: ${userPrize}$`);
        game(confirm(`Do you want to play again ?`));
      }
    }
  } else {
    alert(`You did not become a billionaire, but can.`);
  }
}

function newGame(isConfirm) {
  if (isConfirm) {
    maxInt += 5;
    for (let i = 0; i < prizes.length; i++) {
      prizes[i] *= 2;
    }
    game(isConfirm);
  } else {
    alert(`Thank you for your participation. Your prize is: ${userPrize}$`);
    game(confirm(`Do you want to play again?`));
  }
}

game(confirm(`Do you want to play a game?`));
