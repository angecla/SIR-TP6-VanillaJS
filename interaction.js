
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.X_initial = 0;
  this.Y_initial = 0


  this.X_final = 0;
  this.Y_final = 0;

  this.mdown = false ;
	// Developper les 3 fonctions gérant les événements

  this.mousedown = function (evt) { 
    if( evt !== undefined){
      this.mdown = true ;
      interactor.onInteractionStart(this); 
      this.X_initial = evt.x ;
      this.Y_initial = evt.y ;
      console.log("getMousePosition",getMousePosition(canvas, evt));
    }
  }
  this.mousemove = function (evt) {
    if( this.mdown ){
      interactor.onInteractionUpdate(this);
      this.X_inter = evt.x ;
      this.Y_inter = evt.y ;
      console.log("getMousePosition", getMousePosition(canvas, evt));
    }
  }
  this.mouseup = function (evt) {
    if( evt !== undefined){
      interactor.onInteractionEnd(this);  
      this.mdown = false ; 
      this.X_final = evt.x ;
      this.Y_final = evt.y ;
      console.log("getMousePosition", getMousePosition(canvas, evt) );
    }
  }

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown",this.mousedown(interactor), false);
  canvas.addEventListener("mousemove",this.mousemove(interactor), false);
  canvas.addEventListener("mouseup",this.mouseup(interactor), false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



