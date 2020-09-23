let fetchHandler = {
  fetchSingleTraveler() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/15') // interpolate id
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

  fetchPostTrip(newTripData) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTripData)
    })
    .then(response => response.json())
    .then(data => console.log('good', data, newTripData))
    .catch(error => console.log('bad', error))
  }
}

export default fetchHandler;
