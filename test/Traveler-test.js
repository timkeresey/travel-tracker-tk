import chai from 'chai';
const expect = chai.expect;

import travelersData from './travelers-dum.js';
import tripsData from './trips-dum.js';
import Traveler from '../src/Traveler.js';

let traveler1;
let allTrips1;
let pastTrips1;

describe('Traveler', () => {

  beforeEach(() => {
    traveler1 = new Traveler(travelersData[1]);
    allTrips1 = [
      {
        id: 89,
        userID: 2,
        destinationID: 10,
        travelers: 5,
        date: '2020/09/17',
        duration: 13,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 100,
        userID: 2,
        destinationID: 6,
        travelers: 6,
        date: '2020/3/28',
        duration: 10,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 116,
        userID: 2,
        destinationID: 7,
        travelers: 3,
        date: '2020/04/03',
        duration: 8,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 166,
        userID: 2,
        destinationID: 7,
        travelers: 2,
        date: '2020/03/05',
        duration: 6,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 171,
        userID: 2,
        destinationID: 43,
        travelers: 1,
        date: '2020/12/27',
        duration: 18,
        status: 'pending',
        suggestedActivities: []
      },
      {
        id: 177,
        userID: 2,
        destinationID: 20,
        travelers: 6,
        date: '2020/01/29',
        duration: 8,
        status: 'approved',
        suggestedActivities: []
      }
    ];

    pastTrips1 = [
      {
        id: 100,
        userID: 2,
        destinationID: 6,
        travelers: 6,
        date: '2020/3/28',
        duration: 10,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 116,
        userID: 2,
        destinationID: 7,
        travelers: 3,
        date: '2020/04/03',
        duration: 8,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 166,
        userID: 2,
        destinationID: 7,
        travelers: 2,
        date: '2020/03/05',
        duration: 6,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 177,
        userID: 2,
        destinationID: 20,
        travelers: 6,
        date: '2020/01/29',
        duration: 8,
        status: 'approved',
        suggestedActivities: []
      }
    ];

  });

  it('should have an id', () => {
    expect(traveler1.id).to.equal(2);
  });

  it('should have a name', () => {
    expect(traveler1.name).to.equal("Rachael Vaughten");
  });

  it('should keep track of past trips', () => {
    expect(traveler1.pastTrips).to.deep.equal([]);
  });

  it('should keep track of the current trip', () => {
    expect(traveler1.currentTrip).to.deep.equal({});
  });

  it('should keep track of upcoming trips', () => {
    expect(traveler1.upcomingTrips).to.deep.equal([]);
  });

  it('should keep track of pending trips', () => {
    expect(traveler1.pendingTrips).to.deep.equal([]);
  });

  it('should return all trips of a traveler', () => {
    let totalTrips = traveler1.getTravelerTrips(tripsData);
    expect(totalTrips).to.deep.equal(allTrips1);
  });

  it('should return all past trips of a traveler', () => {
    traveler1.getPastTrips(tripsData);
    expect(traveler1.pastTrips).to.deep.equal(pastTrips1);
  });

  it('should return the current trip of a traveler', () => {
    traveler1.getCurrentTrip(tripsData);
    expect(traveler1.currentTrip).to.deep.equal(allTrips1[0]);
  })
})
