class DogOwner {
	constructor (newId, newFirstName, newLastName, newBirthDate, theKennel) {
		this.id = newId;
		this.firstName = newFirstName;
		this.lastName = newLastName;
		this.birthDate = newBirthDate;
		this.myKennel = theKennel;
		this.allMyDogs = [];
	}

	// Q4
	addDog (newName, newFavoriteFood, newBreed, newGender) {
		var newDog = new Dog(this, newName, newFavoriteFood, newBreed, newGender);
		this.allMyDogs.push(newDog);
	  }

	sortDogs () {
		this.allMyDogs.sort(function (a, b) {
			return a.name.localeCompare(b.name);
		});
	}

	// Q6.
	hasFewDogs(){
		// check their number of dogs, true if its one false otherwise.
		return this.allMyDogs.length == 1;
	}

	// Q3
	toString(){
		return this.firstName + ', ' + this.lastName + ' [' + this.id + ']';
	}
}