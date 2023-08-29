class Shape{
 constructor (shapeColor, textColor, text){
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;

 }
}

class Circle extends Shape{
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)

    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

class Triangle extends Shape{
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)

    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="250,60 100,400 400,400" fill="${this.shapeColor}" />
      
        <text x="250" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

class Square extends Shape{
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)

    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="300" height="300" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

module.exports= {Square, Circle, Triangle}