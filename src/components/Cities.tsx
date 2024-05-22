import Map from './Map';
import Form from './Form';
import PlacesList from './PlacesList';
import { useState } from 'react';
import { OfferType } from '../mocks/offers';
import City from '../types/city';
import { OffersArrayType, CommentsType } from '../mocks/offers';

type CitiesType = {
  offers: OffersArrayType;
  comments: CommentsType;
  city: City;
}

function Cities({offers, comments, city} : CitiesType): JSX.Element {

  const [selectedCity, setSelectedCity] = useState<OfferType | undefined>(undefined);

  function handleListItemHover(item: OfferType) {
    setSelectedCity(item);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in city </b>
          <Form />
          <PlacesList offers={offers} city={city} selectedCity={selectedCity} onListItemHover={handleListItemHover}/>
        </section>
        <Map city={city} offers={offers} selectedCity={selectedCity} onListItemHover={handleListItemHover} />
      </div>
    </div>
  );
}

export default Cities;
