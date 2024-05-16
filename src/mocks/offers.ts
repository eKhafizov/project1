
const hotelType = {
  APPARTMENT: 'appartment',
  HOTEL: 'hotel'
};


const locationType = [
  'Amsterdam', 'Brussels', 'Hamburg', 'Paris','Barcelona', 'Lisbon', 'Rome'];

export type OfferType = {
  premium: boolean;
  image: string;
  price: number;
  id: string;
  desciption: string;
  type: string;
  location: string;
  bookmarked: boolean;
  lat: number;
  lng: number;
};
export type OffersArrayType = OfferType[];


const offersArray : OffersArrayType = [{
  premium: true,
  image: 'img/apartment-01.jpg',
  price: 120,
  id: '72882',
  desciption: 'Beautiful &amp; luxurious apartment at great location',
  type: hotelType.APPARTMENT,
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3909553943508,
  lng: 4.85309666406198
},{
  premium: false,
  image: 'img/apartment-02.jpg',
  price: 150,
  id: '72942',
  desciption: 'Great location near city-center',
  type: hotelType.HOTEL,
  location: 'Barcelona',
  bookmarked: false,
  lat: 52.3609553943508,
  lng: 4.85309666406198
},{
  premium: true,
  image: 'img/apartment-03.jpg',
  price: 200,
  id: '79052',
  desciption: 'Luxurious designer hotel',
  type: hotelType.HOTEL,
  location: 'Brussels',
  bookmarked: true,
  lat: 52.3909553943508,
  lng: 4.929309666406198
},{
  premium: false,
  image: 'img/apartment-small-04.jpg',
  price: 50,
  id: '73382',
  desciption: 'Affordable for bums',
  type: hotelType.APPARTMENT,
  location: 'Hamburg',
  bookmarked: false,
  lat: 52.3809553943508,
  lng: 4.939309666406198
},{
  premium: false,
  image: 'img/apartment-small-03.jpg',
  price: 70,
  id: '72002',
  desciption: 'Small and cozy appartment outside of the city',
  type: hotelType.APPARTMENT,
  location: 'Brussels',
  bookmarked: false,
  lat: 52.3909553943507,
  lng: 4.929309666406197
},{
  premium: true,
  image: 'img/apartment-02.jpg',
  price: 1000,
  id: '711122',
  desciption: 'Abramovich-style villa near georgeous lake',
  type: hotelType.HOTEL,
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3809553843508,
  lng: 4.939309655406198
},{
  premium: false,
  image: 'img/apartment-small-04.jpg',
  price: 50,
  id: '789245',
  desciption: 'Small. Dirty. Cheap!',
  type: hotelType.APPARTMENT,
  location: 'Hamburg',
  bookmarked: true,
  lat: 52.3809553743508,
  lng: 4.939309665406198
},
];

export {hotelType, offersArray, locationType};

