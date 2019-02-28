/*globals describe beforeEach Controller it expect Hospital Donor Donation*/
describe("Question Four and Question Five", function () {
    'use strict';
    describe("Donation", function () {
        var donation;
        beforeEach(function () {
            donation = new Donation();
        });

        it("should have a .myDonor reference", function () {
            expect(donation.hasOwnProperty('myDonor')).toBeTruthy();
        });

        it("should have a .date property", function () {
            expect(donation.hasOwnProperty('date')).toBeTruthy();
        });

        it("should have an .amount property", function () {
            expect(donation.hasOwnProperty('amount')).toBeTruthy();
        });
    });

    describe("write a Donor.addDonation function to add the Donations", function () {
        var theHospital;
        beforeEach(function () {
            theHospital = Controller.setup();
        });

        it("Donor 98343532 should have 3 Donations", function () {
            var theDonor = theHospital.findDonor('98343532');
            expect(theDonor.allMyDonations.length).toBe(3);
        });

        it("Donor 19348855 should have 3 Donations", function () {
            var theDonor = theHospital.findDonor('19348855');
            expect(theDonor.allMyDonations.length).toBe(3);
        });

        it("Donor 34551873 should have 1 Donations", function () {
            var theDonor = theHospital.findDonor('34551873');
            expect(theDonor.allMyDonations.length).toBe(1);
        });


        it("should correctly set Donation details", function () {


    /*
     Donor ID       Date             Amount
     98343532    13 Nov 2009           500
     98343532    17 Jan 2006           600
     98343532    22 Feb 2007           400
     19348855    18 Oct 2009          1000
     19348855    27 Jan 2009           600
     19348855    26 Feb 2008           200
     34551873    19 Oct 2009           750
    */

            var aDonation, theDonor;
            theDonor = theHospital.findDonor('98343532');
            aDonation = theDonor.sortDonations();
            //98343532    17 Jan 2006           600
            aDonation = theDonor.allMyDonations[0];
            expect(aDonation.myDonor).toEqual(theDonor);
            expect(aDonation.date).toEqual(new Date(2006, 0, 17));
            expect(aDonation.amount).toBe(600);

            //98343532    22 Feb 2007           400
            aDonation = theDonor.allMyDonations[1];
            expect(aDonation.myDonor).toEqual(theDonor);
            expect(aDonation.date).toEqual(new Date(2007, 1, 22));
            expect(aDonation.amount).toBe(400);

            //98343532    13 Nov 2009           500
            aDonation = theDonor.allMyDonations[2];
            expect(aDonation.myDonor).toEqual(theDonor);
            expect(aDonation.date).toEqual(new Date(2009, 10, 13));
            expect(aDonation.amount).toBe(500);

            theDonor = theHospital.findDonor('19348855');
            aDonation = theDonor.sortDonations();
            //19348855    26 Feb 2008           200
            aDonation = theDonor.allMyDonations[0];
            expect(aDonation.myDonor).toEqual(theDonor);
            expect(aDonation.date).toEqual(new Date(2008, 1, 26));
            expect(aDonation.amount).toBe(200);

            //19348855    27 Jan 2009           600
            aDonation = theDonor.allMyDonations[1];
            expect(aDonation.myDonor).toEqual(theDonor);
            expect(aDonation.date).toEqual(new Date(2009, 0, 27));
            expect(aDonation.amount).toBe(600);

            //19348855    18 Oct 2009          1000
            aDonation = theDonor.allMyDonations[2];
            expect(aDonation.myDonor).toEqual(theDonor);
            expect(aDonation.date).toEqual(new Date('18 Oct 2009'));
            expect(aDonation.amount).toBe(1000);

            theDonor = theHospital.findDonor('34551873');
            aDonation = theDonor.sortDonations();
            //34551873    19 Oct 2009           750
            aDonation = theDonor.allMyDonations[0];
            expect(aDonation.myDonor).toEqual(theDonor);
            expect(aDonation.date).toEqual(new Date(2009, 9, 19));
            expect(aDonation.amount).toBe(750);

        });
    });
});