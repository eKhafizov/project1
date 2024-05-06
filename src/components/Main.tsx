import Locations from './Locations';
import Cities from './Cities';
import Header from './Header';

function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations />
        <Cities />
      </main>
    </div>
  );
}

export default Main;
