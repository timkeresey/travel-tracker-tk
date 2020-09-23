class Trip {
  constructor(tripsData) {
    this.id = tripsData.id;
    this.userID = tripsData.userID;
    this.destinationID = tripsData.destinationID;
    this.travelers = tripsData.travelers;
    this.date = tripsData.date;
    this.duration = tripsData.duration;
    this.status = tripsData.status;
    this.suggestedActivities = [];
  }
  getCostPerTrip(destinationsData) {
    let tripDestination = destinationsData.find(destination => {
      return this.destinationID === destination.id;
    });
    let lodgingCost = tripDestination.estimatedLodgingCostPerDay * this.duration;
    let flightCost = tripDestination.estimatedFlightCostPerPerson * this.travelers;
    return lodgingCost + flightCost;
  }

  getTripDestination(destinationsData) {
    return destinationsData.find(destination => {
      return destination.id === this.destinationID;
    })
  }
}



export default Trip;
