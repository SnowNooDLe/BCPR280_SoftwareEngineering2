/*globals describe beforeEach Controller it expect Hospital Donor Donation*/
describe("Question Three", function () {
    'use strict';
    describe("Hospital.getDonors function", function () {
        var theHospital;
        beforeEach(function () {
            theHospital = Controller.setup();
        });

        it("should return a string", function () {
            expect(typeof theHospital.getDonors()).toBe('string');
        });

        it("should NOT be hard coded", function () {
            theHospital = new Hospital();
            expect(theHospital.getDonors()).toBe('');
        });

        it("should return correctly formatted data in the right order", function () {
            expect(theHospital.getDonors()).toBe('Jiabao, Barack. [A+]\nKey, Phil. [AB-]\nGoff, John. [O+]\n');
        });
    });
});