class Controller {
		
	static setup () {
		var theHospital;
		theHospital = new Hospital();
		// ADD CODE HERE TO CREATE THE DONORs
		// Q2
		theHospital.addDonor('98343532', 'John', 'Goff', 'O+');
		theHospital.addDonor('19348855', 'Barack', 'Jiabao', 'A+');
		theHospital.addDonor('34551873', 'Phil', 'Key', 'AB-');


		/*
		 ID        FirstName    LastName    BloodType
		98343532   John         Goff         O+
		19348855   Barack       Jiabao       A+
		34551873   Phil         Key          AB-
		*/

		//ADD CODE HERE TO CREATE THE DONATIONS
		// Q5.

		let theDonation = theHospital.findDonor('98343532');
		theDonation.addDonation(new Date(2006, 0, 17), 600);
		theDonation.addDonation(new Date(2007, 1, 22), 400);
		theDonation.addDonation(new Date(2009, 10, 13), 500);

		theDonation = theHospital.findDonor('19348855');
		theDonation.addDonation(new Date(2009, 9, 18), 1000);
		theDonation.addDonation(new Date(2009, 0, 27), 600);
		theDonation.addDonation(new Date(2008, 1, 26), 200);

		theDonation = theHospital.findDonor('34551873');
		theDonation.addDonation(new Date(2009, 9, 19), 750);

		/*
		 Donor ID       Date        Amount
		 98343532    17 Jan 2006     600
		 98343532    22 Feb 2007     400
		 98343532    13 Nov 2009     500
		 19348855    18 Oct 2009     1000
		 19348855    27 Jan 2009     600
		 19348855    26 Feb 2008     200
		 34551873    19 Oct 2009     750
		*/

		return theHospital
	}
}