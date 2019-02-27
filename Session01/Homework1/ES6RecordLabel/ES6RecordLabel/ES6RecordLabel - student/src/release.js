class Release {
	constructor(newStyle, newTitle, newFormat, newYearReleased, theRecordLabel) {
		this.style = newStyle
		this.title = newTitle
		this.format = newFormat
		this.yearReleased = newYearReleased
		this.myRecordLabel = theRecordLabel
		this.allMyTracks = []
	}

	sortTracks() {
		this.allMyTracks.sort(function(a, b) {
			if (a.title !== b.title) {
				return a.title > b.title
			}
			return b.yearReleased - a.yearReleased
		})
	}
	// Q4
	addTrack(newTitle, newGenre, newType, newArtist) {
		let newTrack = new Track(this, newTitle, newGenre, newType, newArtist)
		this.allMyTracks.push(newTrack)
	}

	// Q6
	hasTwoTracks() {
		return this.allMyTracks.length == 2;
	}
	// Q3
	toString() {
		return this.title + ', ' + this.format + '. <' + this.style + '>';
	}

}
