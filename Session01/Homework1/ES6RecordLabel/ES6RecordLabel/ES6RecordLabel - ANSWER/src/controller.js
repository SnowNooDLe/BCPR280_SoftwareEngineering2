/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Controller {
	static setup() {
		let theRecordLabel = new RecordLabel()
		/*
			Style         Name              Format             Year Released
			HIPHOP        Up Next           CD                    2014
			INDIETRONICA  Java Lava         Digital               2012
			PUNK ROCK     American Idiot    CD                    2004
			OPERA         C Sharp           CD                    1988
		*/
		theRecordLabel.addRelease( 'HIPHOP', 'Up Next', 'Digital', 2014 )
		theRecordLabel.addRelease( 'INDIETRONICA', 'JavaLava', 'Digital', 2015 )
		theRecordLabel.addRelease( 'PUNK ROCK', 'American Idiot', 'CD', 2004 )
		theRecordLabel.addRelease( 'OPERA', 'C Sharp', 'CD', 1989 )
		/*
		Style             Title              Genre              Type      Artist   
		HIPHOP            Trap Queen         Trap               Studio    Fetty Wap
		INDIETRONICA      JavaScriptIsFun    EDM                Live      Dj M Ike
		OPERA             Manipulator        Operatic Pop       Live      Aubrey Graham
		OPERA             IOStream           Classical Rock     Live      Aubrey Graham
		PUNK ROCK         American Idiot     Rock               Studio    Green Day
		PUNK ROCK         Holiday            Rock               Studio    Green Day

		*/
		let theRelease
		theRelease = theRecordLabel.findRelease( 'Up Next' )
		theRelease.addTrack( 'Trap Queen',  'Trap',  'Studio', 'Fetty Wap' )
		
		theRelease = theRecordLabel.findRelease( 'JavaLava' )
		theRelease.addTrack( 'JavaScriptIsFun', 'EDM', 'Live', 'Dj M Ike' )
		
		theRelease = theRecordLabel.findRelease( 'C Sharp' )
		theRelease.addTrack( 'Manipulator', 'Operatic Pop', 'Live', 'Aubrey Graham' )
		theRelease.addTrack( 'IOStream', 'Classical Rock', 'Live', 'Aubrey Graham' )

		theRelease = theRecordLabel.findRelease( 'American Idiot' )
		theRelease.addTrack( 'American Idiot', 'Rock', 'Studio', 'Green Day' )
		theRelease.addTrack( 'Holiday', 'Rock', 'Studio', 'Green Day' )
		
		return theRecordLabel
	}
}