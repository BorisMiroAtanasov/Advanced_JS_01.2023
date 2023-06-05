class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

 distance(a) {
    let p1 = a.x - this.x;
    let  p2 = a.y - this.y;

    let dist =  Math.sqrt(p1 ** 2 + p2 ** 2);
    return dist
  }
}

let p1 = new Point(1, 3);
let p2 = new Point(5, 4);

const dist = p1.distance(p2)
console.log(dist);