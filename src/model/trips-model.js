import { getRandomTripPoints } from '../mock/trip.js';

const TRIP_POINTS_COUNT = 10;

export default class TripModel {
  tripPoints = Array.from({ length: TRIP_POINTS_COUNT }, getRandomTripPoints);

  getTripPoints() {
    return this.tripPoints;
  }
}
