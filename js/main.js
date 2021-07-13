let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 75;
let rightPressed = false;
let leftPressed = false;
let paddleX = (canvas.width - paddleWidth) / 2;
let dx = 2;
let dy = -2;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "right" || e.key == " ArrowRight ") {
        rightPressed = true;

    } else if (e.key == "left" || e.key == ArrowLeft) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "right" || e.key == " ArrowRight ") {
        rightPressed = true;

    } else if (e.key == "left" || e.key == ArrowLeft) {
        leftPressed = true;
    }

}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#009500";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth.paddleHeight);
    ctx.fillStyle = "#0096dd"
    ctx.fill();
    ctc.closePath();
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if (rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    } else if (leftPressed) {
        paddleX -= 7;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
    x += dx;
    y += dy;
}

setInterval(draw, 10);