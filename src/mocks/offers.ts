import { Offer } from '../types/offer';


export const offers: Offer[] = [
  {
    id: '0',
    image: 'img/apartment-01.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    type: 'Apartment',
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },

  {
    id: '1',
    image: 'img/room.jpg',
    city: {
      name: 'Amsterdam',
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 8
      }
    },
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: false,
    type: 'Room',
    rating: 3,
    bedrooms: 1,
    maxAdults: 2,
    price: 80,
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },

  {
    id: '2',
    image: 'img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 8
      }
    },
    title: 'Canal View Prinsengracht',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: false,
    type: 'Apartment',
    rating: 4,
    bedrooms: 3,
    maxAdults: 4,
    price: 132,
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },

  {
    id: '3',
    image: 'img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
      'location': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
        'zoom': 8
      }
    },
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: false,
    type: 'Apartment',
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 180,
    owner: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      isPro: true
    },
    isFavorite: true,
  },
];
