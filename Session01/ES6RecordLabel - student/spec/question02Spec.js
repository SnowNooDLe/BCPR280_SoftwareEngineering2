/*globals describe beforeEach  it expect Artist Release Track*/
describe("Question Two", function () {
    describe("adding the four Release", function () {
        var theRecordLabel
        beforeEach(function () {
            theRecordLabel = Controller.setup()
        })

        it("should have added 4 Release", function () {
            expect(theRecordLabel.allMyReleases.length).toBe(4)
        })

        it("should have correctly set details for each Release", function () {
            var aRelease
            theRecordLabel.sortReleases()

			aRelease = theRecordLabel.allMyReleases[0]
			expect(aRelease).toBeDefined()
            expect(aRelease.style).toBe('PUNK ROCK')
            expect(aRelease.title).toBe('American Idiot')
            expect(aRelease.format).toBe('CD')
            expect(aRelease.yearReleased).toBe(2004)

			aRelease = theRecordLabel.allMyReleases[1]
			expect(aRelease).toBeDefined()
            expect(aRelease.style).toBe('OPERA')
            expect(aRelease.title).toBe('C Sharp')
            expect(aRelease.format).toBe('CD')
            expect(aRelease.yearReleased).toBe(1989)

			aRelease = theRecordLabel.allMyReleases[2]
			expect(aRelease).toBeDefined()
            expect(aRelease.style).toBe('INDIETRONICA')
            expect(aRelease.title).toBe('Java Lava')
            expect(aRelease.format).toBe('Digital')
            expect(aRelease.yearReleased).toBe(2012)

            aRelease = theRecordLabel.allMyReleases[3]
            expect(aRelease).toBeDefined()
            expect(aRelease.style).toBe('HIPHOP')
            expect(aRelease.title).toBe('Up Next')
            expect(aRelease.format).toBe('CD')
            expect(aRelease.yearReleased).toBe(2014)

        })
    })
})
