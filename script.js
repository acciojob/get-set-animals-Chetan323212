class Animal {
	#species;

	constructor(species) {
		this.#species = species;
	}

	get species() {
		return this.#species;
	}

	makeSound() {
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	bark() {
		console.log("woof");
	}
}

class Cat extends Animal {
	purr() {
		console.log("purr");
	}
}

const mycat = new Cat("Siamese");
mycat.makeSound(); // The Siamese makes a sound
mycat.purr();      // purr

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;