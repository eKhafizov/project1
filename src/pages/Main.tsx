import Locations from '../components/Locations';
import Cities from '../components/Cities';
import AppType from '../types/appType';
import {useAppSelector} from '../hooks/index';


function Main(props: AppType ): JSX.Element {

  const chosenCity = useAppSelector((state) => state);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        {/*here we changing chosenCity using dispatch inside <Locations/> */}
        <Locations offers={props.offers} comments={props.comments} chosenCity={chosenCity.chosenCity} locations={props.locations} />
        {/* We send chosenCity here in <Cities /> to render only offers in this city */}
        <Cities offers={props.offers} chosenCity={chosenCity.chosenCity} />
      </main>
    </div>
  );
}

export default Main;
