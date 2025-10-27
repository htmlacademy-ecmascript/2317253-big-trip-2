import { TRIP_TYPES } from '../const.js';
import {
  getRandomArrayElement,
  getRandomPrice,
  getRandomIds,
} from '../utils.js';

const mockTripPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomPrice(),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: getRandomIds(1, 5, 5),
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    basePrice: getRandomPrice(),
    dateFrom: '2019-08-12T14:00:00.000Z',
    dateTo: '2019-08-13T17:30:00.000Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: getRandomIds(1, 5, 5),
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'b2c3d4e5-f6a7-8901-2345-678901bcdef0',
    basePrice: getRandomPrice(),
    dateFrom: '2019-09-01T18:00:00.000Z',
    dateTo: '2019-09-03T09:00:00.000Z',
    destination: 'a3b4c5d6-e7f8-9012-3456-789abcdef012',
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'c3d4e5f6-a7b8-9012-3456-789012cdef01',
    basePrice: getRandomPrice(),
    dateFrom: '2019-12-31T10:00:00.000Z',
    dateTo: '2020-01-01T16:00:00.000Z',
    destination: 'd7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1a2',
    isFavorite: true,
    offers: getRandomIds(1, 5, 5),
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'd4e5f6a7-b8c9-0123-4567-890123def012',
    basePrice: getRandomPrice(),
    dateFrom: '2020-01-29T17:00:00.000Z',
    dateTo: '2020-02-02T20:30:00.000Z',
    destination: 'e8f9a0b1-c2d3-e4f5-a6b7-c8d9e0f1a2b3',
    isFavorite: false,
    offers: getRandomIds(1, 5, 5),
    type: getRandomArrayElement(TRIP_TYPES),
  },
];

const mockTripDestinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    description:
      'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'img/photos/1.jpg',
        description: 'Chamonix parliament building',
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description:
      'Amsterdam, a charming city known for its canals, museums, and vibrant culture.',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'img/photos/2.jpg',
        description: 'Amsterdam canals at sunset',
      },
      {
        src: 'img/photos/3.jpg',
        description: 'Traditional Dutch architecture',
      },
    ],
  },
  {
    id: 'a3b4c5d6-e7f8-9012-3456-789abcdef012',
    description: '',
    name: 'Geneva',
    pictures: [],
  },
  {
    id: 'd7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1a2',
    description:
      'Tokyo, the bustling capital of Japan, where ancient traditions meet cutting-edge technology.',
    name: 'Tokyo',
    pictures: [
      {
        src: 'img/photos/5.jpg',
        description: 'Tokyo skyline with Mount Fuji',
      },
    ],
  },
  {
    id: 'e8f9a0b1-c2d3-e4f5-a6b7-c8d9e0f1a2b3',
    description: '',
    name: 'Barcelona',
    pictures: [
      {
        src: 'img/photos/2.jpg',
        description: 'Sagrada Familia cathedral',
      },
      {
        src: 'img/photos/4.jpg',
        description: 'Park Guell panorama',
      },
      {
        src: 'img/photos/5.jpg',
        description: 'Barcelona beach',
      },
    ],
  },
];

const mockTripOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: '1',
        title: 'Upgrade to a business class',
        price: getRandomPrice(),
      },
      {
        id: '2',
        title: 'Choose the radio station',
        price: getRandomPrice(),
      },
      {
        id: '3',
        title: 'Order Uber',
        price: getRandomPrice(),
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: '1',
        title: 'Add luggage',
        price: getRandomPrice(),
      },
      {
        id: '2',
        title: 'Switch to comfort class',
        price: getRandomPrice(),
      },
      {
        id: '3',
        title: 'Add meal',
        price: getRandomPrice(),
      },
      {
        id: '4',
        title: 'Choose seats',
        price: getRandomPrice(),
      },
      {
        id: '5',
        title: 'Travel by train',
        price: getRandomPrice(),
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: '1',
        title: 'Rent a car',
        price: getRandomPrice(),
      },
      {
        id: '2',
        title: 'With automatic transmission',
        price: getRandomPrice(),
      },
    ],
  },
  {
    type: 'check-in',
    offers: [],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: '1',
        title: 'Book tickets',
        price: getRandomPrice(),
      },
      {
        id: '2',
        title: 'Lunch in city',
        price: getRandomPrice(),
      },
      {
        id: '3',
        title: 'Hire a guide',
        price: getRandomPrice(),
      },
      {
        id: '4',
        title: 'Museum entrance',
        price: getRandomPrice(),
      },
    ],
  },
];

function getRandomTripPoints() {
  return getRandomArrayElement(mockTripPoints);
}

export { getRandomTripPoints, mockTripDestinations, mockTripOffers };
