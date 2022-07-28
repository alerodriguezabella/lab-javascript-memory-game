class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    if(!this.cards){
      return undefined
    }
    let array = this.cards
    let oldElement;
    for (let i = array.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = array[i];
      array[i] = array[rand];
      array[rand] = oldElement;
    }
    return array;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if(card1 === card2){
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed === ((this.cards.length) / 2)){
      return true
    } else {
      return false
    }
  }
}
