import City from '../types/city';
import { OffersArrayType, CommentsType } from '../mocks/offers';
import { changeCityToHamburg, changeCityToAmsterdam, changeCityToBarcelona, changeCityToBrussels, changeCityToLisbon, changeCityToNothing, changeCityToParis, changeFilter} from '../store/actions';
import { useAppDispatch, useAppSelector} from '../hooks';

type LocationsType = {
  offers: OffersArrayType;
  chosenCity: City;
  comments: CommentsType;
  locations: string[];
};

function Locations({offers, comments, chosenCity , locations}: LocationsType): JSX.Element {

  const dispatch = useAppDispatch();

  const x = useAppSelector((state) => state);
  console.log('x ', x);

  function chooseCity(name: string) {
    switch(name) {
      case 'Amsterdam':
        return changeCityToAmsterdam();
      case 'Brussels':
        return changeCityToBrussels();
      case 'Hamburg':
        return changeCityToHamburg();
      case 'Barcelona':
        return changeCityToBarcelona();
      case 'Lisbon':
        return changeCityToLisbon();
      case 'Paris':
        return changeCityToParis();
      default:
        return changeCityToNothing();
    }
  }

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
