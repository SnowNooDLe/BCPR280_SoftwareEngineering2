class  Controller { 

	static setup () {
		var theCarPark
		theCarPark = new CarPark()
		// ADD CODE HERE TO CREATE THE ZONES
		theCarPark.addZone(3, 'Cashel Mall');
		theCarPark.addZone(1, 'Central City');
		theCarPark.addZone(2, 'Madras Street');
		/*
			3 Cashel Mall
			1 Central City
			2 Madras Street
		*/
			
			
		//ADD CODE HERE TO CREATE THE CLIENTS
		let theCarZone = theCarPark.findZone(1)
		theCarZone.addClient(6001, 'Maya', 'Thorne', new Date(1996,0,31), false);
		theCarZone.addClient(6002, 'Carl', 'Umaga',new Date(1996,6,29), true);
		theCarZone.addClient(6003, 'Anna', 'Kumar', new Date(1999,2,31), false);

		theCarZone = theCarPark.findZone(2)
		theCarZone.addClient(7001, 'Jessica', 'Bush', new Date(1997,2,31), true);
		theCarZone.addClient(7002, 'Marge', 'Clinton', new Date(1997,4,14), true);
		
		theCarZone = theCarPark.findZone(3)
		theCarZone.addClient(8001, 'Jillian', 'Fleming', new Date(1998,1,14), false);
		
		/*
		1 6001 Maya Thorne 31 Jan 1996 no
		1 6002 Carl Umaga 29 Aug 1996 yes
		2 7001 Jessica Bush 31 March 1997 yes
		2 7002 Marge Clinton 14 May 1997 yes
		3 8001 Jillian Fleming 14 Feb 1998 no
		1 6003 Anna Kumar 31 March 1999 no
		*/
		return theCarPark;
	}
}