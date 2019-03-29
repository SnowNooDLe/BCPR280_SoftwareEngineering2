//*globals describe beforeEach Controller it expect aTrack Artist Release*/
describe("Question Four and Question Five", function () {
    describe("Track", function () {
        var track
        beforeEach(function () {
            track = new Track()
        })

        it("should have a .myRelease reference", function () {
            expect(track.hasOwnProperty('myRelease')).toBeTruthy()
        })

        it("should have a .title property", function () {
            expect(track.hasOwnProperty('title')).toBeTruthy()
        })

        it("should have a .genre property", function () {
            expect(track.hasOwnProperty('genre')).toBeTruthy()
        })

        it("should have a .type property", function () {
            expect(track.hasOwnProperty('type')).toBeTruthy()
        })

        it("should have a .artist property", function () {
            expect(track.hasOwnProperty('artist')).toBeTruthy()
        })
    })

    describe("write a Relase.addTrack function to add a track to an release", function () {
        var theRecordLabel
        beforeEach(function () {
            theRecordLabel = Controller.setup()
        })

        it("Release 'Up Next' should have 1 Track", function () {
            var theRelease = theRecordLabel.findRelease('Up Next')
            expect(theRelease.allMyTracks.length).toBe(1)
        })

        it("Release 'JavaLava' should have 1 Track", function () {
            var theRelease = theRecordLabel.findRelease('JavaLava')
            expect(theRelease.allMyTracks.length).toBe(1)
        })

        it("Release 'American Idiot' should have 2 Tracks", function () {
            var theRelease = theRecordLabel.findRelease('American Idiot')
            expect(theRelease.allMyTracks.length).toBe(2)
        })

        it("Release PUNK ROCK should have 2 Tracks", function () {
            var theRelease = theRecordLabel.findRelease('C Sharp')
            expect(theRelease.allMyTracks.length).toBe(2)
        })

        it("should correctly set Tracks details", function () {

            /*
              MusicStyle     Title                Genre                  Type          Single By

            HIPHOP          Trap Queen            Trap                   Studio        Fetty Wap
                
			INDIETRONICA	JavaScriptIsFun       EDM                    Live          Dj M Ike Lance
			
			OPERA           Manipulator           Operatic Pop           Live          Aubrey Graham  
			 
            OPERA           IOStream              Classical Rock         Live          Aubrey Graham
			
			PUNK ROCK       American Idiot        Rock                   Studio        Green Day

            PUNK ROCK        Holiday              Rock                   Studio        Green Day
            */
            var aTrack, theRelease

            theRelease = theRecordLabel.findRelease('Up Next')
            aTrack = theRelease.sortTracks()
            // HIPHOP          Trap Queen      Trap        Studio        Fetty Wap
            aTrack = theRelease.allMyTracks[0]
            expect(aTrack.myRelease).toEqual(theRelease)
            expect(aTrack.title).toBe('Trap Queen')
            expect(aTrack.genre).toBe('Trap')
            expect(aTrack.type).toBe('Studio')
            expect(aTrack.artist).toBe('Fetty Wap')

            theRelease = theRecordLabel.findRelease('JavaLava')
            aTrack = theRelease.sortTracks()
            //INDIETRONICA	JavaScriptIsFun       EDM   Live          Dj M Ike Lance
			aTrack = theRelease.allMyTracks[0]
            expect(aTrack.myRelease).toEqual(theRelease)
            expect(aTrack.title).toBe('JavaScriptIsFun')
            expect(aTrack.genre).toBe('EDM')
            expect(aTrack.type).toBe('Live')
            expect(aTrack.artist).toBe('Dj M Ike')

			
            theRelease = theRecordLabel.findRelease('C Sharp')
            aTrack = theRelease.sortTracks()
            //OPERA       IOStream              Classical Rock         Live          Aubrey Graham
			aTrack = theRelease.allMyTracks[0]
            expect(aTrack.myRelease).toEqual(theRelease)
            expect(aTrack.title).toBe('IOStream')
            expect(aTrack.genre).toBe('Classical Rock')
            expect(aTrack.type).toBe('Live')
            expect(aTrack.artist).toBe('Aubrey Graham')
			//OPERA       Manipulator       Operatic Pop       Live       Aubrey Graham 
			aTrack = theRelease.allMyTracks[1]
            expect(aTrack.myRelease).toEqual(theRelease)
            expect(aTrack.title).toBe('Manipulator')
            expect(aTrack.genre).toBe('Operatic Pop')
            expect(aTrack.type).toBe('Live')
            expect(aTrack.artist).toBe('Aubrey Graham')
			
            theRelease = theRecordLabel.findRelease('American Idiot')
            aTrack = theRelease.sortTracks()
            //PUNK ROCK       American Idiot        Rock       Studio        Green Day
			aTrack = theRelease.allMyTracks[0]
            expect(aTrack.myRelease).toEqual(theRelease)
            expect(aTrack.title).toBe('American Idiot')
            expect(aTrack.genre).toBe('Rock')
            expect(aTrack.type).toBe('Studio')
            expect(aTrack.artist).toBe('Green Day')
            //PUNK ROCK        Holiday              Rock                   Studio        Green Day
			aTrack = theRelease.allMyTracks[1]
            expect(aTrack.myRelease).toEqual(theRelease)
            expect(aTrack.title).toBe('Holiday')
            expect(aTrack.genre).toBe('Rock')
            expect(aTrack.type).toBe('Studio')
            expect(aTrack.artist).toBe('Green Day')
        })
    })
})