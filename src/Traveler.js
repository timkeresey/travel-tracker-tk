import moment from 'moment';
import tripsData from '../test/travelers-dum.js';

class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.pastTrips = [];
    this.currentTrip = [];
    this.upcomingTrips = [];
    this.pendingTrips = [];
  }

  getTravelerTrips(tripsData) {
    return tripsData.filter(trip => {
      return this.id === trip.userID;
    })
  }

  
}


export default Traveler;
