class Donor {
	constructor (newId, newFirstName, newLastName, newBloodType, theHospital) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.bloodType = newBloodType
		this.allMyDonations = []
		this.myHospital = theHospital
	}

	// Q4
	addDonation(newDate, newAmount){
		var newDonation = new Donation(this, newDate, newAmount);
		this.allMyDonations.push(newDonation);
	}

	sortDonations () {
		this.allMyDonations.sort(function (a, b) {
			return a.date - b.date
		})
	}

	// Q3
	toString(){
		return this.lastName +', ' + this.firstName + '. [' + this.bloodType + ']';
	}
}