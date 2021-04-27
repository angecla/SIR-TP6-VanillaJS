
// Implémenter ici les 4 classes du modèle.

function Drawing(forms){
    this.formList = // forms;

    this.addForm =  function (form){ 
    this.formList. push(form) ;
    }.bind(this)

} ;

function Form(color, stroke){
    this.color = color;
    this.stroke = stroke;
}
function Rectangle(x, y, width, length, color, stroke){
    Form.call(this, color, stroke);
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
}

function Line(xBegin,yBegin,xEnd,yEnd,color,stroke){
    Form.call(this, color, stroke);
    this.X_begin = xBegin;
    this.Y_begin = yBegin;
    this.X_end = xEnd;
    this.Y_end = yEnd;
}

// N'oubliez pas l'héritage !

Rectangle.prototype= new Form();
Line.prototype = new Form();