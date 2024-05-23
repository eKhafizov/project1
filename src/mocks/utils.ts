import { OfferType } from './offers';

export function sortByPrice(a: OfferType,b: OfferType) {
  return a.price - b.price;
}
