/*globals describe beforeEach Controller it expect Artist Release Song*/
describe("Question Seven", function () {
    describe("getReleasesWithTwoTracks function", function () {
        var theRecordLabel
        beforeEach(
            function () {
                theRecordLabel = Controller.setup()
            }
        )

		it("should be defined", function () {
            expect( theRecordLabel.getReleasesWithTwoTracks ).toBeDefined()
        })
        it("should return a string", function () {
            expect(typeof theRecordLabel.getReleasesWithTwoTracks()).toBe('string')
        })

        it("should NOT be hard coded", function () {
            theRecordLabel = new RecordLabel()
            expect(theRecordLabel.getReleasesWithTwoTracks()).toBe('')
        })

        it("should correctly report details of Releases who has 2 tracks in order", function () {
            expect(theRecordLabel.getReleasesWithTwoTracks()).toBe('American Idiot, CD. <PUNK ROCK>\n   American Idiot Rock Green Day\n   Holiday Rock Green Day\nC Sharp, CD. <OPERA>\n   Manipulator Operatic Pop Aubrey Graham\n   IOStream Classical Rock Aubrey Graham\n' )
        })
		
    })
})