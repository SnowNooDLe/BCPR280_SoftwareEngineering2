class Dog {
	constructor (theDogOwner, newName, newFavoriteFood, newBreed, newGender) {
	// ADD CODE HERE
	// Q4
	this.myDogOwner = theDogOwner;
	this.name = newName;
	this.favoriteFood = newFavoriteFood;
	this.breed = newBreed;
	this.gender = newGender;
	}

	// Q7
	toString(){
		return '\t' + this.name + ' (' + this.gender + ') the ' + this.breed + ' likes to eat ' + this.favoriteFood;
	}
}