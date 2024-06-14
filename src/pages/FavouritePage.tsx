import { useAppSelector } from '../hooks';
import { getFavouriteOffers } from '../store/offers-data/selector';
import AppRoutes from '../components/AppRoutes';
import { OfferType } from '../mocks/offers';

function FavouritePage(): JSX.Element {

  const favouriteOffers = useAppSelector(getFavouriteOffers);

  const offersInAmsterdam = [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Amsterdam');
  const offersInHamburg = [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Hamburg');
  const offersInBrussels = [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Brussels');
  const offersInParis = [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Paris');
  const offersInDusseldorf = [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Dusseldorf');
  const offersInCologne = [...favouriteOffers].filter((offer : OfferType) => offer.city.name === 'Cologne');

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              offersInAmsterdam && offersInAmsterdam.length > 1 && (
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" >
                    {
                      offersInAmsterdam.map((offer) => (
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
                  </div>
                </li>
              )
            }
            {
              offersInHamburg && offersInHamburg.length > 1 && (
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Hamburg</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" >
                    {
                      offersInHamburg.map((offer) => (
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
                  </div>
                </li>
              )
            }
            {
              offersInBrussels && offersInBrussels.length > 1 && (
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Brussels</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" >
                    {
                      offersInBrussels.map((offer) => (
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
                  </div>
                </li>
              )
            }
            {
              offersInCologne && offersInCologne.length > 1 && (
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" >
                    {
                      offersInCologne.map((offer) => (
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
                  </div>
                </li>
              )
            }
            {
              offersInParis && offersInParis.length > 1 && (
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Paris</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" >
                    {
                      offersInParis.map((offer) => (
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
                  </div>
                </li>
              )
            }
            {
              offersInDusseldorf && offersInDusseldorf.length > 1 && (
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Dusseldorf</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" >
                    {
                      offersInDusseldorf.map((offer) => (
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
                  </div>
                </li>
              )
            }
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavouritePage;
