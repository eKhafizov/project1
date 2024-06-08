import { useAppSelector } from '../hooks';
import AppRoutes from './AppRoutes';
import {getNearbyOffers} from '../store/offers-data/selector';
import { Link } from 'react-router-dom';

function NearPlaces():JSX.Element {

  //creating an array of another offers in the same area as our offer.location
  const sameLocations = useAppSelector(getNearbyOffers);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {/* render all another locations in this area if they exist*/}
          { (sameLocations && sameLocations.length > 1)
            ? (
              sameLocations.slice(0,3).map((item) => (
                <article key={item.id} className="near-places__card place-card">
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href={AppRoutes.ROOM + (item.id).toString()}>
                      <img
                        className="place-card__image"
                        src={item.previewImage.replace('pages.academy', 'htmlacademy.pro')}
                        width="260"
                        height="200"
                        alt={item.description}
                      />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{item.price}</b>
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
                        <span style={{width: 80}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <Link to={AppRoutes.ROOM + (item.id).toString()}>{item.title}</Link>
                    </h2>
                    <p className="place-card__type">{item.type}</p>
                  </div>
                </article>))
            )
            : (
              <p>there are no offers in same location!</p>
            )}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
