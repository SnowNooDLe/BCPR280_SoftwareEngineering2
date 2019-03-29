/* jshint undef: true, unused: true, esversion: 6, asi: true */

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
        /*
		this.allMyTracks.sort(function (a, b) {
			if (a.title !== b.title) {
				return a.title > b.title
			}
			return b.yearReleased - a.yearReleased
		})
        */
        // alternative
		this.allMyTracks.sort( (a, b) => {
			if (a.title !== b.title) {
				return a.title > b.title
			}
			return b.yearReleased - a.yearReleased
		})
	}
	//------------------------------------------------------------
	toString() {
		// return this.title + ", " + this.format + '. <' + this.style + '>'
        // alternative
        let result
        result = `${this.title}, ${this.format}. <${this.style}>`
        return result
	}
	
	addTrack(newTitle, newGenre, newType, newArtist) {
		let newTrack = new Track(this, newTitle, newGenre, newType, newArtist)
		this.allMyTracks.push(newTrack)
	}
	
	hasTwoTracks() {
		return this.allMyTracks.length == 2
	}
	
	getTracks() {
		let out = ''
        /*
		for (let track of this.allMyTracks){
			out += track + '\n'
		}
        */
        // alternative
        this.allMyTracks.forEach((track) => {out = `${out}${track}\n`})
		return out
	}
	
}