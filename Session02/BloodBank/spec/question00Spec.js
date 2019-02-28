/*globals describe beforeEach it expect Hospital Donor Donation*/
describe("Basic Check For Original Source Code", function () {
    'use strict';
    describe("Hospital", function () {
        var theHospital;
        beforeEach(function () {
            theHospital = new Hospital();
        });

        describe("the allMyDonors property", function () {
            it("should have an .allMyDonors property", function () {
                expect(theHospital.hasOwnProperty('allMyDonors')).toBeTruthy();
            });
            it("should reference an array", function () {
                expect(Array.isArray(theHospital.allMyDonors)).toBeTruthy();
            });
        });

        it("should have an .addDonor function", function () {
            expect(typeof theHospital.addDonor).toBe('function');
        });

        it("should have a .findDonor function", function () {
            expect(typeof theHospital.findDonor).toBe('function');
        });

        it("should have a .sortDonors function", function () {
            expect(typeof theHospital.sortDonors).toBe('function');
        });
    });

    describe("Donor", function () {
        var donor;
        beforeEach(function () {
            donor = new Donor();
        });

        it("should have an .id property", function () {
            expect(donor.hasOwnProperty('id')).toBeTruthy();
        });

        it("should have a .firstName property", function () {
            expect(donor.hasOwnProperty('firstName')).toBeTruthy();
        });

        it("should have a .lastName property", function () {
            expect(donor.hasOwnProperty('lastName')).toBeTruthy();
        });

        it("should have a .bloodType property", function () {
            expect(donor.hasOwnProperty('bloodType')).toBeTruthy();
        });

        it("should have a .myHospital reference", function () {
            expect(donor.hasOwnProperty('myHospital')).toBeTruthy();
        });

        describe("the allMyDonations property", function () {
            it("should have an .allMyDonations reference", function () {
                expect(donor.hasOwnProperty('allMyDonations')).toBeTruthy();
            });

            it("should reference an array", function () {
                expect(Array.isArray(donor.allMyDonations)).toBeTruthy();
            });
        });

        it("should have a .sortDonations function", function () {
            expect(typeof donor.sortDonations).toBe('function');
        });
    });
});