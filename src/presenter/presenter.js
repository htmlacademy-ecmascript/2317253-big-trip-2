import TripSort from '../view/trip-sort-view';
import TripEventsList from '../view/trip-events-list-view';
import AddNewPoint from '../view/add-new-point-view.js';
import PointOffers from '../view/point-offers-view';
import PointDestination from '../view/point-destination-view';
import EditPoint from '../view/edit-point-view';
import Point from '../view/point-view';
import { RenderPosition, render } from '../render.js';

export default class Presenter {
  //где нужно объявлять компоненты? Тут или в init?
  tripEventsList = new TripEventsList();
  tripSort = new TripSort();
  // editPointComponent = new EditPoint({ point: this.tripPoints[0] });
  addPointComponent = new AddNewPoint();

  constructor({ tripEventsContainer, tripModel }) {
    this.tripEventsContainer = tripEventsContainer;
    this.tripModel = tripModel;
  }

  init() {
    this.tripPoints = [...this.tripModel.getTripPoints()];
    this.allTripDestinations = [...this.tripModel.getTripDestinations()];
    this.tripOffers = [...this.tripModel.getTripOffers()];
    this.editPointComponent = new EditPoint({
      point: this.tripPoints[0],
      allDestinations: this.allTripDestinations,
    });

    render(this.tripSort, this.tripEventsContainer);
    render(this.tripEventsList, this.tripEventsContainer);

    render(
      this.editPointComponent,
      this.tripEventsList.getElement(),
      RenderPosition.AFTERBEGIN
    );
    render(this.addPointComponent, this.tripEventsList.getElement());

    const editPointElement = this.editPointComponent.getElement();
    const addNewPointElement = this.addPointComponent.getElement();

    const editDetailsContainer =
      editPointElement.querySelector('.event__details');
    const addDetailsContainer =
      addNewPointElement.querySelector('.event__details');

    render(
      new PointOffers({
        point: this.tripPoints[0],
        offers: this.tripOffers,
      }),
      editDetailsContainer
    );
    render(
      new PointDestination({
        point: this.tripPoints[0],
        allDestinations: this.allTripDestinations,
      }),
      editDetailsContainer
    );

    render(
      new PointOffers({
        point: this.tripPoints[0],
        offers: this.tripOffers,
      }),
      addDetailsContainer
    );
    render(
      new PointDestination({
        point: this.tripPoints[0],
        allDestinations: this.allTripDestinations,
      }),
      addDetailsContainer
    );

    for (let i = 1; i < this.tripPoints.length; i++) {
      render(
        new Point({ point: this.tripPoints[i] }),
        this.tripEventsList.getElement()
      );
    }
  }
}
