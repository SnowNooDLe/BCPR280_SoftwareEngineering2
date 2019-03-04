class Patient {
	constructor(newId, newLastName, newFirstName, newFeesOwing, theDoctor) {
	// ADD CODE HERE
	// Q4
	this.id = newId;
	this.lastName = newLastName;
	this.firstName = newFirstName;
	this.feesOwing = newFeesOwing;
	this.myDoctor = theDoctor;
	}

	// Q6
	getPaidStatus(){
		return this.feesOwing == 0;
	}

	// Q7
	toString(){
		return this.lastName + " " + this.firstName;
	}
}