/* jshint undef: true, unused: true, esversion: 6, asi: true */

class RecordLabel {
	constructor() {
		this.allMyReleases = []
	}

	addRelease(newStyle, newTitle, newFormat, newYearReleased) {
		let newRelease = new Release(newStyle, newTitle, newFormat, newYearReleased, this)
		this.allMyReleases.push(newRelease)
	}

	findRelease(targetTitle) {
		let foundRelease = null
		for (let aRelease of this.allMyReleases) {
			if (aRelease.title === targetTitle) {
				foundRelease = aRelease
				break
			}
		}
		return foundRelease
	}

	sortReleases() {
		/*
        this.allMyReleases.sort( function (a, b) {
			return a.title > b.title
			})
        */
        // alternative
        this.allMyReleases.sort((a, b) => {
			return a.title > b.title
		})
	}
	//------------------------------------------------------
	getReleases() {
		this.sortReleases()
		let out = ''
        /*
		for (let aRelease of this.allMyReleases){
			out += aRelease + '\n'
		}
        */
        // alternative
        this.allMyReleases.forEach((aRelease) => {out = `${out}${aRelease}\n` })
		return out
	}
	
	getReleasesWithTwoTracks() {
		let out = ''
		this.sortReleases()
        /*
		for (let aRelease of this.allMyReleases){
			if (aRelease.hasTwoTracks() ){
				out += aRelease + '\n'
				out += aRelease.getTracks()
			}
		}
        */
        // alternative
        this.allMyReleases.forEach( (aRelease) => {
                                        if (aRelease.hasTwoTracks()) {
                                            out = `${out}${aRelease}\n`
                                            out = `${out}${aRelease.getTracks()}`
                                        }
                                    })
		return out
	}
}