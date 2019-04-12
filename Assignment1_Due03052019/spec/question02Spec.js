/* globals describe beforeEach Controller it expect  */
describe('Question Two', () => {
  describe('adding the four CatOwners', () => {
    let theCattery
    beforeEach(() => {
      theCattery = Controller.setup()
    })
    it('should have added 4 CatOwners', () => {
      expect(theCattery.allMyCatOwners.length).toBe(4)
    })
    it('should have correctly set details for each CatOwner', () => {
      theCattery.sortCatOwners()
      let aCatOwner = theCattery.allMyCatOwners[0]
      expect(aCatOwner).toBeDefined()
      expect(aCatOwner.id).toBe('4')
      expect(aCatOwner.firstName).toBe('Temepara')
      expect(aCatOwner.lastName).toBe('Williams')
      expect(aCatOwner.amountOwed).toBe(12.56)

      aCatOwner = theCattery.allMyCatOwners[1]
      expect(aCatOwner).toBeDefined()
      expect(aCatOwner.id).toBe('7')
      expect(aCatOwner.firstName).toBe('Ruth')
      expect(aCatOwner.lastName).toBe('George')
      expect(aCatOwner.amountOwed).toBe(12.34)

      aCatOwner = theCattery.allMyCatOwners[2]
      expect(aCatOwner).toBeDefined()
      expect(aCatOwner.id).toBe('23')
      expect(aCatOwner.firstName).toBe('Casey')
      expect(aCatOwner.lastName).toBe('van Dyke')
      expect(aCatOwner.amountOwed).toBe(34.56)

      aCatOwner = theCattery.allMyCatOwners[3]
      expect(aCatOwner).toBeDefined()
      expect(aCatOwner.id).toBe('165')
      expect(aCatOwner.firstName).toBe('Irene')
      expect(aCatOwner.lastName).toBe('Aitkin')
      expect(aCatOwner.amountOwed).toBe(56.12)
    })
  })
})
