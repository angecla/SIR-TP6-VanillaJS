
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

  Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
        let width = dnd.X_final - dnd.X_initial   ;
				let height = dnd.Y_final - dnd.Y_initial   ;
				 
				//Définir les dimensions du rectangle
				if(width < 0 ){ width = -1 * width ;  }
				if(height < 0 ){ height = -1 * height ;  }

    ctx.rect(this.X_initial, this.Y_initial, this.X_final, this.Y_final );
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.x_initial, this.Y_initial);
    ctx.lineTo(this.X_final, this.Y_final);
    ctx.stroke();
  };

  Form.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.lineWidth = this.stroke;
  
    ctx.stroke();
  };
  
  
  Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formList.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };



