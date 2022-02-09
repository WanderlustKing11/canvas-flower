const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let number = 0;
let scale = 10;

function drawFlower() {
    let angle = number * 1; // changing this will create different flower patterns
    let radius = scale * Math.sqrt(number); // This makes the radius slowly increase, to draw layers of pettles in our flower
    let positionX = radius * Math.sin(angle) + canvas.width / 2; // Math.sin returns a number between -1 and 1. Helps create half the circular movement
    let positionY = radius * Math.cos(angle) + canvas.height / 2; // Cosin returns the opposite value of sin
    let hue = (Math.random() * 200) + 2;

    // Here are the building blocks of making a circle and a rectangle on canvas
// We don't need a function to create them, but once we want them to move
// we have to put them into our animate function. Animate function started
// looking messy, so we created a new drawing function which we can then
// call on within the animate function loop.

    ctx.fillStyle = 'blue'; // makes the circle a color
    ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)'; // border color
    ctx.lineWidth = 5; // the width of the border line around our circle
    ctx.beginPath(); // telling canvas that we are putting the pen on the paper to draw
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2); // creating a circle, with position, size, and start and end point of the circular lines drawn
    ctx.closePath();
    ctx.fill(); // fills the inside of the object (circle)
    ctx.stroke(); // creates a border around our circle

// ctx.fillRect(100, 50, 100, 150); // Making a rectangle

    number ++;
}

function animate() {
   // draw each frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height); // This clears a
    // specified area of canvas of any old paint. Right now it is set for
    // the entire width and height of the canvas. It is called at the top
    // of the animate function so that when we move our objects below, 
    // the code will loop around again at the beginning, revieling the 
    // object in its new position in the next frame.

    // size += 0.2;

    drawFlower(); // This function now holds all our "drawings".

    requestAnimationFrame(animate); // calls whatever funciton we pass to it as an argument...
    // Here we call animate, which will call itself over and over 
    // creating an animation loop. This programming principle is called recursion.
    // requestAnimationFrame() is better than setInterval() because it
    // will adjust to your screen refresh rate.
}

animate(); // You need this to run your code. Without it our circle does
// not show up. By calling animate, we have created our loop since animate
// runs its function over and over again.