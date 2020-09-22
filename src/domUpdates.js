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
    greeting.innerText = `Hello, ${firstName}`;
  }
}

export default domUpdates;
