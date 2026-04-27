export class Snake {
    constructor(game) {
        this.game = game; 
        this.body = [{ x: 10, y: 10 }]; 
        this.direction = { x: 1, y: 0 }; 
    }

    setdirection(x, y) {
        this.direction = { x, y };
    }

    update() {
        const head = { 
            x: this.body[0].x + this.direction.x, 
            y: this.body[0].y + this.direction.y 
        };

        this.body.unshift(head);
        this.body.pop();
    }

    grow() {
        this.body.push({ ...this.body[this.body.length - 1] });
    }

    eat(food) {
        const head = this.body[0];
        return head.x === food.pos.x && head.y === food.pos.y;
    }

    checkCollision() {
        const head = this.body[0];

        if (
            head.x < 0 || 
            head.x >= this.game.tileCount ||
            head.y < 0 || 
            head.y >= this.game.tileCount
        ) {
            return true;
        }

        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }

        return false;
    }

    draw(ctx) {
        ctx.fillStyle = "lime";

        this.body.forEach(p => {
            ctx.fillRect(
                p.x * this.game.grid,
                p.y * this.game.grid,
                this.game.grid,
                this.game.grid
            );
        });
    }
}










