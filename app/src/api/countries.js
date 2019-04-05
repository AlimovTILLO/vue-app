import { HTTP } from './common'
export const Countries = {
  list () {
    return HTTP.get('/properties/country?pagination[limit]=6').then(response => {
      return response.data
    })
  }
}
