import AppRoutes from '../AppRoutes/AppRoutes';
import { Link } from 'react-router-dom';
import { OfferType, OffersArrayType } from '../../mocks/offers';
import { memo } from 'react';

type PlacesListType = {
  onListItemHover: (item: OfferType) => void;
  filteredOffersInCity: OffersArrayType;
//так мы записали функцию для изменения состояния state
};

function PlacesList({ filteredOffersInCity, onListItemHover}: PlacesListType) : JSX.Element {

  //вот так выглядит нужный код
  //https://13.react.htmlacademy.pro/static/offer/2.jpg
  //а вот так выглядит получаемый код
  //"https://13.react.pages.academy/static/offer/2.jpg"
  //function to change uploaded adresses from broken server
  // paragraph.replace('pages.academy', 'htmlacademy.pro')

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        filteredOffersInCity.map((item, id) => (
          <article key={item.id} className="cities__card place-card" onMouseEnter={() => onListItemHover(item)}>
            {item.isPremium && <div className="place-card__mark"><span>premium</span></div>}
            <div className="cities__image-wrapper place-card__image-wrapper">
              <Link to={AppRoutes.ROOM + (item.id).toString()}>
                <img className="place-card__image" src={item.previewImage.replace('pages.academy', 'htmlacademy.pro')} width="260" height="200" alt="Place" />
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
                    {item.isFavorite && <use xlinkHref="#icon-bookmark"></use>}
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
                <Link to={AppRoutes.ROOM + (item.id).toString()}>{item.description}</Link>
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

export default memo(PlacesList);
