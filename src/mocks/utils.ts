import { OfferType } from './offers';

export function sortByPriceUp(a: OfferType,b: OfferType) {
  return a.price - b.price;
}

export function sortByPriceDown(a: OfferType, b: OfferType) {
  return b.price - a.price;
}

export function sortByPopularity(a: OfferType, b: OfferType) {
  return b.rating - a.rating;
}
