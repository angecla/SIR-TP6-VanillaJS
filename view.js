// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;  
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
     ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color; 
    ctx.beginPath();
    ctx.moveTo(this.xBegin, this.yBegin);
    ctx.lineTo(this.xEnd, this.yEnd);
    ctx.stroke();
};

Circle.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.stroke();
};

Ellipse.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
    ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, 45 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formList.forEach(function (form) {
        form.paint(ctx);
    });
}

var style = {
                bkgd:{Rectangle: "darkslategray", Ligne: "brown", Circle:"orange" , Ellipse : "blue" },
                color:{Rectangle: "white", Ligne: "white", Circle: "black", Ellipse : "white"},
            }
function updateShapeList(form){
  list = document.getElementById("shapeList") ; 
  
  let li = document.createElement("li");
  li.textContent = 'Id : '+form.id+ ', Type : '+form.type+ '' ;
  li.style.padding = "0px"
  li.style.paddingLeft = "10px" ;
  li.style.paddingRight = "1px" ;
  li.style.height = "25px"  ;
  li.style.backgroundColor = style.bkgd[form.type] ;
  li.style.border = "1px solid white" ;
  li.style.color = style.color[form.type] ;

  let btn = document.createElement("button") ; 
  btn.style.float = "right" ;
  btn.style.height = "100%" ;
  btn.className = "btn btn-default" ;

  let span = document.createElement("span") ; 
  btn.className = "glyphicon glyphicon-remove-sign" ;
  btn.style.height = "21px"
  btn.style.color = "red" ;
  
  btn.addEventListener("click", ()=> {
    drawing.removeForm(form);
    list.innerHTML = "" ;
    drawing.formList.forEach((val) => {
        this.updateShapeList(val);
    }) ;
    
  });




  btn.appendChild(span) ;
  li.appendChild(btn) ;

  list.appendChild(li)

}


