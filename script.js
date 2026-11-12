let username = prompt("Enter username") || "Player";
document.getElementById('userName').textContent = username;

const cardsValues = 
[
  {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/English_pattern_6_of_clubs.svg/960px-English_pattern_6_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 6},
    {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/English_pattern_7_of_clubs.svg/960px-English_pattern_7_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 7},
      {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/English_pattern_8_of_clubs.svg/960px-English_pattern_8_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 8},
        {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/English_pattern_9_of_clubs.svg/960px-English_pattern_9_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 9},
          {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/English_pattern_10_of_clubs.svg/960px-English_pattern_10_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 10},
            {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/English_pattern_jack_of_clubs.svg/960px-English_pattern_jack_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 2},
              {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/English_pattern_queen_of_clubs.svg/960px-English_pattern_queen_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 3},
                {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/English_pattern_king_of_clubs.svg/960px-English_pattern_king_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 4},
                  {card: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/English_pattern_ace_of_clubs.svg/960px-English_pattern_ace_of_clubs.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail', value: 11}

]

let userTotal = 0;
let siTotal = 0;
let round = 0;

function generate() {
  if (round >= 3) {
    userTotal = 0;
    siTotal = 0;
    round = 0;
    document.getElementById('userCards').innerHTML = '';
    document.getElementById('siCards').innerHTML = '';
    document.getElementById('result').textContent = '';
  }

  let cardUser = cardsValues[Math.floor(Math.random() * cardsValues.length)];
  let cardSi = cardsValues[Math.floor(Math.random() * cardsValues.length)];

  userTotal += cardUser.value;
  siTotal += cardSi.value;
  round++;

  document.getElementById('userScore').textContent = `Score: ${userTotal}`;
  document.getElementById('siScore').textContent = `Score: ${siTotal}`;

  document.getElementById('userCards').innerHTML += `<img src="${cardUser.card}" width="80" alt="User Card">`;
  document.getElementById('siCards').innerHTML += `<img src="${cardSi.card}" width="80" alt="SI Card">`;

  if (round == 3) {
    let resultText = "";
    if (userTotal > 21 && siTotal > 21) {
      resultText = "Both busted! It's a tie.";
    } else if (userTotal > 21) {
      resultText = "You busted! Super Intelligence wins!";
    } else if (siTotal > 21) {
      resultText = `Super Intelligence busted! ${username} wins!`;
    } else if (userTotal > siTotal) {
      resultText = `${username} wins!`;
    } else if (siTotal > userTotal) {
      resultText = "Super Intelligence wins!";
    } else {
      resultText = "It's a tie!";
    }
    document.getElementById('result').textContent = resultText;
  }
}
