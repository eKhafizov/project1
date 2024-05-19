import ReviewForm from './ReviewForm';
import { CommentsType } from '../mocks/offers';

type OfferCommentsType = {
  offerComments: CommentsType;
};

function PropertyReviews({offerComments}: OfferCommentsType):JSX.Element {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerComments.length}</span></h2>
      <ul className="reviews__list">
        {offerComments.map((item) => (
          <li key={item.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                {item.author}
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
                {item.text}
              </p>
              <time className="reviews__time" dateTime={(item.data).toString()}>{(item.data).toString()}</time>
            </div>
          </li>))}
      </ul>

      <ReviewForm />
    </section>
  );
}

export default PropertyReviews;
