// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import moment from 'moment';
import fetchHandler from './fetchHandler.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import Destination from './Destination.js';
import domUpdates from './domUpdates.js';
// console.log('This is the JavaScript entry file - your code begins here.');
window.addEventListener('load', getData())

let user;
let allTravelers;
let allTrips;
let allDestinations;

function getData() {
  let userData = fetchHandler.fetchSingleTraveler();
  let travelersData = fetchHandler.fetchTravelersData();
  let tripsData = fetchHandler.fetchTripsData();
  let destinationsData = fetchHandler.fetchDestinationsData();
  Promise.all([
    userData,
    travelersData,
    tripsData,
    destinationsData
  ])
  .then(data => {
    // console.log('all this', data);
    user = new Traveler(data[0]);
    // console.log(user);
    allTravelers = data[1].map(traveler => {
      return new Traveler(traveler); //maybe not necessary?
    });
    // console.log(allTravelers);
    allTrips = data[2].map(trip => {
      return new Trip(trip);
    });
    // console.log(allTrips);
    allDestinations = data[3].map(destination => {
      return new Destination(destination);
    });
    domUpdates.createData(user, allTravelers, allTrips, allDestinations);
  })
  .then(() => getUserData(allTrips, allDestinations))
  // .then(() => totalSpent(allDestinations))
  .then(() => userDisplay(user))
}

function getUserData(allTrips) {
  user.getTravelerTrips(allTrips);
  user.getPastTrips(allTrips);
  user.getCurrentTrip(allTrips);
  user.getUpcomingTrips(allTrips);
  user.getPendingTrips(allTrips);
}

// function totalSpent(allDestinations) {
//   user.totalAmountSpent(allDestinations)
// }

function userDisplay(user) {
  domUpdates.displayGreeting(user);
  domUpdates.displayTotalSpent(user, allTrips, allDestinations);
}
