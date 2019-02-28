/*globals describe beforeEach Controller it expect Hospital Donor Donation*/
describe("Question Six", function () {
    'use strict';
    describe("Donation.isLarge function", function () {
        var aDonation;
        beforeEach(function () {
            aDonation = new Donation();
        });

        it("should exist", function () {
            expect(aDonation.isLarge).toBeDefined();
        });

        it("should return a boolean", function () {
            expect(typeof aDonation.isLarge()).toBe('boolean');
        });

        it("should return TRUE if the amount donated is equal to 600 units.", function () {
            aDonation = new Donation(null, null, 600);
            expect(aDonation.isLarge()).toBe(true);
        });

        it("should return TRUE if the amount donated is more to 600 units.", function () {
            aDonation = new Donation(null, null, 6000);
            expect(aDonation.isLarge()).toBe(true);
        });

        it("should return FALSE if the amount donated is less than 600 units.", function () {
            aDonation = new Donation(null, null, 100);
            expect(aDonation.isLarge()).toBe(false);
        });
    });
});