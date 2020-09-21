import moment from 'moment';
import tripsData from '../test/travelers-dum.js';
import destinationsData from '../test/destinations-dum.js';
import Trip from './Trip.js';

////date math
// moment('2016-03-12 13:00:00').add(1, 'day').format('LLL')
////"March 13, 2016 1:00 PM"


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

  getPastTrips(tripsData) {
    let allTrips = this.getTravelerTrips(tripsData);
    this.pastTrips = allTrips.filter(trip => {
      let durationDate = moment(new Date(trip.date)).add(trip.duration, 'day');
      return moment(durationDate).isBefore(moment());
    })
  }

  getCurrentTrip(tripsData) {
    let allTrips = this.getTravelerTrips(tripsData);
    this.currentTrip = allTrips.find(trip => {
      let durationDate = moment(new Date(trip.date)).add(trip.duration, 'day');
      return moment(new Date(trip.date)).isBefore(moment()) && moment(durationDate).isAfter(moment());
    })
  }

  getUpcomingTrips(tripsData) {
    let allTrips = this.getTravelerTrips(tripsData);
    this.upcomingTrips = allTrips.filter(trip => {
      return moment(new Date(trip.date)).isAfter(moment()) && trip.status === 'approved';
    })
  }

  getPendingTrips(tripsData) {
    let allTrips = this.getTravelerTrips(tripsData);
    this.pendingTrips = allTrips.filter(trip => {
      return trip.status === 'pending';
    })
  }


  totalAmountSpent(destinationsData) {
    let neededTrips = [this.pastTrips, this.currentTrip].flat();
    let totalCost = neededTrips.reduce((total, trip) => {
      if(trip.date.includes('2020')) {
        return total += trip.getCostPerTrip(destinationsData);
      }
    }, 0);
    return totalCost + (totalCost * .1);
  }

}

export default Traveler;
