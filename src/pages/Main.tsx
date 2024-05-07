import Locations from '../components/Locations';
import Cities from '../components/Cities';

function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations />
        <Cities />
      </main>
    </div>
  );
}

export default Main;
