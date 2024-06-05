import ReviewForm from './ReviewForm';
import { useAppSelector } from '../hooks';
import { OfferType } from '../mocks/offers';

export type PassingOffer = {
  offer: OfferType;
};

function PropertyReviews({offer}: PassingOffer):JSX.Element {
  //запросим комменты из состояния
  const comments = useAppSelector((state) => state.chosenOfferComments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments && comments.length}</span></h2>
      <ul className="reviews__list">
        {comments !== null && comments.map((item) => (
          <li key={item.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={item.user.avatarUrl.replace('pages.academy', 'htmlacademy.pro')} width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                {item.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: 80}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {item.comment}
              </p>
              <time className="reviews__time" dateTime={(item.date).toString()}>{(item.date).toString()}</time>
            </div>
          </li>))}
      </ul>

      <ReviewForm offer={offer} />
    </section>
  );
}

export default PropertyReviews;
