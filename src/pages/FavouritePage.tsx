import { useAppSelector } from '../hooks';
import { getFavouriteOffers } from '../store/offers-data/selector';
import { OfferType } from '../mocks/offers';
import FavoritesItem from '../components/favouritesItem';

function FavouritePage(): JSX.Element {

  const favouriteOffers = useAppSelector(getFavouriteOffers);
  const favoritesArray = [];
  const offersInAmsterdam = {id: 'Amsterdam', array: [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Amsterdam')};
  const offersInHamburg = {id: 'Hamburg', array:  [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Hamburg')};
  const offersInBrussels = {id: 'Brussels', array:  [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Brussels')};
  const offersInParis = {id: 'Paris', array:  [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Paris')};
  const offersInDusseldorf = {id: 'Dusseldorf', array: [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Dusseldorf')};
  const offersInCologne = {id: 'Cologne', array:  [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Cologne')};
  favoritesArray.push(offersInAmsterdam, offersInBrussels, offersInCologne, offersInDusseldorf, offersInHamburg, offersInParis);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoritesArray.map((items) =>
              (<FavoritesItem key={items.id} city={items.id} items={items.array}/>))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavouritePage;
