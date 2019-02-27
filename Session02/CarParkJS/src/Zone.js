class Zone {
	
	constructor  (newId, newLocation) {
		this.id = newId
		this.location = newLocation
		this.allMyClients = []
	}

	addClient (newId, newPersonalName, newFamilyName, newBirthday, newIsPermanent) {
		let newClient = new Client( this, newId, newPersonalName, newFamilyName, newBirthday, newIsPermanent )
		this.allMyClients.push(newClient)
	}

	// get method giving right to be called by other class
	toString () {
		return this.id + '. - ' + this.location + '.'
	}
}