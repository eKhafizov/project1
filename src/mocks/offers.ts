
const hotelType = {
  APPARTMENT: 'appartment',
  HOTEL: 'hotel'
};

const locations = [
  'Amsterdam', 'Brussels', 'Hamburg', 'Paris','Barcelona', 'Lisbon'];

export type CommentType = {
    author: string;
    id: number;
    text: string;
    data: Date;
    rating: number;
  };
export type CommentsType = CommentType[];

export type OfferType = {
  bedrooms: number;
  city: {
    name: string;
    location: {latitude:number;longitude: number;zoom:number};};
  description: string;
  goods: string[];
  host: {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;};
  id: number; //а был number но пишеь ошибку
  images: string[];
  isFavorite: false;
  isPremium: false;
  location: {latitude: number; longitude: number; zoom: number};
  maxAdults: 2;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
/*
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
  rating: number;
};
*/
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
/*
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
  lat: 52.360955394,
  lng: 4.85309666406,
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
  lat: 52.3909553943,
  lng: 4.929309666406,
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
  lat: 52.3809553943,
  lng: 4.939309666406,
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
  lat: 52.3909553943,
  lng: 4.929309666406,
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
  lat: 52.3909553943508,
  lng: 4.85309666406198,
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
  lat: 52.3809553743,
  lng: 4.939309665406,
  comments: [7,9]
},
{
  premium: true,
  host: 'Grace',
  title: 'Cool place',
  rating: 4.6,
  inside: ['Wi-Fi', 'Washing machine','Towels','Heating','Coffee machine','Baby seat','Kitchen','Dishwasher'],
  proStatus: true,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-03.jpg',
  price: 200,
  id: '79052',
  desciption: 'Luxurious designer hotel',
  type: 'HOTEL',
  location: 'Brussels',
  bookmarked: true,
  lat: 52.3909553943,
  lng: 4.929309666406,
  comments: [3, 5]
},
{
  premium: false,
  host: 'John',
  title: 'Cozy flat',
  rating: 4.2,
  inside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen'],
  proStatus: false,
  rooms: 2,
  capacity: 4,
  image: 'img/apartment-01.jpg',
  price: 150,
  id: '79053',
  desciption: 'A cozy flat in the city center',
  type: 'APARTMENT',
  location: 'Amsterdam',
  bookmarked: false,
  lat: 52.37403,
  lng: 4.88969,
  comments: [1, 2, 3]
},
{
  premium: true,
  host: 'Alice',
  title: 'Modern apartment',
  rating: 4.8,
  inside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen', 'Dishwasher'],
  proStatus: true,
  rooms: 3,
  capacity: 6,
  image: 'img/apartment-02.jpg',
  price: 300,
  id: '79054',
  desciption: 'Modern apartment with all amenities',
  type: 'HOTEL',
  location: 'Paris',
  bookmarked: true,
  lat: 48.856613,
  lng: 2.352222,
  comments: [4, 5, 6]
},
{
  premium: false,
  host: 'Bob',
  title: 'Charming house',
  rating: 3.9,
  inside: ['Wi-Fi', 'Heating', 'Kitchen'],
  proStatus: false,
  rooms: 2,
  capacity: 3,
  image: 'img/apartment-04.jpg',
  price: 120,
  id: '79055',
  desciption: 'Charming house in a quiet area',
  type: 'HOUSE',
  location: 'Hamburg',
  bookmarked: false,
  lat: 53.551086,
  lng: 9.993682,
  comments: [2, 3, 4]
},
{
  premium: true,
  host: 'Charlie',
  title: 'Luxury villa',
  rating: 5.0,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher'],
  proStatus: true,
  rooms: 4,
  capacity: 8,
  image: 'img/apartment-05.jpg',
  price: 500,
  id: '79056',
  desciption: 'A luxurious villa with a private pool',
  type: 'VILLA',
  location: 'Barcelona',
  bookmarked: true,
  lat: 41.385064,
  lng: 2.173404,
  comments: [5, 6, 7]
},
{
  premium: false,
  host: 'Dana',
  title: 'Budget room',
  rating: 3.5,
  inside: ['Wi-Fi', 'Towels', 'Heating'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-06.jpg',
  price: 80,
  id: '79057',
  desciption: 'A budget-friendly room for short stays',
  type: 'ROOM',
  location: 'Lisbon',
  bookmarked: false,
  lat: 38.722252,
  lng: -9.139337,
  comments: [1, 2]
},
{
  premium: true,
  host: 'Emma',
  title: 'Spacious loft',
  rating: 4.7,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen'],
  proStatus: true,
  rooms: 2,
  capacity: 4,
  image: 'img/apartment-07.jpg',
  price: 250,
  id: '79058',
  desciption: 'A spacious loft with modern amenities',
  type: 'LOFT',
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3676,
  lng: 4.9041,
  comments: [3, 4, 5]
},
{
  premium: false,
  host: 'Frank',
  title: 'Quiet studio',
  rating: 3.8,
  inside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-08.jpg',
  price: 110,
  id: '79059',
  desciption: 'A quiet studio near the park',
  type: 'STUDIO',
  location: 'Brussels',
  bookmarked: false,
  lat: 50.8503,
  lng: 4.3517,
  comments: [1, 3, 4]
},
{
  premium: true,
  host: 'George',
  title: 'Elegant townhouse',
  rating: 4.9,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen', 'Dishwasher'],
  proStatus: true,
  rooms: 3,
  capacity: 6,
  image: 'img/apartment-09.jpg',
  price: 350,
  id: '79060',
  desciption: 'An elegant townhouse with garden',
  type: 'TOWNHOUSE',
  location: 'Paris',
  bookmarked: true,
  lat: 48.8566,
  lng: 2.3522,
  comments: [2, 4, 6]
},
{
  premium: false,
  host: 'Hannah',
  title: 'Simple flat',
  rating: 3.6,
  inside: ['Wi-Fi', 'Towels', 'Heating'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-10.jpg',
  price: 90,
  id: '79061',
  desciption: 'A simple and affordable flat',
  type: 'FLAT',
  location: 'Hamburg',
  bookmarked: false,
  lat: 53.5511,
  lng: 9.9937,
  comments: [1, 2, 3]
},
{
  premium: true,
  host: 'Ivy',
  title: 'Luxury penthouse',
  rating: 5.0,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher'],
  proStatus: true,
  rooms: 3,
  capacity: 6,
  image: 'img/apartment-11.jpg',
  price: 600,
  id: '79062',
  desciption: 'A luxury penthouse with a city view',
  type: 'PENTHOUSE',
  location: 'Barcelona',
  bookmarked: true,
  lat: 41.3851,
  lng: 2.1734,
  comments: [5, 6, 7]
},
{
  premium: false,
  host: 'Jack',
  title: 'Studio near beach',
  rating: 4.0,
  inside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-12.jpg',
  price: 130,
  id: '79063',
  desciption: 'A studio apartment near the beach',
  type: 'STUDIO',
  location: 'Lisbon',
  bookmarked: false,
  lat: 38.7223,
  lng: -9.1393,
  comments: [2, 3, 4]
},
{
  premium: true,
  host: 'Karen',
  title: 'Chic condo',
  rating: 4.5,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen'],
  proStatus: true,
  rooms: 2,
  capacity: 4,
  image: 'img/apartment-13.jpg',
  price: 280,
  id: '79064',
  desciption: 'A chic condo in a trendy neighborhood',
  type: 'CONDO',
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3676,
  lng: 4.9041,
  comments: [3, 4, 5]
},
{
  premium: false,
  host: 'Liam',
  title: 'Comfortable room',
  rating: 3.7,
  inside: ['Wi-Fi', 'Towels', 'Heating'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-14.jpg',
  price: 85,
  id: '79065',
  desciption: 'A comfortable room in a shared house',
  type: 'ROOM',
  location: 'Brussels',
  bookmarked: false,
  lat: 50.8503,
  lng: 4.3517,
  comments: [1, 2, 3]
},
{
  premium: true,
  host: 'Mona',
  title: 'Stylish flat',
  rating: 4.6,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen'],
  proStatus: true,
  rooms: 2,
  capacity: 4,
  image: 'img/apartment-15.jpg',
  price: 230,
  id: '79066',
  desciption: 'A stylish flat in the city center',
  type: 'FLAT',
  location: 'Paris',
  bookmarked: true,
  lat: 48.8566,
  lng: 2.3522,
  comments: [3, 4, 5]
},
{
  premium: false,
  host: 'Nathan',
  title: 'Economy room',
  rating: 3.4,
  inside: ['Wi-Fi', 'Towels', 'Heating'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-16.jpg',
  price: 70,
  id: '79067',
  desciption: 'An economy room for travelers on a budget',
  type: 'ROOM',
  location: 'Hamburg',
  bookmarked: false,
  lat: 53.5511,
  lng: 9.9937,
  comments: [1, 2]
},
{
  premium: true,
  host: 'Olivia',
  title: 'Luxury studio',
  rating: 4.9,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher'],
  proStatus: true,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-17.jpg',
  price: 260,
  id: '79068',
  desciption: 'A luxury studio with a great view',
  type: 'STUDIO',
  location: 'Barcelona',
  bookmarked: true,
  lat: 41.3851,
  lng: 2.1734,
  comments: [4, 5, 6]
},
{
  premium: false,
  host: 'Paul',
  title: 'Simple house',
  rating: 3.8,
  inside: ['Wi-Fi', 'Heating', 'Kitchen'],
  proStatus: false,
  rooms: 2,
  capacity: 4,
  image: 'img/apartment-18.jpg',
  price: 140,
  id: '79069',
  desciption: 'A simple house in a quiet area',
  type: 'HOUSE',
  location: 'Lisbon',
  bookmarked: false,
  lat: 38.7223,
  lng: -9.1393,
  comments: [2, 3]
},
{
  premium: true,
  host: 'Quinn',
  title: 'Modern loft',
  rating: 4.7,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen'],
  proStatus: true,
  rooms: 2,
  capacity: 4,
  image: 'img/apartment-19.jpg',
  price: 270,
  id: '79070',
  desciption: 'A modern loft with an open floor plan',
  type: 'LOFT',
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3676,
  lng: 4.9041,
  comments: [3, 4, 5]
},
{
  premium: false,
  host: 'Rachel',
  title: 'Basic flat',
  rating: 3.5,
  inside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-20.jpg',
  price: 100,
  id: '79071',
  desciption: 'A basic flat with all essentials',
  type: 'FLAT',
  location: 'Brussels',
  bookmarked: false,
  lat: 50.8503,
  lng: 4.3517,
  comments: [1, 2, 3]
},
{
  premium: true,
  host: 'Sam',
  title: 'Deluxe villa',
  rating: 4.9,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher'],
  proStatus: true,
  rooms: 4,
  capacity: 8,
  image: 'img/apartment-21.jpg',
  price: 550,
  id: '79072',
  desciption: 'A deluxe villa with a private garden',
  type: 'VILLA',
  location: 'Paris',
  bookmarked: true,
  lat: 48.8566,
  lng: 2.3522,
  comments: [5, 6, 7]
},
{
  premium: false,
  host: 'Tom',
  title: 'Shared room',
  rating: 3.3,
  inside: ['Wi-Fi', 'Towels', 'Heating'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-22.jpg',
  price: 65,
  id: '79073',
  desciption: 'A shared room in a shared apartment',
  type: 'ROOM',
  location: 'Hamburg',
  bookmarked: false,
  lat: 53.5511,
  lng: 9.9937,
  comments: [1, 2]
},
{
  premium: true,
  host: 'Uma',
  title: 'Designer apartment',
  rating: 4.8,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen', 'Dishwasher'],
  proStatus: true,
  rooms: 3,
  capacity: 6,
  image: 'img/apartment-23.jpg',
  price: 320,
  id: '79074',
  desciption: 'A designer apartment with modern decor',
  type: 'APARTMENT',
  location: 'Barcelona',
  bookmarked: true,
  lat: 41.3851,
  lng: 2.1734,
  comments: [4, 5, 6]
},
{
  premium: false,
  host: 'Vera',
  title: 'Economy studio',
  rating: 3.6,
  inside: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-24.jpg',
  price: 90,
  id: '79075',
  desciption: 'An economy studio with all basics',
  type: 'STUDIO',
  location: 'Lisbon',
  bookmarked: false,
  lat: 38.7223,
  lng: -9.1393,
  comments: [1, 2, 3]
},
{
  premium: true,
  host: 'Wendy',
  title: 'Elegant loft',
  rating: 4.7,
  inside: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Kitchen'],
  proStatus: true,
  rooms: 2,
  capacity: 4,
  image: 'img/apartment-25.jpg',
  price: 280,
  id: '79076',
  desciption: 'An elegant loft with high ceilings',
  type: 'LOFT',
  location: 'Amsterdam',
  bookmarked: true,
  lat: 52.3676,
  lng: 4.9041,
  comments: [3, 4, 5]
},
{
  premium: false,
  host: 'Xander',
  title: 'Basic room',
  rating: 3.5,
  inside: ['Wi-Fi', 'Towels', 'Heating'],
  proStatus: false,
  rooms: 1,
  capacity: 2,
  image: 'img/apartment-26.jpg',
  price: 75,
  id: '79077',
  desciption: 'A basic room in a convenient location',
  type: 'ROOM',
  location: 'Brussels',
  bookmarked: false,
  lat: 50.8503,
  lng: 4.3517,
  comments: [1, 2]
}
];
*/

export {hotelType, locations, commentsArray};

