// Implémenter ici les 4 classes du modèle.

function Form(color, thickness) {
    this.id = 0 ;
    this.color = color;
    this.thickness = thickness;
}

function Rectangle(x, y, width, heigth, color, thickness) {
    Form.call(this, color, thickness);
    this.x = x;
    this.y = y;
    this.width = width;
    this.heigth = heigth;
    this.type = "Rectangle" ;
}

function Line(xBegin, yBegin, xEnd, yEnd, color, thickness) {
    Form.call(this, color, thickness);
    this.xBegin = xBegin;
    this.yBegin = yBegin;
    this.xEnd = xEnd;
    this.yEnd = yEnd;
    this.type = "Ligne" ;
}

function Circle(centerX, centerY, radius, angle,  color,thickness) {
    this.type = "Circle";
    Form.call(this, color, thickness);
    this.x = centerX;
    this.y = centerY;
    this.radius = radius;
    this.angle = angle;
}


function Ellipse(x, y, radiusX, radiusY, color, thickness) {
    this.type = "Ellipse";
    Form.call(this, color, thickness);
    this.x = x;
    this.y = y;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
}

function Drawing() {
    this.formList = [];

    this.addForm = function (formList) {
        this.formList.push(formList)
    }.bind(this);

    this.removeForm = function (form) {
        this.formList =  this.formList.filter( (value)=>{ return  value !== form } );
        this.paint(ctx);
    }.bind(this);
}


//héritage !
Rectangle.prototype = new Form();
Line.prototype = new Form();
Circle.prototype = new Form();
Ellipse.prototype = new Form();

