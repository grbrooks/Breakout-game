var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}
var player = new paddle(5, 200, 25, 100);
var ai = new paddle(610, 200, 25, 100);

function tick() {
    draw()
    window.setTimeout("tick()", 1000 / 60);
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 640, 480);
    renderPaddle(player);
    renderPaddle(ai);
}

function renderPaddle(paddle) {
    ctx.fillStyle = "white";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}
tick();