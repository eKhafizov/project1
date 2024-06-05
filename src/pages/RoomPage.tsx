import { useParams } from 'react-router-dom';
import Page404 from './Page404';
import PropertyReviews from '../components/PropertyReviews';
import PropertyMap from '../components/PropertMap';
import NearPlaces from '../components/NearPlaces';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchCommentsAction, fetchOffersNearbyAction, fetchAddFavouritesAction, fetchFavouritesAction } from '../store/api-actions';


function RoomPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);
  const favouriteOffers = useAppSelector((state) => state.favouriteOffers);

  const params = useParams();
  const offer = offers.find(
    (item) => item.id === Number(params.id));

  let isFavourite;
  const y = favouriteOffers.findIndex((item) => item.id === Number(params.id));
  if (y !== -1) {
    isFavourite = true;
  } else {
    isFavourite = false;
  }

  //запросим комменты с сервера и добавим их в состояние с помощью thunk api-action
  dispatch(fetchCommentsAction(Number(offer?.id)));
  dispatch(fetchOffersNearbyAction(Number(offer?.id)));

  const handleBookmarkButton = () => {
    offer !== undefined && dispatch(fetchAddFavouritesAction(Number(offer.id)));
    dispatch(fetchFavouritesAction());
  };

  //lets create an empty array and will add there all comments from comments that have the same id as in offers.comments array
  //  const offerComments : CommentsType = [];
  //  comments.forEach(
  //  (item) => offer?.comments.includes(item.id) && offerComments.push(item));

  return offer ? (
    <main className="page__main page__main--property">
      <section className="property">

        {/* Component #1 - PropertyGallery */}
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((image) => (
              <div
                key={offer.id}
                className="property__image-wrapper"
              >
                <img
                  className="property__image"
                  src={image.replace('pages.academy', 'htmlacademy.pro')}
                  alt={offer.description}
                />
              </div>)
            )}
          </div>
        </div>

        {/* Component #2 - PropertyContainer */}
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>Premium</span>
            </div>
            {/* Property title */}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}{isFavourite ? (<p>ITS FAVOURITE</p>) : (<p>ITS NOT FAVOURITE</p>)}
              </h1>
              <button className="property__bookmark-button button" type="button" onClick={handleBookmarkButton}>
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>

            {/* Property rating */}
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: 80}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>

            {/* Property features */}
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} rooms
              </li>
              <li className="property__feature property__feature--adults">
                {offer.maxAdults} guests
              </li>
            </ul>

            {/* Property price */}
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>

            {/* Property Conviniences */}
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods && offer.goods.map((item, index) => (<li key={item} className="property__inside-item">{item}</li>) )}
              </ul>
            </div>

            {/* Property Host */}
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={offer.host.avatarUrl.replace('pages.academy', 'htmlacademy.pro')}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.host.isPro && 'Pro'}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>

            {/* Component - Property Reviews */}
            <PropertyReviews />
          </div>
        </div>
        {/* Component - PropertyMap */}
        <PropertyMap offer={offer} />
      </section>
      {/* Component #4 - NearPlacesContainer */}
      <NearPlaces />
    </main>
  ) : (
    <Page404 />
  );
}

export default RoomPage;
