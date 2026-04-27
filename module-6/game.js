import { Snake } from "./snake.js";
import { Food } from "./food.js";

export class Game {
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = 600; 
        this.canvas.height = 600; 

        this.grid = 20; 
        this.tileCount = this.canvas.width / this.grid;

        this.snake = new Snake(this);
        this.food = new Food(this); 

        this.state = "menu"; // menu, running, paused, gameover
        this.score = 0;
        this.speed = 10;
        this.lastTime = 0;

        this.setupInput();
    }

    start() {
        this.state = "running";
        requestAnimationFrame(this.loop.bind(this));
    }

    loop(time) {
        if (this.state === "running") {
            if (time - this.lastTime > 1000 / this.speed) {
                this.update();
                this.draw();
                this.lastTime = time;
            }
        }   else {
            this.drawMenu();
        }

        requestAnimationFrame(this.loop.bind(this));
    }

    update() {
        this.snake.update();

        if (this.snake.checkCollision()) {
            this.state = "gameover";
        }

        if (this.snake.eat(this.food)) {
            this.food.respawn(); 
            this.snake.grow();
            this.speed += 0.3;
            this.score += 100; 
        }
    }

    draw() {
        const ctx = this.ctx;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.food.draw(ctx);
        this.snake.draw(ctx);

        ctx.fillStyle = "white";
        ctx.fillText("Score: " + this.score, 10, 20);
    }

    drawMenu() {
        const ctx = this.ctx;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = "white";
        ctx.fillText("PRESS SPACE TO START / PAUSE", 150, 300);
    }

    setupInput() {
        window.addEventListener("keydown", (e) => {
            const s = this.snake;

            if (e.key === "ArrowUp") s.setDirection(0, -1);
            if (e.key === "ArrowDown") s.setDirection(0, 1);
            if (e.key === "ArrowLeft") s.setDirection(-1, 0);
            if (e.key === "ArrowRight") s.setDirection(1, 0);

            if (e.code === "Space") {
                if (this.state === "running") this.state = "paused";
                else this.state = "running";
            }

            if (this.state === "gameover" && e.code === "Enter") {
                location.reload();
            }
        });
    } 
} 


    


            





















 