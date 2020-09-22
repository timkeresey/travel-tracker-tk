const domUpdates = {
  user: null,
  allTravelers: null,
  allTrips: null,
  allDestinations: null,

  createData(user, allTravelers, allTrips, allDestinations) {
    this.user = user;
    this.allTravelers = allTravelers;
    this.allTrips = allTrips;
    this.allDestinations = allDestinations;
  },

  displayGreeting(user) {
    let firstName = user.name.split(' ');
    let greeting = document.querySelector('.greeting');
    greeting.innerText = `Hello, ${firstName[0]}`;
  },

  constructCard(trip, destinationsData) {
    let dest = trip.getTripDestination(destinationsData);
    return `<section class="card">
      <header>
        <img src="${dest.image}" alt="${dest.alt}">
      </header>
      <p>Destination: ${dest.destination}</p>
      <p>Date: ${trip.date}</p>
      <p>Duration: ${trip.duration}</p>
    </section>`
  },

  displayTotalSpent(user, tripsData, destinationsData) {
    let totalSpent = document.querySelector('.total-spent');
    let amount = user.totalAmountSpent(tripsData, destinationsData);
    totalSpent.innerText = `Total Spent on Travel This Year: $${amount}`;
  },

  displayCurrentTrip(user, tripsData, destinationsData) {
    let currentTripSection = document.querySelector('.current');
    // console.log(user);
    user.getCurrentTrip(tripsData);
    if(user.currentTrip) {
      user.currentTrip.forEach(trip => {
        let card = this.constructCard(trip, destinationsData);
        currentTripSection.innerHTML = card;
      });
    } else {
      currentTripSection.innerText = 'Book a Trip!'
    }
  },

  displayUpcomingTrips(user, tripsData, destinationsData) {
    let upcomingTripSection = document.querySelector('.upcoming');
    user.getUpcomingTrips(tripsData);
    if(user.upcomingTrips) {
      let cards = user.upcomingTrips.map(trip => {
        return this.constructCard(trip, destinationsData);
      });
      // console.log(cards);
      upcomingTripSection.innerHTML = cards;
    } else {
      upcomingTripSection.innerText = 'Book a Trip!'
    }
  },

  displayPendingTrips(user, tripsData, destinationsData) {
    let pendingTripSection = document.querySelector('.pending');
    user.getPendingTrips(tripsData);
    if(user.pendingTrips) {
      let cards = user.pendingTrips.map(trip => {
        return this.constructCard(trip, destinationsData);
      });
      pendingTripSection.innerHTML = cards;
    } else {
      upcomingTripSection.innerText = 'Book a Trip!'
    }
  },
  
}

export default domUpdates;
