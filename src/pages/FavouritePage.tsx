import { useAppSelector } from '../hooks';
import { getFavouriteOffers } from '../store/offers-data/selector';
import AppRoutes from '../components/AppRoutes';

function FavouritePage(): JSX.Element {

  const favouriteOffers = useAppSelector(getFavouriteOffers);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              favouriteOffers && favouriteOffers.map((offer) => (
                <article key={offer.id} className="favorites__card place-card" >
                  {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
                  <div className="favorites__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image" />
                    </a>
                  </div>
                  <div className="favorites__card-info place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{offer.price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: '100%'}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href={`${AppRoutes.ROOM}${offer.id}`}>{offer.description}</a>
                    </h2>
                    <p className="place-card__type">{offer.type}</p>
                  </div>
                </article>))
            }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavouritePage;
