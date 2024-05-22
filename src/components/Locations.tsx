import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import City from '../types/city';
import { OffersArrayType, CommentsType } from '../mocks/offers';

type LocationsType = {
  offers: OffersArrayType;
  city: City;
  comments: CommentsType;
  locations: string[];
};

function Locations({offers, comments, city, locations}: LocationsType): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            locations.map((item, id) => (
              <li key={item} className="locations__item" >
                <Link className={ (item === city?.name)
                  ? ('locations__item-link tabs__item tabs__item--active')
                  : ('locations__item-link tabs__item')}
                to={AppRoutes.ROOM + item}
                >
                  <span>{item}</span>
                </Link>
              </li>)
            )
          }
        </ul>
      </section>
    </div>);
}

export default Locations;
