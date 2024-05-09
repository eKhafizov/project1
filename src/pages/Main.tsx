import Locations from '../components/Locations';
import Cities from '../components/Cities';
import { OffersArrayType } from '../mocks/offers';

export type AppMain = {
  location: string[];
  offers: OffersArrayType;
}

function Main({location, offers}: AppMain ): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations location={location} />
        <Cities location={location} offers={offers} />
      </main>
    </div>
  );
}

export default Main;
