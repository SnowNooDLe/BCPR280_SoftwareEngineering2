class Hospital {
	constructor() {
		this.allMyDoctors = []
	}

	addDoctor(newId, newFirstName, newLastName, newOffice, newFees) {
		let newDoctor = new Doctor(newId, newFirstName, newLastName, newOffice, newFees, this)
		this.allMyDoctors.push(newDoctor)
	}

	findDoctor(targetOwnerId) {
		let foundDoctor = null
		for (let aDoctor of this.allMyDoctors) {
			if (aDoctor.id === targetOwnerId) {
				foundDoctor = aDoctor
				break
			}
		}
		return foundDoctor
	}

	sortDoctors() {
		this.allMyDoctors.sort(function (a, b) {
			return a.id - b.id
		})
	}

	// Q3
	getDoctors() {
		let result = '';
		this.sortDoctors();

		for (let aDoctor of this.allMyDoctors){
			result += aDoctor.toString() + "\n";
		}

		return result;
	}

	// Q7
	getBillablePatients(){
		let result = '';
		this.sortDoctors();

		for (let aDoctor of this.allMyDoctors){
			result += aDoctor.toString() + "\n";
			aDoctor.sortPatients();
			for (let aPatient of aDoctor.allMyPatients){
				if (!aPatient.getPaidStatus()){
					result += aPatient.toString() + "\n";
				}
			}
		}
		return result;
	}
}