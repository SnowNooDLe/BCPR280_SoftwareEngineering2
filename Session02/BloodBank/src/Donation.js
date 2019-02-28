class Donation {
	constructor (theDonor, newDate, newAmount) {
		// Add Code
		// Q4.
		this.myDonor = theDonor;
		this.date = newDate;
		this.amount = newAmount;
	}

	// Q6
	isLarge(){
		return this.amount >= 600;
	}
	
	toString () {
		var d = this.date,
			months = [
				"January", "February", "March",
				"April", "May", "June", "July",
				"August", "September", "October",
				"November", "December"
			]
		// Add Code
	}
}