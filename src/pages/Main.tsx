import Locations from '../components/Locations';
import Cities from '../components/Cities';
import { AppType } from '../components/app/app';


function Main(props: AppType ): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations location={props.location} offers={props.offers} city={props.city}/>
        <Cities location={props.location} offers={props.offers} city={props.city} />
      </main>
    </div>
  );
}

export default Main;
