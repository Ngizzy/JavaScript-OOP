function Car(name, model, type){
this.name = name;
this.model =model;
this.type = type;
this.wheels = 4

this.getVehicleInfo = function(){
	return "Your Vehicle name is" + " " + this.name + " " + "it has" + " " + this.wheels + " wheels"
}

function drive(speed){
	 return this.speed
	
}
}

var toyota = new Car("Toyota")
console.log(toyota.getVehicleInfo())
console.log(toyota.drive(250))





