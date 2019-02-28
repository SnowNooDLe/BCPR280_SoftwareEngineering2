/*globals describe beforeEach Controller it expect Hospital Donor Donation*/
describe("Question Seven", function () {
    'use strict';
    describe("Hospital.getLargeDonations function", function () {
        var theHospital;
        beforeEach(
            function () {
                theHospital = Controller.setup();
            }
        );

        it("should return a string", function () {
            expect(typeof theHospital.getLargeDonations()).toBe('string');
        });

        it("should NOT be hard coded", function () {
            theHospital = new Hospital();
            expect(theHospital.getLargeDonations()).toBe('');
        });

        it("should correctly report details of donation which the amount donated is equal to or greater than 600 units", function () {
            expect(theHospital.getLargeDonations()).toBe('Jiabao, Barack. [A+]\n27 January 2009=600\n18 October 2009=1000\nKey, Phil. [AB-]\n19 October 2009=750\nGoff, John. [O+]\n17 January 2006=600\n');
        });

    });
});