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
        <Locations offers={props.offers} comments={props.comments} city={chosenCity} />
        <Cities offers={props.offers} comments={props.comments} city={chosenCity} />
      </main>
    </div>
  );
}

export default Main;
