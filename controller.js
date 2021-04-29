var editingMode = {line: 0,rect: 1,  circle:2, ellipse:3};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = null;
    this.indexForm = 0 ;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function (dnd) {
        this.defineValues() ;
        switch (this.currEditingMode) {
            case editingMode.rect:{
                const width = dnd.xFinal - dnd.xInit   ;
				const height = dnd.yFinal - dnd.yInit   ;
				 
                this.currentShape = new Rectangle(dnd.xInit, dnd.yInit, width, height, this.currColour, this.currLineWidth);
                break;
            }
            case editingMode.line:{ 
                this.currentShape = new Line(dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal, this.currColour, this.currLineWidth);
                break;
            }
            case editingMode.circle:{ 

                const radiusX = dnd.xFinal - dnd.xInit   ;
				const radiusY = dnd.yFinal - dnd.yInit   ;
                const radius =  Math.sqrt( Math.pow(radiusX, 2)  +  Math.pow(radiusY, 2) ) ;

                this.currentShape = new Circle(dnd.xInit, dnd.yInit, radius, 0 , this.currColour, this.currLineWidth);
                break;
            }
            case editingMode.ellipse:{ 

                const radiusX = dnd.xFinal - dnd.xInit   ;
				const radiusY = dnd.yFinal - dnd.yInit   ;

                this.currentShape = new Ellipse(dnd.xInit, dnd.yInit, radiusX, radiusY , this.currColour, this.currLineWidth);
                break;
            }
        }
    }.bind(this);

    this.onInteractionUpdate = function (dnd) {
        if (this.currentShape !== null) {
            this.updateDemensions(dnd) ; 
            drawing.paint(ctx);
            this.currentShape.paint(ctx);
        }
        
    }.bind(this);

    this.onInteractionEnd = function (dnd) {
        if (this.currentShape !== null) {
            this.updateDemensions(dnd) ;
            this.currentShape.paint(ctx);
            drawing.addForm(this.currentShape);
            drawing.paint(ctx);
            this.indexForm ++ ;
            this.currentShape.id = this.indexForm ;
            updateShapeList(this.currentShape) ;
        }
    }.bind(this);


    this.defineValues = function(){
        if( document.getElementById("butLine").checked ){ this.currEditingMode = 0;  }
        else if(document.getElementById("butRect").checked ){  this.currEditingMode = 1; }
        else if(document.getElementById("butCircle").checked ){ this.currEditingMode = 2; } 
        else if(document.getElementById("butEllipse").checked ){ this.currEditingMode = 3; }

        this.currColour = document.getElementById("colour").value;
        const stroke =  document.getElementById("spinnerWidth").value; 
        this.currLineWidth = parseInt(stroke) ;  
    }.bind(this);



    this.updateDemensions = function(dnd){
        if (this.currentShape !== null) {
            switch (this.currEditingMode) {
                case editingMode.rect:{
                    let width = dnd.xFinal - dnd.xInit   ;
                    let height = dnd.yFinal - dnd.yInit   ;
                
                    this.currentShape.width = width;
                    this.currentShape.height = height;

                    break;
                }
                case editingMode.line:{
                    this.currentShape.xEnd = dnd.xFinal;
                    this.currentShape.yEnd = dnd.yFinal ;
                    break;
                }

                case editingMode.circle:{
                    const radiusX = dnd.xFinal - dnd.xInit   ;
				    const radiusY = dnd.yFinal - dnd.yInit   ;
                    this.currentShape.radius =  Math.sqrt( Math.pow(radiusX, 2)  +  Math.pow(radiusY, 2) ) ;
                    break;
                }
                case editingMode.ellipse:{
                    let radiusX = dnd.xFinal - dnd.xInit   ;
				    let radiusY = dnd.yFinal - dnd.yInit   ;
                    if(radiusX < 0) {radiusX = -1* radiusX }
                    if(radiusY < 0) {radiusY = -1* radiusY }

                    this.currentShape.radiusX =  radiusX;
                    this.currentShape.radiusY =  radiusY;
                    break;
                }
            }
        }

    };

}


