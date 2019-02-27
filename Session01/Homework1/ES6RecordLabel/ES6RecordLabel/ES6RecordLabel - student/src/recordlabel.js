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
		this.allMyReleases.sort( function (a, b) {
			return a.title > b.title
			})
	}

	// Q3
	getReleases() {
		let result;
		this.sortReleases();
		result = this.allMyReleases.forEach((aRelease) => {result += View.tab() + aRelease + View.newline();});
		console.log(result)

		return result
	}
}
