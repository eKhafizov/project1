
const hotelType = {
  APPARTMENT: 'appartment',
  HOTEL: 'hotel'
};

export type OfferType = {
  premium: boolean;
  //image: string;
  //price: number;
  //id: number;
  //desciption: string;
  //type: string;
};
export type OffersArrayType = OfferType[];

const offersArray : OffersArrayType = [{
  premium: true,
  //image: 'img/apartment-01.jpg',
  //price: 120,
  //id: 72882,
  //desciption: 'Beautiful &amp; luxurious apartment at great location',
//  type: hotelType.APPARTMENT,
},{
  premium: false,
//  image: 'img/apartment-02.jpg',
//  price: 150,
//  id: 72942,
//  desciption: 'Great location near city-center',
//  type: hotelType.HOTEL,
},{
  premium: true,
//  image: 'img/apartment-03.jpg',
//  price: 200,
//  id: 79052,
//  desciption: 'Luxurious designer hotel',
//  type: hotelType.HOTEL,
},{
  premium: false,
//  image: 'img/apartment-small-04.jpg',
//  price: 50,
//  id: 73382,
//  desciption: 'Affordable for bums',
//  type: hotelType.APPARTMENT,
},{
  premium: false,
//  image: 'img/apartment-small-03.jpg',
//  price: 70,
//  id: 72002,
//  desciption: 'Small and cozy appartment outside of the city',
//  type: hotelType.APPARTMENT,
},{
  premium: true,
//  image: 'img/apartment-02.jpg',
//  price: 1000,
//  id: 711122,
//  desciption: 'Abramovich-style villa near georgeous lake',
//  type: hotelType.HOTEL,
},{
  premium: false,
//  image: 'img/apartment-small-04.jpg',
//  price: 50,
//  id: 789245,
//  desciption: 'Small. Dirty. Cheap!',
//  type: hotelType.APPARTMENT,
},
];

export {hotelType, offersArray};

