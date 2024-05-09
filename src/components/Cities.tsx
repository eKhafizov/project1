import Map from './Map';
import Form from './Form';
import PlacesList from './PlacesList';
import { AppType } from './app/app';


function Cities({location, offers} : AppType): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Form />
          <PlacesList location={location} offers={offers} />
        </section>
        <Map />
      </div>
    </div>
  );
}

export default Cities;
