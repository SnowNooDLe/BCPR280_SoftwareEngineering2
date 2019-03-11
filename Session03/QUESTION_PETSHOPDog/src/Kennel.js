/* global  DogOwner */
class Kennel { // eslint-disable-line no-unused-vars
  constructor () {
    this.allMyDogOwners = [];
  }

  addDogOwner (newId, newFirstName, newLastName, newBirthDate) {
    var newDogOwner = new DogOwner(newId, newFirstName, newLastName, newBirthDate, this);
    this.allMyDogOwners.push(newDogOwner);
  }

  findDogOwner (targetOwnerId) {
    return this.allMyDogOwners.find(aDogOwner => aDogOwner.id === targetOwnerId);
  }

  sortDogOwners () {
    this.allMyDogOwners.sort(function (a, b) {
      return a.id.localeCompare(b.id);
    });
  }

  // Q3
  getDogOwners(){
    let result = '';
    this.sortDogOwners();

    for (let aDogOwner of this.allMyDogOwners){
      result += aDogOwner.toString() + '\n';
    }

    return result;
  }

  // Q7
  getThoseWithFewDogs(){
    let result = '';
    this.sortDogOwners();

    for (let aDogOwner of this.allMyDogOwners){
      aDogOwner.sortDogs();
      // Hence we only want to print owner who has only one dog, check their number of dogs first.
      if (aDogOwner.hasFewDogs()){
        result += aDogOwner.toString() + '\n';
        for (let aDog of aDogOwner.allMyDogs){
          result += aDog.toString() + '\n';
        }
      }
    }
    return result;
  }
}
