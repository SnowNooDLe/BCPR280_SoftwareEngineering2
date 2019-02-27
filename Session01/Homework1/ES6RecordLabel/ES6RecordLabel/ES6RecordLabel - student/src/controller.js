class Controller {
	static setup() {
		let theRecordLabel = new RecordLabel()
		// Q2
		theRecordLabel.addRelease('PUNK ROCK', 'American Idiot', 'CD', 2004);
		theRecordLabel.addRelease('OPERA', 'C Sharp', 'CD', 1989);
		theRecordLabel.addRelease('INDIETRONICA', 'Java Lava', 'Digital', 2012);
		theRecordLabel.addRelease('HIPHOP', 'Up Next', 'CD', 2014);
		/*
			Style         Name              Format             Year Released
			HIPHOP        Up Next           CD                    2014
			INDIETRONICA  Java Lava         Digital               2012
			PUNK ROCK     American Idiot    CD                    2004
			OPERA         C Sharp           CD                    1988
		*/
		
		
		// Q5
		let theRelease = theRecordLabel.findRelease('Up Next');
		theRelease.addTrack('Trap Queen', 'Trap', 'Studio', 'Fetty Wap');

		theRelease = theRecordLabel.findRelease('Java Lava');
		theRelease.addTrack('JavaScriptIsFun', 'EDM', 'Live', 'Dj M Ike');

		theRelease = theRecordLabel.findRelease('C Sharp');
		theRelease.addTrack('IOStream', 'Classical Rock', 'Live', 'Aubrey Graham');
		theRelease.addTrack('Manipulator', 'Operatic Pop', 'Live', 'Aubrey Graham');

		theRelease = theRecordLabel.findRelease('American Idiot');
		theRelease.addTrack('American Idiot', 'Rock', 'Studio', 'Green Day');
		theRelease.addTrack('Holiday', 'Rock', 'Studio', 'Green Day');
		/*
		Style             Title              Genre              Type      Artist
		HIPHOP            Trap Queen         Trap               Studio    Fetty Wap
		INDIETRONICA      JavaScriptIsFun    EDM                Live      Dj M Ike
		OPERA             Manipulator        Operatic Pop       Live      Aubrey Graham
		OPERA             IOStream           Classical Rock     Live      Aubrey Graham
		PUNK ROCK         American Idiot     Rock               Studio    Green Day
		PUNK ROCK         Holiday            Rock               Studio    Green Day

		*/
		

		return theRecordLabel
	}
}
