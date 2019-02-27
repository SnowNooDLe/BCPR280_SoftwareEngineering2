/*globals describe beforeEach Controller it expect aTrack Artist Release Track*/
describe("Question Six", function () {
    describe("Release.hasTwoTracks function", function () {
        var aRelease, aTrack
        beforeEach(function () {
            aRelease = new Release()
            aTrack = new Track()
        })

        it("should exist", function () {
            expect(aRelease.hasTwoTracks ).toBeDefined()
        })

        it("should return a boolean", function () {
            expect(typeof aRelease.hasTwoTracks()).toBe('boolean')
        })

        it("should return true if the number of Track that Release has is equal two.", function () {
            aRelease = new Release('tao', null, null, null, null)
            aTrack = aRelease.addTrack(null, null, null, null)
            aTrack = aRelease.addTrack(null, null, null, null)
            expect(aRelease.hasTwoTracks()).toBe(true)
        })

        it("should return false if the number of Track that Release has is less than two.", function () {
            aRelease = new Release('tao', null, null, null, null)
            aTrack = aRelease.addTrack(null, null, null, null)
            expect(aRelease.hasTwoTracks()).toBe(false)
        })

        it("should return false if the number of Track that Release owns is more than two.", function () {
            aRelease = new Release('tao', null, null, null, null)
            aTrack = aRelease.addTrack(null, null, null, null)
            aTrack = aRelease.addTrack(null, null, null, null)
            aTrack = aRelease.addTrack(null, null, null, null)
            expect(aRelease.hasTwoTracks()).toBe(false)
        })
    })
})