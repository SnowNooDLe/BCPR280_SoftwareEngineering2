class Donor {
	constructor (newId, newFirstName, newLastName, newBloodType, theHospital) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.bloodType = newBloodType
		this.allMyDonations = []
		this.myHospital = theHospital
	}

	sortDonations () {
		this.allMyDonations.sort(function (a, b) {
			return a.date - b.date
		})
	}
}