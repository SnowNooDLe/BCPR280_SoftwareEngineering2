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


	toString() {
		return this.title + ', ' + this.format + '. <' + this.style + '>';
	}

}
