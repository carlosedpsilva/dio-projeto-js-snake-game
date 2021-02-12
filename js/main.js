let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direction = "";
let newFoodPos = () => Math.floor(Math.random() * 15 + 1) * box;

let food = {
  x: newFoodPos(),
  y: newFoodPos()
}

snake[0] = {
  x: 7 * box,
  y: 7 * box
};

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

function createFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
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
  createFood();

  for (let i=1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert('Game Over');
    }
  }

  // snake movement
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  if (direction == "left") snakeX -= box;
  else if (direction == "up") snakeY -= box;
  else if (direction == "right") snakeX += box;
  else if (direction == "down") snakeY += box;
  let newHead = {
    x: snakeX,
    y: snakeY
  };
  snake.unshift(newHead);
  if (snakeX != food.x || snakeY != food.y) snake.pop();
  else { food.x = newFoodPos(); food.y = newFoodPos(); }

  // canvas border
  if (snake[0].x > 15 * box) snake[0].x = 0;
  if (snake[0].x < 0 * box) snake[0].x = 15 * box;
  if (snake[0].y > 15 * box) snake[0].y = 0;
  if (snake[0].y < 0 * box) snake[0].y = 15 * box;
}

let jogo = setInterval(startGame, 50);