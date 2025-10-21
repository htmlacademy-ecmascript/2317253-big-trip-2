import { TRIP_TYPES } from '../const.js';
import { getRandomArrayElement, getRandomPrice } from '../utils.js';

const mockTripPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomPrice(),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offers: ['b4c3e4e6-9053-42ce-b747-e281314baa31'],
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    basePrice: getRandomPrice(),
    dateFrom: '2019-07-11T14:00:00.000Z',
    dateTo: '2019-07-11T17:30:00.000Z',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    isFavorite: true,
    offers: [
      'f1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
      'b3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8',
    ],
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'b2c3d4e5-f6a7-8901-2345-678901bcdef0',
    basePrice: getRandomPrice(),
    dateFrom: '2019-07-11T18:00:00.000Z',
    dateTo: '2019-07-12T09:00:00.000Z',
    destination: 'a3b4c5d6-e7f8-9012-3456-789abcdef012',
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'c3d4e5f6-a7b8-9012-3456-789012cdef01',
    basePrice: getRandomPrice(),
    dateFrom: '2019-07-12T10:00:00.000Z',
    dateTo: '2019-07-12T16:00:00.000Z',
    destination: 'd7e8f9a0-b1c2-d3e4-f5a6-b7c8d9e0f1a2',
    isFavorite: true,
    offers: [
      'a8b9c0d1-e2f3-a4b5-c6d7-e8f9a0b1c2d3',
      'c0d1e2f3-a4b5-c6d7-e8f9-a0b1c2d3e4f5',
      'd1e2f3a4-b5c6-d7e8-f9a0-b1c2d3e4f5a6',
    ],
    type: getRandomArrayElement(TRIP_TYPES),
  },
  {
    id: 'd4e5f6a7-b8c9-0123-4567-890123def012',
    basePrice: getRandomPrice(),
    dateFrom: '2019-07-12T17:00:00.000Z',
    dateTo: '2019-07-12T20:30:00.000Z',
    destination: 'e8f9a0b1-c2d3-e4f5-a6b7-c8d9e0f1a2b3',
    isFavorite: false,
    offers: ['e6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1'],
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
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
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
        src: 'http://picsum.photos/300/200?r=0.1234567890123456',
        description: 'Amsterdam canals at sunset',
      },
      {
        src: 'http://picsum.photos/300/200?r=0.9876543210987654',
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
        src: 'http://picsum.photos/300/200?r=0.5555555555555555',
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
        src: 'http://picsum.photos/300/200?r=0.3333333333333333',
        description: 'Sagrada Familia cathedral',
      },
      {
        src: 'http://picsum.photos/300/200?r=0.7777777777777777',
        description: 'Park Guell panorama',
      },
      {
        src: 'http://picsum.photos/300/200?r=0.2222222222222222',
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
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        title: 'Upgrade to a business class',
        price: getRandomPrice(),
      },
      {
        id: 'a1f2b3c4-5678-90ab-cdef-1234567890ab',
        title: 'Choose the radio station',
        price: getRandomPrice(),
      },
      {
        id: 'c5d6e7f8-9012-34ab-cdef-5678901234cd',
        title: 'Order Uber',
        price: getRandomPrice(),
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'f1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
        title: 'Add luggage',
        price: getRandomPrice(),
      },
      {
        id: 'a2b3c4d5-e6f7-a8b9-c0d1-e2f3a4b5c6d7',
        title: 'Switch to comfort class',
        price: getRandomPrice(),
      },
      {
        id: 'b3c4d5e6-f7a8-b9c0-d1e2-f3a4b5c6d7e8',
        title: 'Add meal',
        price: getRandomPrice(),
      },
      {
        id: 'c4d5e6f7-a8b9-c0d1-e2f3-a4b5c6d7e8f9',
        title: 'Choose seats',
        price: getRandomPrice(),
      },
      {
        id: 'd5e6f7a8-b9c0-d1e2-f3a4-b5c6d7e8f9a0',
        title: 'Travel by train',
        price: getRandomPrice(),
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'e6f7a8b9-c0d1-e2f3-a4b5-c6d7e8f9a0b1',
        title: 'Rent a car',
        price: getRandomPrice(),
      },
      {
        id: 'f7a8b9c0-d1e2-f3a4-b5c6-d7e8f9a0b1c2',
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
        id: 'a8b9c0d1-e2f3-a4b5-c6d7-e8f9a0b1c2d3',
        title: 'Book tickets',
        price: getRandomPrice(),
      },
      {
        id: 'b9c0d1e2-f3a4-b5c6-d7e8-f9a0b1c2d3e4',
        title: 'Lunch in city',
        price: getRandomPrice(),
      },
      {
        id: 'c0d1e2f3-a4b5-c6d7-e8f9-a0b1c2d3e4f5',
        title: 'Hire a guide',
        price: getRandomPrice(),
      },
      {
        id: 'd1e2f3a4-b5c6-d7e8-f9a0-b1c2d3e4f5a6',
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
