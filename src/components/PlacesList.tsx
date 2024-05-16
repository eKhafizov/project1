import AppRoutes from './AppRoutes';
import { Link } from 'react-router-dom';
import { OfferType, OffersArrayType } from '../mocks/offers';
import { City } from '..';

type AppTypeSelect = {
  offers: OffersArrayType;
  location: string[];
  city: City;
  selectedCity?: OfferType;
  onListItemHover: (item: OfferType) => void; //так мы записали функцию для изменения состояния state
};


function PlacesList({location, offers, city, selectedCity, onListItemHover}: AppTypeSelect) : JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item, id) => (
          <article key={item.id} className="cities__card place-card" onMouseEnter={() => onListItemHover(item)}>
            {item.premium && <div className="place-card__mark"><span>premium</span></div>}
            <div className="cities__image-wrapper place-card__image-wrapper">
              <Link to={AppRoutes.ROOM + item.id}>
                <img className="place-card__image" src={item.image} width="260" height="200" alt="Place" />
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{item.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    {item.bookmarked && <use xlinkHref="#icon-bookmark"></use>}
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: 80}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={AppRoutes.ROOM + item.id}>{item.desciption}</Link>
              </h2>
              <p className="place-card__type">{item.type}</p>
            </div>
          </article>
        )
        )
      }
    </div>
  );
}

export default PlacesList;
