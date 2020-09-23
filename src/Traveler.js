import moment from 'moment';
import tripsData from '../test/travelers-dum.js';
import destinationsData from '../test/destinations-dum.js';
import Trip from './Trip.js';

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


  totalAmountSpent(tripsData, destinationsData) {
    let allTrips = this.getTravelerTrips(tripsData);
    let totalCost = allTrips.reduce((total, trip) => {
      if(moment(new Date(trip.date)).isBefore(moment()) && trip.date.includes('2020')) {
        total += trip.getCostPerTrip(destinationsData);
      }
      return total;
    }, 0);
    return totalCost + (totalCost * .1);
  }

}

export default Traveler;
