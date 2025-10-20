import TripFilters from './view/trip-filters-view';
import TripInfo from './view/trip-info-view';
import { RenderPosition, render } from './render.js';
import Presenter from './presenter/presenter.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripMain = document.querySelector('.trip-main');
const tripEvents = document.querySelector('.trip-events');

render(new TripFilters(), tripControlsFilters);
render(new TripInfo(), tripMain, RenderPosition.AFTERBEGIN);

const presenter = new Presenter({ tripEventsContainer: tripEvents });

presenter.init();
