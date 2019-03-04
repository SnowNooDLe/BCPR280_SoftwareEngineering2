/*globals describe beforeEach it expect Hospital Doctor Patient*/
describe("Basic Check For Original Source Code", function () {
    'use strict';
    describe("Hospital", function () {
        var theHospital;
        beforeEach(function () {
            theHospital = new Hospital();
        });

        describe("the allMyDoctors property", function () {
            it("should have an .allMyDoctors property", function () {
                expect(theHospital.hasOwnProperty('allMyDoctors')).toBeTruthy();
            });
            it("should reference an array", function () {
                expect(Array.isArray(theHospital.allMyDoctors)).toBeTruthy();
            });
        });

        it("should have an .addDoctor function", function () {
            expect(typeof theHospital.addDoctor).toBe('function');
        });

        it("should have a .findDoctor function", function () {
            expect(typeof theHospital.findDoctor).toBe('function');
        });

        it("should have a .sortDoctors function", function () {
            expect(typeof theHospital.sortDoctors).toBe('function');
        });
    });

    describe("Doctor", function () {
        var dogOwner;
        beforeEach(function () {
            dogOwner = new Doctor();
        });

        it("should have an .id property", function () {
            expect(dogOwner.hasOwnProperty('id')).toBeTruthy();
        });

        it("should have a .firstName property", function () {
            expect(dogOwner.hasOwnProperty('firstName')).toBeTruthy();
        });

        it("should have a .lastName property", function () {
            expect(dogOwner.hasOwnProperty('lastName')).toBeTruthy();
        });

        it("should have an .office property", function () {
            expect(dogOwner.hasOwnProperty('office')).toBeTruthy();
        });

        it("should have a .fees property", function () {
            expect(dogOwner.hasOwnProperty('fees')).toBeTruthy();
        });

        it("should have a .myHospital reference", function () {
            expect(dogOwner.hasOwnProperty('myHospital')).toBeTruthy();
        });

        describe("the allMyPatients property", function () {
            it("should have an .allMyPatients reference", function () {
                expect(dogOwner.hasOwnProperty('allMyPatients')).toBeTruthy();
            });

            it("should reference an array", function () {
                expect(Array.isArray(dogOwner.allMyPatients)).toBeTruthy();
            });
        });

        it("should have a .sortPatients function", function () {
            expect(typeof dogOwner.sortPatients).toBe('function');
        });
    });
});