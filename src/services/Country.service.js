export default class CountryService {
    static async getAll() {
        try {
            const res = await fetch('https://restcountries.com/v3.1/all')
            if(!res.ok) {
                throw new Error('Cant fetching countries')
            }
            const data = await res.json()
            return data
        } catch (error) {
            console.log('Get all error: ', error);
        }
    }

    static async getByName(name) {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            return res
        } catch (error) {
            console.log('Get by name error: ', error);
        }
    }
}