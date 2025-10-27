import { createElement } from '../render.js';

function createPhotoTemplate(pointDestination) {
  const result = [];
  pointDestination.pictures.forEach((picture) => {
    const pictureTemplate = `<img class="event__photo" src=${picture.src} alt="Event photo">`;
    result.push(pictureTemplate);
  });
  return result.join('');
}

function createPointDestinationTemplate(point, allDestinations) {
  const pointDestination = allDestinations.find(
    (destination) => destination.id === point.destination
  );
  const template = `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">
      ${pointDestination.description}
    </p>

    <div class="event__photos-container">
      <div class="event__photos-tape">
        ${createPhotoTemplate(pointDestination)}
      </div>
    </div>
  </section>`;
  if (
    pointDestination.description === '' &&
    pointDestination.pictures.length === 0
  ) {
    return '<div></div>';
  }
  return template;
}

export default class PointDestination {
  constructor({ point, allDestinations }) {
    {
      this.point = point;
      this.allDestinations = allDestinations;
    }
  }

  getTemplate() {
    return createPointDestinationTemplate(this.point, this.allDestinations);
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
