import { Shape } from "./shape.js"

export class Square extends Shape {
    #sideLength;

    constructor(x, y, sideLength) {
        super(x, y);
        this.#sideLength = sideLength;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this._x, this._y, this.#sideLength, this.#sideLength);
        ctx.lineWidth = this._lineWidth;
        ctx.strokeStyle = this._color
        ctx.stroke();
    }
}