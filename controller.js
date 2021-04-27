
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function (dnd) {

        switch (this.currEditingMode) {
            case editingMode.rect:
				let width = dnd.X_final - dnd.X_initial   ;
				let height = dnd.Y_final - dnd.Y_initial   ;
				 
				//Définir les dimensions du rectangle
				if(width < 0 ){ width = -1 * width ;  }
				if(height < 0 ){ height = -1 * height ;  }

                this.currentShape = new Rectangle(dnd.X_initial , dnd.Y_initial, width, height, this.currLineWidth, this.currColour);
				//this.currentShape = new Rectangle(dnd.X_initial , dnd.Y_initial, dnd.X_final, dnd.Y_final, this.currLineWidth, this.currColour);

				break;
            case editingMode.line:
                this.currentShape = new Line(dnd.X_initial, dnd.Y_initial, dnd.X_final, dnd.Y_inal, this.currLineWidth, this.currColour);
                break;
        }
    }.bind(this);

    this.onInteractionUpdate = function (dnd) {
            this.currentShape.xFinal = dnd.xFinal;
            this.currentShape.yFinal = dnd.yFinal;
            drawing.paint(ctx);
            this.currentShape.paint(ctx);

    }.bind(this);

    this.onInteractionEnd = function (dnd) {
        console.log(this.currentShape);
            this.currentShape.xFinal = dnd.xFinal;
            this.currentShape.yFinal = dnd.yFinal;
            this.currentShape.paint(ctx);
            drawing.addForm(this.currentShape);
            drawing.paint(ctx);
       

    }.bind(this);




};


