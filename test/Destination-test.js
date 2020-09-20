import chai from 'chai';
const expect = chai.expect;

import destinationsData from './destinations-dum.js';
import Destination from '../src/Destination.js';

let destination1;

describe.only('Destination', () => {

  beforeEach(() => {
    destination1 = new Destination(destinationsData[0]);
  });

  it('should have an id', () => {
    expect(destination1.id).to.equal(1);
  });

  it('should keep track of the lodging cost per day', () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(70);
  });

  it('should keep track of the flight cost per person', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(400);
  })
})
