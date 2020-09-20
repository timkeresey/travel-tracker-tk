import chai from 'chai';
const expect = chai.expect;

import destinationsData from './destinations-dum.js';
import tripsData from './trips-dum.js';
import Trip from '../src/Trip.js';

let trip1;

describe('Trip', () => {
  beforeEach(() => {
    trip1 = new Trip(tripsData[0]);
  });

  it('should have an id', () => {
    expect(trip1.id).to.equal(1);
  });

  it('should have a user id', () => {
    expect(trip1.userID).to.equal(44);
  });

  it('should have an destination id', () => {
    expect(trip1.destinationID).to.equal(49);
  });

  it('should keep track of the number of travelers', () => {
    expect(trip1.travelers).to.equal(1);
  });

  it('should have a date', () => {
    expect(trip1.date).to.equal('2019/09/16');
  });

  it('should keep track of the duration', () => {
    expect(trip1.duration).to.equal(8);
  });

  it('should have a status', () => {
    expect(trip1.status).to.equal('approved');
  });

  it('should have suggested activities with a default value of an empty array', () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
  });

  it('should determine the cost of a trip', () => {
    let tripCost = trip1.getCostPerTrip(destinationsData);
    expect(tripCost).to.be.equal(5290);
  })
})
