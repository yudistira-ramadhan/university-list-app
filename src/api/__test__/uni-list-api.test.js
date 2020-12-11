import UniListApi from '../uni-list-api'

describe('calling endpoint', () => {

  describe('get function', () => {
    it('return the value succesfully', () => {
      const name = 'universitas indonesia'
      const country = 'indonesia'
      expect(UniListApi.get(name, country)).toBeTruthy
    })
  })
  
  describe('getByName function', () => {
    it('return the value succesfully', () => {
      const name = 'universitas indonesia'
      expect(UniListApi.getByName(name)).toBeTruthy
    })
  })

  describe('getByCountry function', () => {
    it('return the value succesfully', () => {
      const country = 'indonesia'
      expect(UniListApi.getByCountry(country)).toBeTruthy
    })
  })

})
