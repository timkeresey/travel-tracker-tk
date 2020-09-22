import chai from 'chai';
const expect = chai.expect;

import destinationsData from './destinations-dum.js';
import Destination from '../src/Destination.js';

let destination1;

describe('Destination', () => {

  beforeEach(() => {
    destination1 = new Destination(destinationsData[0]);
  });

  it('should have an id', () => {
    expect(destination1.id).to.equal(1);
  });

  it('should have a destination', () => {
    expect(destination1.destination).to.equal("Lima, Peru");
  });

  it('should keep track of the lodging cost per day', () => {
    expect(destination1.estimatedLodgingCostPerDay).to.equal(70);
  });

  it('should keep track of the flight cost per person', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.equal(400);
  });

  it('should have an image source', () => {
    expect(destination1.image).to.equal("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  });

  it('should have an alt tag', () => {
    expect(destination1.alt).to.equal("overview of city buildings with a clear sky");
  });
})
