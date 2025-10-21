import TripSort from '../view/trip-sort-view';
import TripEventsList from '../view/trip-events-list-view';
import AddNewPoint from '../view/add-new-point-view.js';
import PointOffers from '../view/point-offers-view';
import PointDestination from '../view/point-destination-view';
import EditPoint from '../view/edit-point-view';
import Point from '../view/point-view';
import { RenderPosition, render } from '../render.js';

export default class Presenter {
  constructor({ tripEventsContainer, tripModel }) {
    this.tripEventsContainer = tripEventsContainer;
    this.tripModel = tripModel;
  }

  init() {
    this.tripPoints = [...this.tripModel.getTripPoints()];

    render(new TripSort(), this.tripEventsContainer);
    render(new TripEventsList(), this.tripEventsContainer);

    const tripEventsList =
      this.tripEventsContainer.querySelector('.trip-events__list');
    const editPointComponent = new EditPoint();
    const addPointComponent = new AddNewPoint();

    render(editPointComponent, tripEventsList, RenderPosition.AFTERBEGIN);
    render(addPointComponent, tripEventsList);

    const editPointElement = editPointComponent.getElement();
    const addNewPointElement = addPointComponent.getElement();

    const editDetailsContainer =
      editPointElement.querySelector('.event__details');
    const addDetailsContainer =
      addNewPointElement.querySelector('.event__details');

    render(new PointOffers(), editDetailsContainer);
    render(new PointDestination(), editDetailsContainer);

    render(new PointOffers(), addDetailsContainer);
    render(new PointDestination(), addDetailsContainer);

    for (let i = 0; i < this.tripPoints.length; i++) {
      render(new Point({ point: this.tripPoints[i] }), tripEventsList);
    }
  }
}
