
const hotelType = {
  APPARTMENT: 'appartment',
  HOTEL: 'hotel'
};

const locations = ['Amsterdam', 'Brussels', 'Hamburg', 'Paris','Dusseldorf', 'Cologne'];

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

export {hotelType, locations, commentsArray};

