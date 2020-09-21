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
    console.log('all this stuff', data);
  })
}
