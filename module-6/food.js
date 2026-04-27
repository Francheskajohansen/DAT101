export class Food {
    constructor(game) {
        this.game = game;
        this.grid = game.grid;
        this.tileCount = game.tileCount;

        this.respawn();
        this.spawnTime = Date.now(); // brukes til poengsystem
    }

    spawn() {
        This.pos = {
            x: Math.floor(Math.random() * this.tileCount),
            y: Math.floor(Math.random() * this.tileCount)
        };

        this.spawnTime = Date.now();
    }

    draw(ctx) {
        ctx.fillStyle = "red";

        ctx.fillRect(
            this.pos.x * this.grid,
            this.pos.y * this.grid,
            this.grid,
            this.grid
        );
    }
}





    
