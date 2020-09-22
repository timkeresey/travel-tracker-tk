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
    // console.log(firstName);
    let greeting = document.querySelector('.greeting');
    greeting.innerText = `Hello, ${firstName[0]}`;
  },

  displayTotalSpent(user, tripsData, destinationsData) {
    let totalSpent = document.querySelector('.total-spent');
    let amount = user.totalAmountSpent(tripsData, destinationsData);
    totalSpent.innerText = `Total Spent on Travel This Year: $${amount}`;
  }
}

export default domUpdates;
