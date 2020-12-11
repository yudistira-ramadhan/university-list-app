import axios from 'axios'

const API_PATH = 'http://universities.hipolabs.com/search'

const UniListApi = {

  /**
   * Get a university based on params
   * Invoke `GET http://universities.hipolabs.com/search'
   * @param {string} name - University name for filtering
   * @param {string} country - University country for filtering
   */
  get: async (name, country) => {
    const params = {
      name    : name,
      country : country
    }

    const response = axios.get(API_PATH, { params })
    return response
  },
  
  /**
   * Get a list of university based on a university name
   * Invoke `GET http://universities.hipolabs.com/search'
   * @param {string} name - University name for filtering
   */
  getByName: async (name) => {
    const params = {
      name: name
    }

    const response = axios.get(API_PATH, { params })
    return response
  },

  /**
   * Get a list of university based on a Country
   * Invoke `GET http://universities.hipolabs.com/search'
   * @param {string} country - University Country for filtering
   */
  getByCountry: async (country) => {
    const params = {
      country: country
    }

    const response = axios.get(API_PATH, { params })
    return response
  }
}

export default UniListApi
