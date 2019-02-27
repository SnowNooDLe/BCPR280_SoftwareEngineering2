/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Track {
	constructor(theRelease, newTitle, newGenre, newType, newArtist) {
		//-------------------------------------------------------
		this.myRelease = theRelease
		this.title = newTitle
		this.genre = newGenre
		this.type = newType
		this.artist = newArtist
	}
	
	toString() {
		// return '   ' + this.title + ' ' + this.genre + ' ' + this.artist
        // alternative
        let result
        result = `   ${this.title} ${this.genre} ${this.artist}`
        return result
	}
	
}