import { AppType } from './app/app';

function PlacesList( {location, offers}: AppType) : JSX.Element {
  //console.log('in placesoffers are ', offers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item, id) => (
          <article key={item.id} className="cities__card place-card">
            <div className="place-card__mark">
              <span>{item.premium ? 'premium' : 'normal'}</span>
            </div>
            <div className="cities__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img className="place-card__image" src={item.image} width="260" height="200" alt="Place" />
              </a>
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
                    {!item.bookmarked && <use xlinkHref="#icon-saved"></use>}
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
                <a href="#">{item.desciption}</a>
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
