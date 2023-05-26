function createCard(face, suit){
    let faces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ]
    let suits = {
        'S':'\u2660',
        'H':'\u2665',
        'D':'\u2666',
        'C':'\u2663',
    }

    if(faces.includes(face) == false){
        throw new TypeError('Invalid face');

    } if(suit in suits == false){
        throw new TypeError('Invalid suit');
    }

    const result ={
        face,
        suit,
        toString(){
            return this.face + suits[this.suit]
        }
    };
    return result

}
const cards = [
    createCard('A', 'S'),
    createCard('10', 'H')
]
console.log(cards.join('\n'));
