function Car(name, model, type){

this.name = name;
this.model =model;
this.type = type;

}


Car.prototype.getName = function(){
	return this.name;
}



