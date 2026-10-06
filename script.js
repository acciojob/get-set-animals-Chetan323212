//complete this code
class Animal {
	species;
	constructor(species){
		this.species = species;
	}

	get species(){
		return this.species
	}

	makeSound(){
		console.log(`The ${this.species} make a sound`)
	}
}

class Dog extends Animal {
	// constructor(purr){
	// 	this.purr = purr;
	// }
	bark(){
		console.log("woof")
	}
	
}

class Cat extends Animal {

	
    purr(){
		console.log("purr")
	}
}

const mycat = new Cat("Siamese")
mycat.makeSound()
mycat.purr();




// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
