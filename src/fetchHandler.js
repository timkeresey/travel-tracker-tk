import getData from './index.js';

let fetchHandler = {
  fetchSingleTraveler(loginID) {
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${loginID}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('error', error))
  },

  fetchTravelersData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    .then(data => data.travelers)
    .catch(error => console.log('error', error))
  },

  fetchTripsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
    .then(data => data.trips)
    .catch(error => console.log('error', error))
  },

  fetchDestinationsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
    .then(data => data.destinations)
    .catch(error => console.log('error', error))
  },

  fetchPostTrip(init) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', init)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('bad', error))
  }
}

export default fetchHandler;
