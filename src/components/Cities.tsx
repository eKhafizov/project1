import Map from './Map';
import Form from './Form';
import PlacesList from './PlacesList';
import { AppType } from './app/app';
import { useState } from 'react';
import { OfferType } from '../mocks/offers';

function Cities({location, offers, city} : AppType): JSX.Element {

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
          <PlacesList location={location} offers={offers} city={city} selectedCity={selectedCity} onListItemHover={handleListItemHover}/>
        </section>
        <Map city={city} location={location} offers={offers} selectedCity={selectedCity} onListItemHover={handleListItemHover} />
      </div>
    </div>
  );
}

export default Cities;
