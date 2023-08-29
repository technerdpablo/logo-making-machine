const inquirer = require('inquirer');
const fs = require("fs")
const { Triangle, Square, Circle } = require("./lib/shapes");





inquirer.prompt([
{
    type: "list",
    name: "shape",
    message: "What shape would you like to choose?",
    choices: ["square", "circle", "triangle"],
},
{
    type: "input",
    name: "text",
    message: "Which letters would you like to choose for your logo?",
},
{
    type: "input",
    name: "textColor",
    message: "Which color would you like the text to be?"
},
{
    type: "input",
    name: "shapeColor",
    message: "Which color would you like the shape to be?",
},

])

.then((answers) => {
    let newShape
    switch(answers.shape) {
        case "square":
             newShape= new Square(answers.shapeColor, answers.textColor, answers.text)
             break
        case "circle":
             newShape= new Circle(answers.shapeColor, answers.textColor, answers.text)
             break
        case "triangle":
             newShape= new Triangle(answers.shapeColor, answers.textColor, answers.text)
             break

    }
    writeToFile("logoCreation.svg", newShape.render());
})  
  
function writeToFile(filename,answers) {
    fs.promises.writeFile(filename,answers).then((data)=> {
        console.log("file created");
    })
}


