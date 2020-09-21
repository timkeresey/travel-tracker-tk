let fetchHandler = {
  fetchSingleTraveler() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/1')// placeholder ID
    .then(response => response.json())
    .then(response => response)
    .catch(error => console.log('error' error))
  },

  fetchTravelersData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
    .then(response => response.json())
    .then(response => response.travelers)
    .catch(error => console.log('error' error))
  },

  fetchTripsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
    .then(response => response.json())
    .then(response => response.trips)
    .catch(error => console.log('error' error))
  },

  fetchDestinationsData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
    .then(response => response.json())
    .then(response => response.destinations)
    .catch(error => console.log('error' error))
  }
}
