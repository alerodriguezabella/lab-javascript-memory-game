const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards()
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  let card1 = null
  let card2 = null

  function flipCard(card) {
    let back = card.querySelector('.back')
    let front = card.querySelector('.front')
    back.setAttribute('class', 'front')
    front.setAttribute('class', 'back')
    // Vale para un <div>
    // front.classList.toggle('back', true)
    // front.classList.toggle('front', false)
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      flipCard(card)

      if(!card1){
        card1 = card
      } else if(!card2){
        card2 = card
      }
      if(card1 && card2){
        if(memoryGame.checkIfPair(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'))){
          card1.setAttribute('class', 'card blocked')
          card2.setAttribute('class', 'card blocked')
          card1 = null
          card2 = null
        } else {
          setTimeout(() => {
            flipCard(card1)
            flipCard(card2)
            card1 = null
            card2 = null
          }, 600)
        }
        document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked
        document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed
      }

      if(memoryGame.checkIfFinished()){
        setTimeout(() => {
          alert('YOU WON!')
        }, 650)
      }
    });
  });
});
