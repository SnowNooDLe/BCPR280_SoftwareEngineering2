/*globals describe beforeEach it expect Artist Release Track*/
describe("Basic Check For Original Source Code", function () {
    describe("RecordLabel", function () {
        var theRecordLabel
        beforeEach(function () {
            theRecordLabel = new RecordLabel()
        })

        describe("the allMyReleases property", function () {
            it("should have an .allMyReleases property", function () {
                expect(theRecordLabel.hasOwnProperty('allMyReleases')).toBeTruthy()
            })
            it("should reference an array", function () {
                expect(Array.isArray(theRecordLabel.allMyReleases)).toBeTruthy()
            })
        })

        it("should have an .addRelease function", function () {
            expect(typeof theRecordLabel.addRelease).toBe('function')
        })

        it("should have a .findRelease function", function () {
            expect(typeof theRecordLabel.findRelease).toBe('function')
        })

        it("should have a .sortReleases function", function () {
            expect(typeof theRecordLabel.sortReleases).toBe('function')
        })
    })

   describe("Release", function () {
        var theRelease
        beforeEach(function () {
            theRelease = new Release()
        })

        it("should have an .style property", function () {
            expect(theRelease.hasOwnProperty('style')).toBeTruthy()
        })

        it("should have a .title property", function () {
            expect(theRelease.hasOwnProperty('title')).toBeTruthy()
        })

        it("should have a .format property", function () {
            expect(theRelease.hasOwnProperty('format')).toBeTruthy()
        })

        it("should have an .yearReleased property", function () {
            expect(theRelease.hasOwnProperty('yearReleased')).toBeTruthy()
        })

        it("should have a .myRecordLabel reference", function () {
            expect(theRelease.hasOwnProperty('myRecordLabel')).toBeTruthy()
        })

        describe("the allMyTracks property", function () {
            it("should have an .allMyTracks reference", function () {
                expect(theRelease.hasOwnProperty('allMyTracks')).toBeTruthy()
            })

            it("should reference an array", function () {
                expect(Array.isArray(theRelease.allMyTracks)).toBeTruthy()
            })
        })

        it("should have a .sortTracks function", function () {
            expect(typeof theRelease.sortTracks).toBe('function')
        })
    })
})