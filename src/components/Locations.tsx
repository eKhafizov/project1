import { Link } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import City from '../types/city';
import { OffersArrayType, CommentsType } from '../mocks/offers';

type LocationsType = {
  offers: OffersArrayType;
  city: City;
  comments: CommentsType;
};

function Locations({offers, comments, city}: LocationsType): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            offers.map((item, id) => (
              <li key={item.location} className="locations__item" >
                <Link className={ (item.location === city?.name)
                  ? ('locations__item-link tabs__item tabs__item--active')
                  : ('locations__item-link tabs__item')}
                to={AppRoutes.ROOM + item.id}
                >
                  <span>{item.location}</span>
                </Link>
              </li>)
            )
          }
        </ul>
      </section>
    </div>);
}

export default Locations;
