import { createElement } from '../render.js';
import {
  formatDate,
  capitalizeFirst,
  getDestination,
  formatTime,
  getTimeDifference,
} from '../utils.js';
import { mockTripDestinations, mockTripOffers } from '../mock/trip.js';

function createPointOffersTemplate(pointOffers, pointType, allOffers) {
  const allOffersOfPoint = allOffers.find(
    (offer) => offer.type === pointType
  ).offers;
  const result = [];
  pointOffers.forEach((offerId) => {
    const offer = allOffersOfPoint.find((item) => item.id === offerId);
    if (offer) {
      const offerTemplate = `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
      </li>`;
      result.push(offerTemplate);
    }
  });
  return result.join('');
}

function createPointTemplate(point) {
  console.log('point', point);
  const { type, destination, dateFrom, dateTo, basePrice, offers, isFavorite } =
    point;
  const formattedDate = formatDate(dateFrom);
  const typOfTrip = capitalizeFirst(type);
  const destOfPoint = getDestination(destination, mockTripDestinations);
  const formattedStartTime = formatTime(dateFrom);
  const formattedEndTime = formatTime(dateTo);
  const timeDifference = getTimeDifference(dateFrom, dateTo);

  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${dateFrom}">${formattedDate}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${typOfTrip}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${typOfTrip} ${destOfPoint.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFrom}">${formattedStartTime}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${dateTo}">${formattedEndTime}</time>
                  </p>
                  <p class="event__duration">${timeDifference}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${createPointOffersTemplate(offers, type, mockTripOffers)}
                </ul>
                <button class="event__favorite-btn ${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

export default class Point {
  constructor({ point }) {
    this.point = point;
  }

  getTemplate() {
    return createPointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
