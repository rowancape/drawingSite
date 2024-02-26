export class Shape {
    _x;
    _y;
    _lineWidth;
    _color

    constructor(x,y){
        this._x = x;
        this._y = y;
    }

    set setLineWidth(lineWidth){
        this._lineWidth = lineWidth;
    }

    set setColor(color){
        this._color = color
    }
}