let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 7 * box,
  y: 7 * box
};
let direction = "";

function createBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box , 16 * box);
}

function createSnake() {
  for(let i=0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

document.addEventListener("keydown", update);

function update (event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

function startGame() {
  createBG();
  createSnake();

  if (snake[0].x > 15 * box) snake[0].x = 0;
  if (snake[0].x < 0 * box) snake[0].x = 15 * box;
  if (snake[0].y > 15 * box) snake[0].y = 0;
  if (snake[0].y < 0 * box) snake[0].y = 15 * box;

  console.log("x = " + snake[0].x);
  console.log("y = " + snake[0].y);

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "left") snakeX -= box;
  else if (direction == "up") snakeY -= box;
  else if (direction == "right") snakeX += box;
  else if (direction == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
  snake.pop();
}

let jogo = setInterval(startGame, 50);