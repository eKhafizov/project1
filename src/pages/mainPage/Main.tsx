import Locations from '../../components/Locations/Locations';
import Cities from '../../components/Cities/Cities';
import AppType from '../../types/appType';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCityToAmsterdam, changeCityToCologne, changeCityToBrussels, changeCityToDusseldorf, changeCityToHamburg, changeCityToParis, changeCityToNothing } from '../../store/user-activity/user-activity';
import { changeFilter } from '../../store/actions';

function Main(props: AppType ): JSX.Element {

  //useSearchParams for updating page when copying url link (made myself!!!!)
  const dispatch = useAppDispatch();

  //используем useParams только первый аргумент с информацией.
  //второй аргумент-функцию не используем, т.к нечего обновлять в параметрах
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const filter = searchParams.get('filter');

  function chooseCity(name: string) {
    switch(name) {
      case 'Amsterdam':
        return changeCityToAmsterdam();
      case 'Brussels':
        return changeCityToBrussels();
      case 'Hamburg':
        return changeCityToHamburg();
      case 'Dusseldorf':
        return changeCityToDusseldorf();
      case 'Cologne':
        return changeCityToCologne();
      case 'Paris':
        return changeCityToParis();
      default:
        return changeCityToNothing();
    }
  }
  //проверка параметров из адресной строки и диспатч
  (city !== null && city !== undefined) && dispatch(chooseCity(city));
  (filter !== null && filter !== undefined) && dispatch(changeFilter(filter));


  return (
    <div className="page page--gray page--main">
      <Helmet title='Main page helmet'/>
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
