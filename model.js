
// Implémenter ici les 4 classes du modèle.

function Drawing(forms){
    this.formList = forms;
    
}

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

function Line(x,y,color,stroke){
    Form.call(this, color, stroke);
    this.x = x;
    this.y = y;
}

// N'oubliez pas l'héritage !

Rectangle.prototype= new Form();
Line.prototype = new Form();