/* global Kennel */
class Controller { // eslint-disable-line no-unused-vars
  static setup () {
    var theKennel;
    theKennel = new Kennel();
    // ADD CODE HERE TO CREATE THE DOGOWNERS
    // Q2
    theKennel.addDogOwner('BMC', 'Brad', 'McCaw', new Date('1982, 12, 12'));
    theKennel.addDogOwner('RTH', 'Richie', 'Thorn', new Date('1980, 05, 08'));
    theKennel.addDogOwner('DEL', 'Dan', 'Ellis', new Date('1984, 02, 16'));
    theKennel.addDogOwner('ACR', 'Andrew', 'Carter', new Date('1987, 11, 30'));
    /*
    BMC   Brad    McCaw   12/13/1982
    RTH   Richie  Thorn   8/05/1980
    DEL   Dan     Ellis   16/02/1984
    ACR   Andrew  Carter  30/11/1987
    */
    // ADD CODE HERE TO CREATE THE DOGS
    // Q5
    let theDogOwner = theKennel.findDogOwner('BMC');
    theDogOwner.addDog('Speedy', 'Ekanuba', 'Pomeranian', 'N');

    theDogOwner = theKennel.findDogOwner('RTH');
    theDogOwner.addDog('Victor', 'Chef', 'Beagle', 'M');
    theDogOwner.addDog('Killer', 'Purina', 'Mastiff', 'N');

    theDogOwner = theKennel.findDogOwner('DEL');
    theDogOwner.addDog('Ruftero', 'Ekanuba', 'Poodle', 'F');
    theDogOwner.addDog('Sausage', 'Purina', 'Dachshund', 'F');

    theDogOwner = theKennel.findDogOwner('ACR');
    theDogOwner.addDog('Random', 'Cat', 'Mastiff', 'F');

    /*
    DogOwner ID     Name         Breed         Gender      Favorite Food
      BMC          Speedy     Pomeranian        N           Ekanuba
      RTH          Victor      Beagle           M           Chef
      RTH          Killer      Mastiff          N           Purina
      DEL          Ruftero     Poodle           F           Ekanuba
      DEL          Sausage    Dachshund         F           Purina
      ACR          Random      Mastiff          F            Cat
      */
    return theKennel;
  }
}
