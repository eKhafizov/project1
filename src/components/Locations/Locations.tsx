import { changeFilter} from '../../store/actions';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { getChosenCity, getCurrentFilter } from '../../store/user-activity/selector';
import { changeCityToAmsterdam, changeCityToBrussels, changeCityToCologne, changeCityToDusseldorf, changeCityToHamburg, changeCityToNothing, changeCityToParis } from '../../store/user-activity/user-activity';
import { useSearchParams } from 'react-router-dom';

type LocationsType = {
  locations: string[];
};

function Locations({locations}: LocationsType): JSX.Element {

  const dispatch = useAppDispatch();
  const chosenCity = useAppSelector(getChosenCity);
  const chosenFilter = useAppSelector(getCurrentFilter);

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

  //используем searchParams
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            locations.map((item, id) => (
              <li key={item} className="locations__item" >
                <button className={ (item === chosenCity.name)
                  ? ('locations__item-link tabs__item tabs__item--active')
                  : ('locations__item-link tabs__item')}
                onClick={() => {
                  dispatch(chooseCity(item));
                  dispatch(changeFilter('popular'));
                  setSearchParams({type: item, filter: chosenFilter});
                }}
                >
                  <span>{item}</span>
                </button>
              </li>)
            )
          }
        </ul>
      </section>
    </div>);
}

export default Locations;
