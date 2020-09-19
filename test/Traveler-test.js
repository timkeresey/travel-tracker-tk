import chai from 'chai';
const expect = chai.expect;

import travelersData from './travelers-dum.js';
import Traveler from '../src/traveler.js';

let traveler1;

describe('Traveler', () => {
  let traveler1;

  beforeEach(() => {
    traveler1 = new Traveler(travelersData[1]);
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
    expect(traveler1.currentTrip).to.deep.equal([]);
  });

  it('should keep track of upcoming trips', () => {
    expect(traveler1.upcomingTrips).to.deep.equal([]);
  });

  it('should keep track of pending trips', () => {
    expect(traveler1.pendingTrips).to.deep.equal([]);
  });
})
