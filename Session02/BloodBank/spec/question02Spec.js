/*globals describe beforeEach Controller it expect Hospital Donor Donation*/
describe("Question Two", function () {
    'use strict';
    describe("adding the Three Donors", function () {
        var theHospital;
        beforeEach(function () {
            theHospital = Controller.setup();
        });

        it("should have added 3 Donors", function () {
            expect(theHospital.allMyDonors.length).toBe(3);
        });

        it("should have correctly set details for each Donor", function () {
            var aDonor;
            aDonor = theHospital.sortDonors();

            aDonor = theHospital.allMyDonors[0];
            expect(aDonor).toBeDefined();
            expect(aDonor.id).toBe('19348855');
            expect(aDonor.firstName).toBe('Barack');
            expect(aDonor.lastName).toBe('Jiabao');
            expect(aDonor.bloodType).toBe('A+');

            aDonor = theHospital.allMyDonors[1];
            expect(aDonor).toBeDefined();
            expect(aDonor.id).toBe('34551873');
            expect(aDonor.firstName).toBe('Phil');
            expect(aDonor.lastName).toBe('Key');
            expect(aDonor.bloodType).toBe('AB-');

            aDonor = theHospital.allMyDonors[2];
            expect(aDonor).toBeDefined();
            expect(aDonor.id).toBe('98343532');
            expect(aDonor.firstName).toBe('John');
            expect(aDonor.lastName).toBe('Goff');
            expect(aDonor.bloodType).toBe('O+');
        });
    });
});