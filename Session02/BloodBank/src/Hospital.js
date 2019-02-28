class Hospital {
	constructor () {
		this.allMyDonors = []
	}

	addDonor (newId, newFirstName, newLastName, newBloodType) {
		var newDonor = new Donor(newId, newFirstName, newLastName, newBloodType, this)
		this.allMyDonors.push(newDonor)
	}

	findDonor (targetOwnerId) {
		let foundDonor = null;
		for (let aDonor of this.allMyDonors) {
			if (aDonor.id === targetOwnerId) {
				foundDonor = aDonor
				break
			}
		}
		return foundDonor
	}


	sortDonors () {
		this.allMyDonors.sort(function (a, b) {
			return a.id - b.id
		})
	}

	// Q3
	getDonors() {
		let out = '';
		this.sortDonors();

		for (let aDonor of this.allMyDonors){
			out += aDonor.toString() + '\n';
		}

		return out;
	}

	// Q7
	getLargeDonations(){
		let out = '';
		this.sortDonors();

		for (let aDonor of this.allMyDonors){
			out += aDonor.toString() + '\n';
			for (let aDonation of aDonor.allMyDonations){
				if (aDonation.isLarge()){
					out += aDonation.toString() + '\n';
				}
			}
			
		}
		return out;
	}
}