class Circle{
    constructor(radius){
        this.radius = radius;


    }

    get radius(){
        return this._radius;
            
    }

    set radius(value){
        if( typeof this.radius != 'number'){
            throw TypeError('Radius must be a Number')
        }

        return this._radius = value;

    }
    get diametar(){
       return 2 * this.radius;

    }

    set diametar(value){
        if( typeof this.diametar != 'number'){
            throw TypeError('Diametar must be a Number')
        }
        this.radius = value / 2;

    }
}



// const myCircle = new Circle(5)
// console.log(myCircle.radius);
// console.log(myCircle.diametar);


// myCircle.radius = 8

// console.log(myCircle.radius);
// console.log(myCircle.diametar);

// myCircle.radius = 20

// console.log(myCircle.radius);
// console.log(myCircle.diametar);

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);

