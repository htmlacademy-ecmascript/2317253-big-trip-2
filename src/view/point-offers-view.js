import { createElement } from '../render.js';

function createOfferTemplate(point, allOffersOfPoint) {
  const result = [];
  allOffersOfPoint.forEach((offer) => {
    const isOfferChecked = point.offers.includes(offer.id) ? 'checked' : '';
    const offerTemplate = `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${isOfferChecked}>
      <label class="event__offer-label" for="event-offer-${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`;
    result.push(offerTemplate);
  });
  return result.join('');
}

function createPointOffersTemplate(point, allOffers) {
  const allOffersOfPoint = allOffers.find(
    (offer) => offer.type === point.type
  ).offers;
  if (allOffersOfPoint.length === 0) {
    return '<div></div>';
  }
  return `<section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                      ${createOfferTemplate(point, allOffersOfPoint)}
                    </div>
                  </section>`;
}

export default class PointOffers {
  constructor({ point, offers }) {
    this.point = point;
    this.offers = offers;
  }

  getTemplate() {
    return createPointOffersTemplate(this.point, this.offers);
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
