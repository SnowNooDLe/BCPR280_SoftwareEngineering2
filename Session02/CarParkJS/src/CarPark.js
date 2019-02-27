class CarPark {
	
	constructor () {
		this.allMyZones = []
	}

	addZone (newId, newLocation) {
		let newZone = new Zone( newId, newLocation )
		this.allMyZones.push( newZone )
	}

	findZone ( targetId ) {
		let foundZone = null
		for ( let aZone of this.allMyZones ){
			if (aZone.id === targetId) {
				foundZone = aZone
			}
		}
		return foundZone
	}

	sortZones () {
		this.allMyZones.sort( function ( a, b ) {
			return a.id - b.id
		})
	}

	getZones() {
		// let is for local variable, var for global variable.
		let  out = ''
		this.sortZones()
		for (let aZone of this.allMyZones){
			out += aZone.toString() + '\n';
		}
		return out;
	}

	getTemps() {
		let out = ''
		this.sortZones()
		for (let aZone of this.allMyZones){
			for (let aClient of aZone.allMyClients){
				if (aClient.isTemp()){
					out += aClient.toString() + '\n';
				}
			}
		}
		return out;
	}
}