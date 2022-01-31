class Rectangle{
    constructor(l, b){
        this.l = l;
        this.b = b;
    }
    getArea = () => {
        return this.b * this.l;
    }
    
}

class Square extends Rectangle{
    constructor(side1){
        super();
        this.l = side1;
        this.b = side1;

    }
    getPerimeter = () =>{
        return 4 * this.l;
    }
  
    
    
    
}
let square = new Square(8);
console.log(`I am the area: ${square.getArea()}`);
console.log(`I am perimeter:  ${square.getPerimeter()}`);
