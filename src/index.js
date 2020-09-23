import './css/base.scss';

import moment from 'moment';
import fetchHandler from './fetchHandler.js';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import Destination from './Destination.js';
import domUpdates from './domUpdates.js';

// window.addEventListener('load', getData());

let user;
let allTravelers;
let allTrips;
let allDestinations;
let newTripData;
let capturedDestinationID;
let loginID;

const loginBtn = document.querySelector('.login-button');
loginBtn.addEventListener('click', loadUserDashboard);

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function() {
  getDestinationID(allDestinations);
  getNewTripData(user, allDestinations);
  promisePost();
  // getData(loginID);
});

const estimateCostBtn = document.querySelector('.estimate-cost');
estimateCostBtn.addEventListener('click', function() {
  getDestinationID(allDestinations);
  calculateCost(user, allDestinations);
})

function promisePost() {
  let init = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTripData)
  };
  let requestedTrip = fetchHandler.fetchPostTrip(init);
  Promise.all([requestedTrip])
  .then(() => getData(loginID));
}

function getData(loginID) {
  let userData = fetchHandler.fetchSingleTraveler(loginID); //interpolate id into url
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
  // .then(() => getUserData(allTrips, allDestinations))
  .then(() => userDisplay(user))
}

// function getUserData(allTrips) {
  // user.getTravelerTrips(allTrips);
  // user.getPastTrips(allTrips);
  // user.getCurrentTrip(allTrips);
  // user.getUpcomingTrips(allTrips);
  // user.getPendingTrips(allTrips);
// }

function userDisplay(user) {
  domUpdates.displayGreeting(user);
  domUpdates.displayTotalSpent(user, allTrips, allDestinations);
  domUpdates.displayCurrentTrip(user, allTrips, allDestinations);
  domUpdates.displayUpcomingTrips(user, allTrips, allDestinations);
  domUpdates.displayPendingTrips(user, allTrips, allDestinations);
  domUpdates.displayPastTrips(user, allTrips, allDestinations);
  domUpdates.destinationDropdown(allDestinations);
}

function getDestinationID(allDestinations) {
  let location = document.querySelector('#destination-input');
  let locationValue = allDestinations.find(place => {
    return place.destination === location.value;
  });
  capturedDestinationID = locationValue.id;
}

function getNewTripData(user, allDestinations) {
  // newTripData = null;
  // captureDestinationID(allDestinations);
  let currentUserID = { userID: user.id };
  let day = document.querySelector('#date-input').value;
  let selectedDate = moment.utc((new Date(day))).format('YYYY/MM/DD');
  newTripData = {
    id: Date.now(),
    userID: currentUserID.userID,
    destinationID: capturedDestinationID,
    travelers: +document.querySelector('#travelers-input').value,
    date: selectedDate,
    duration: +document.querySelector('#duration-input').value,
    status: 'pending',
    suggestedActivities: []
  }
}

function calculateCost(user, allDestinations) {
  let costMsg = document.querySelector('.estimated-cost');
  getNewTripData(user, allDestinations);
  let potentialTrip = new Trip(newTripData);
  let estCost = potentialTrip.getCostPerTrip(allDestinations);
  let estCostPlus = estCost + (estCost * .1);
  if (potentialTrip.travelers > 0 && potentialTrip.duration > 0 && potentialTrip.date !== '') {
  costMsg.innerText = `This trip should cost $${estCostPlus} including a 10% agent fee.`
  } else {
  alert('More Information Needed');
  }
}

// function getUserInfo() {
//   let username = document.querySelector('#username').value;
//   let password = document.querySelector('#password').value;
//   let reg = /\d+/g;
//   return +username.match(reg);
// }

function loadUserDashboard() {
  let username = document.querySelector('#username').value;
  let password = document.querySelector('#password').value;
  let main = document.querySelector('.main-section');
  let login = document.querySelector('.login-section');
  let greeting = document.querySelector('.greeting')
  let reg = /\d+/g;
  loginID = +username.match(reg);
  // console.log(loginID);
  if (username === `traveler${loginID}` && password === 'travel2020') {
    getData(loginID);
    main.classList.toggle('hidden');
    login.classList.toggle('hidden');
    greeting.classList.toggle('hidden');
  } else {
    alert('access DENIED')
  }
}
  // let newTrip = new Trip(newTripData);
  // let tripCost = newTrip.getCostPerTrip(allDestinations);
  // console.log(tripCost);
  // let tripCostPlus = tripCost + (tripCost * .1);
  // if (newTrip.travelers > 0 && newTrip.duration > 0 && newTrip.date !== '') {
  //   domUpdates.displayTripCost(tripCostPlus);
  // } else {
  //   alert('Information Needed');
  // }
