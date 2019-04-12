/* global describe beforeEach it expect Cattery CatOwner  */
describe('Basic Check For Original Source Code', () => {
  describe('Cattery', () => {
    let theCattery
    beforeEach(() => {
      theCattery = new Cattery()
    })
    describe('the allMyCatOwners property', () => {
      it('should have an .allMyCatOwners property', () => {
        expect(theCattery.hasOwnProperty('allMyCatOwners')).toBeTruthy()
      })
      it('should reference an array', () => {
        expect(Array.isArray(theCattery.allMyCatOwners)).toBeTruthy()
      })
    })

    it('should have an .addCatOwner function', () => {
      expect(typeof theCattery.addCatOwner).toBe('function')
    })

    it('should have a .findCatOwner function', () => {
      expect(typeof theCattery.findCatOwner).toBe('function')
    })
    it('should have a .sortCatOwners function', function () {
      expect(typeof theCattery.sortCatOwners).toBe('function')
    })
  })

  describe('CatOwner', () => {
    var catOwner
    beforeEach(() => {
      catOwner = new CatOwner()
    })
    it('should have an .id property', () => {
      expect(catOwner.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .firstName property', () => {
      expect(catOwner.hasOwnProperty('firstName')).toBeTruthy()
    })
    it('should have a .lastName property', () => {
      expect(catOwner.hasOwnProperty('lastName')).toBeTruthy()
    })
    it('should have an .amountOwed property', () => {
      expect(catOwner.hasOwnProperty('amountOwed')).toBeTruthy()
    })
    it('should have a .myCattery reference', function () {
      expect(catOwner.hasOwnProperty('myCattery')).toBeTruthy()
    })

    describe('the allMyCats property', function () {
      it('should have an .allMyCats reference', function () {
        expect(catOwner.hasOwnProperty('allMyCats')).toBeTruthy()
      })
      it('should reference an array', function () {
        expect(Array.isArray(catOwner.allMyCats)).toBeTruthy()
      })
    })

    it('should have a .sortCats function', function () {
      expect(typeof catOwner.sortCats).toBe('function')
    })
  })
})
