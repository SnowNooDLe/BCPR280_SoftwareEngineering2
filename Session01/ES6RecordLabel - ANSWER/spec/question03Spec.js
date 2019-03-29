/*globals describe beforeEach Controller it expect Artist Album Tracks*/
describe("Question Three", function () {
    describe("theRecordLabel.getReleases function", function () {
        var theRecordLabel
        beforeEach(function () {
            theRecordLabel = Controller.setup()
        })

		it("should exist", function () {
            expect( theRecordLabel.getReleases).toBeDefined()
        })
        it("should return a string", function () {
            expect(typeof theRecordLabel.getReleases()).toBe('string')
        })

        it("should NOT be hard coded", function () {
            theRecordLabel = new RecordLabel()
			
            expect(theRecordLabel.getReleases()).toBe('')
        })
		
        it("should return correctly formatted data in the right order", function () {
            expect(theRecordLabel.getReleases()).toBe('American Idiot, CD. <PUNK ROCK>\nC Sharp, CD. <OPERA>\nJavaLava, Digital. <INDIETRONICA>\nUp Next, Digital. <HIPHOP>\n')
        })
    })
})