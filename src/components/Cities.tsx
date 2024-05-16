import Map from './Map';
import Form from './Form';
import PlacesList from './PlacesList';
import { AppType } from './app/app';
//import { useState } from 'react';


function Cities({location, offers, city} : AppType): JSX.Element {
//  const [city, setCity] = useState(location[1]);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in city </b>
          <Form />
          <PlacesList location={location} offers={offers} city={city} />
        </section>
        <Map city={city} location={location} offers={offers}/>
      </div>
    </div>
  );
}

export default Cities;
