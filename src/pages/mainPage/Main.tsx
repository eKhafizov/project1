import Locations from '../../components/Locations/Locations';
import Cities from '../../components/Cities/Cities';
import AppType from '../../types/appType';

function Main(props: AppType ): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        {/*here we changing chosenCity using dispatch inside <Locations/> */}
        <Locations
          locations={props.locations}
        />
        {/* We send chosenCity here in <Cities /> to render only offers in this city */}
        <Cities />
      </main>
    </div>
  );
}

export default Main;
