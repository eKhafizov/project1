import { useParams } from 'react-router-dom';
import Page404 from './Page404';
import {CommentsType, OffersArrayType} from '../mocks/offers';
import PropertyReviews from '../components/PropertyReviews';
import PropertyMap from '../components/PropertMap';
import NearPlaces from '../components/NearPlaces';

type RoomPageType = {
  offers: OffersArrayType;
  comments: CommentsType;
};

function RoomPage({offers, comments}: RoomPageType): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id );

  //lets create an empty array and will add there all comments from comments that have the same id as in offers.comments array
  const offerComments : CommentsType = [];
  comments.forEach((item) => offer?.comments.includes(item.id) && offerComments.push(item));

  return offer ? (
    <main className="page__main page__main--property">
      <section className="property">

        {/* Component #1 - PropertyGallery */}
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
            </div>
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
                {offer.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
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
                {offer.rooms} rooms
              </li>
              <li className="property__feature property__feature--adults">
                {offer.capacity} guests
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
                {offer.inside && offer.inside.map((item, index) => (<li key={item} className="property__inside-item">{item}</li>) )}
              </ul>
            </div>

            {/* Property Host */}
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.photo ? 'img/avatar-max.jpg' : 'img/avatar-angelina.jpg'} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {offer.host}
                </span>
                <span className="property__user-status">
                  {offer.proStatus && 'Pro'}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.desciption}
                </p>
              </div>
            </div>

            {/* Component - Property Reviews */}
            <PropertyReviews offerComments={offerComments} />
          </div>
        </div>
        {/* Component - PropertyMap */}
        <PropertyMap />
      </section>
      {/* Component #4 - NearPlacesContainer */}
      <NearPlaces offer={offer} offers={offers} />
    </main>


  ) : (
    <Page404 />
  );
}

export default RoomPage;
