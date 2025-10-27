import {
  getRandomTripPoints,
  mockTripDestinations,
  mockTripOffers,
} from '../mock/trip.js';

const TRIP_POINTS_COUNT = 10;

export default class TripModel {
  tripPoints = Array.from({ length: TRIP_POINTS_COUNT }, getRandomTripPoints);
  tripDestinations = mockTripDestinations;
  tripOffers = mockTripOffers;

  getTripPoints() {
    return this.tripPoints;
  }

  getTripDestinations() {
    return this.tripDestinations;
  }

  getTripOffers() {
    return this.tripOffers;
  }
}
