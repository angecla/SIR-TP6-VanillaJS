
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.X_initial = 0;
  this.Y_initial = 0


  this.X_final = 0;
  this.Y_final = 0;
	// Developper les 3 fonctions gérant les événements

  this.mousedown = function (evt) {
    if( evt !== undefined){
      this.X_initial = evt.x ;
      this.Y_initial = evt.y ;
      console.log("getMousePosition",getMousePosition(canvas, evt));
    }
  }
  this.mousemove = function (evt) {
    if( evt !== undefined){
      this.X_inter = evt.x ;
      this.Y_inter = evt.y ;
      console.log("getMousePosition", getMousePosition(canvas, evt));
    }
  }
  this.mouseup = function (evt) {
    if( evt !== undefined){ 
      this.X_final = evt.x ;
      this.Y_final = evt.y ;
      console.log("evt", evt); 
      console.log("getMousePosition", getMousePosition(canvas, evt) );
    }
  }

	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



