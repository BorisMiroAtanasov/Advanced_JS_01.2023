function printDeckOfCards(cards) {
  let result = [];

  for (const eachCard of cards) {
    const face = eachCard.slice(0, -1);
    const suit = eachCard.slice(-1);
    let newCard = "";

    try {
      newCard = createCard(face, suit);
      result.push(newCard);
    } catch (err) {
        result = [`Invalid card: ${eachCard}`]
    }
  }
  console.log(result.join(' '));

  function createCard(face, suit) {
    let faces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    let suits = {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    };

    if (faces.includes(face) == false) {
      throw new TypeError("Invalid face");
    }
    if (suit in suits == false) {
      throw new TypeError("Invalid suit");
    }

    const result = {
      face,
      suit,
      toString() {
        return this.face + suits[this.suit];
      },
    };
    return result;
  }
}

printDeckOfCards(["AS", "10D", "KH", "2C"]);
printDeckOfCards(["5S", "3D", "QD", "1C"]);
