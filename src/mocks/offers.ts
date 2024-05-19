
const hotelType = {
  APPARTMENT: 'appartment',
  HOTEL: 'hotel'
};

const locationType = [
  'Amsterdam', 'Brussels', 'Hamburg', 'Paris','Barcelona', 'Lisbon', 'Rome'];

export type CommentType = {
    author: string;
    id: number;
    text: string;
    data: Date;
    rating?: number;
  };
export type CommentsType = CommentType[];

export type OfferType = {
  premium: boolean;
  host: string;
  title: string;
  image: string;
  inside?: string[];
  price: number;
  proStatus: boolean;
  id: string;
  desciption: string;
  rooms: number;
  capacity: number;
  type: string;
  location: string;
  bookmarked: boolean;
  lat: number;
  lng: number;
  comments: number[];
  photo?: string;
  rating?: number;
};
export type OffersArrayType = OfferType[];

const commentsArray : CommentsType = [
  {
    author: 'Jeremy',
    id: 1,
    text: 'Best location ever.Great host. Nice view!',
    data: new Date(),
    rating: 4.5
  },
  {
    author: 'Sandra',
    id: 2,
    text: 'Nice location. Lots of restaurants around. Nice people!',
    data: new Date(),
    rating: 4.1
  },
  {
    author: 'Frank',
    id: 3,
    text: 'Dirty rooms. Grumpy staff. Expensive!',
    data: new Date(),
    rating: 3.5
  },
  {
    author: 'Rayan',
    id: 4,
    text: 'Decent room. Great breakfast',
    data: new Date(),
    rating: 3.7
  },
  {
    author: 'Michael',
    id: 5,
    text: 'I want to stay here forever',
    data: new Date(),
    rating: 4.8
  },
  {
    author: 'Jim',
    id: 6,
    text: 'Pleasant personel. Not cheap. But i like it!',
    data: new Date(),
    rating: 4.2
  },
  {
    author: 'Eva',
    id: 7,
    text: 'Such a shithole!',
    data: new Date(),
    rating: 4.9
  },
  {
    author: 'Max',
    id: 8,
    text: 'Best location ever. Nice view! Great food!',
    data: new Date(),
    rating: 2.5
  },
  {
    author: 'Pamela',
    id: 9,
    text: 'We really enjoyed our stay in this hotel!',
    data: new Date(),
    rating: 3.3
  },
];

const offersArray : OffersArrayType = [{
  premium: true,
  title: 'Cool appartment',
  host: 'Valentina',
  inside: ['Wi-Fi', 'Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
  proStatus: true,
  image: 'img/apartment-01.jpg',
  price: 120,
  id: '72882',
  rooms: 2,
  rating: 4.5 ,
  capacity: 3,
  desciption: 'Beautiful &amp; luxurious apartment at great location',
  type: hotelType.APPARTMENT,
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3909553943508,
  lng: 4.85309666406198,
  comments: [1,3]
},{
  premium: false,
  title: 'Cool hotel',
  host: 'Anna',
  rating: 3.5 ,
  inside: ['Wi-Fi', 'Washing machine','Towels','Kitchen','Dishwasher','Cabel TV','Fridge'],
  proStatus: false,
  image: 'img/apartment-02.jpg',
  price: 150,
  id: '72942',
  rooms: 1,
  capacity: 2,
  desciption: 'Great location near city-center',
  type: hotelType.HOTEL,
  location: 'Barcelona',
  bookmarked: false,
  lat: 52.3609553943508,
  lng: 4.85309666406198,
  comments: [2,4]
},{
  premium: true,
  host: 'Grace',
  title: 'Cool place',
  rating: 4.6 ,
  inside: ['Wi-Fi', 'Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher'],
  proStatus: true,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-03.jpg',
  price: 200,
  id: '79052',
  desciption: 'Luxurious designer hotel',
  type: hotelType.HOTEL,
  location: 'Brussels',
  bookmarked: true,
  lat: 52.3909553943508,
  lng: 4.929309666406198,
  comments: [3,5]
},{
  premium: false,
  host: 'Maria',
  title: 'Bad appartment',
  rating: 2.3 ,
  inside: ['Wi-Fi', 'Towels','Heating','Coffee machine','Dishwasher','Cabel TV','Fridge'],
  proStatus: false,
  image: 'img/apartment-small-04.jpg',
  price: 50,
  rooms: 1,
  capacity: 10,
  id: '73382',
  desciption: 'Affordable for bums',
  type: hotelType.APPARTMENT,
  location: 'Hamburg',
  bookmarked: false,
  lat: 52.3809553943508,
  lng: 4.939309666406198,
  comments: [4,6]
},{
  premium: false,
  host: 'Adele',
  rating: 3.3 ,
  title: 'Bad hotel',
  inside: ['Wi-Fi', 'Washing machine','Towels','Heating','Coffee machine'],
  proStatus: true,
  rooms: 1,
  capacity: 3,
  image: 'img/apartment-small-03.jpg',
  price: 70,
  id: '72002',
  desciption: 'Small and cozy appartment outside of the city',
  type: hotelType.APPARTMENT,
  location: 'Brussels',
  bookmarked: false,
  lat: 52.3909553943507,
  lng: 4.929309666406197,
  comments: [5,7]
},{
  premium: true,
  host: 'Anna',
  rating: 4.99 ,
  title: 'Nice place',
  inside: ['Wi-Fi', 'Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher','Cabel TV','Fridge'],
  proStatus: false,
  image: 'img/apartment-02.jpg',
  price: 1000,
  rooms: 5,
  capacity: 15,
  id: '711122',
  desciption: 'Abramovich-style villa near georgeous lake',
  type: hotelType.HOTEL,
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3809553843508,
  lng: 4.939309655406198,
  comments: [6,8]
},{
  premium: false,
  host: 'Mildred',
  title: 'Cool place',
  rating: 4.4 ,
  inside: ['Wi-Fi'],
  proStatus: true,
  image: 'img/apartment-small-04.jpg',
  price: 50,
  rooms: 1,
  capacity: 2,
  id: '789245',
  desciption: 'Small. Dirty. Cheap!',
  type: hotelType.APPARTMENT,
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3809553743508,
  lng: 4.939309665406198,
  comments: [7,9]
},
];

export {hotelType, offersArray, locationType, commentsArray};

