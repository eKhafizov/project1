import ReviewForm from './ReviewForm';
import { CommentsType } from '../mocks/offers';

//type OfferCommentsType = {
//offerComments: CommentsType;
//};

const commentsArray : CommentsType = [
  {
    author: 'Jeremy',
    id: 1,
    text: 'Best location ever.Great host. Nice view!',
    data: new Date(),
    rating: 4.5
  },
  {
    author: 'Sandra',
    id: 2,
    text: 'Nice location. Lots of restaurants around. Nice people!',
    data: new Date(),
    rating: 4.1
  },
  {
    author: 'Frank',
    id: 3,
    text: 'Dirty rooms. Grumpy staff. Expensive!',
    data: new Date(),
    rating: 3.5
  },
  {
    author: 'Rayan',
    id: 4,
    text: 'Decent room. Great breakfast',
    data: new Date(),
    rating: 3.7
  },
  {
    author: 'Michael',
    id: 5,
    text: 'I want to stay here forever',
    data: new Date(),
    rating: 4.8
  },
  {
    author: 'Jim',
    id: 6,
    text: 'Pleasant personel. Not cheap. But i like it!',
    data: new Date(),
    rating: 4.2
  },
  {
    author: 'Eva',
    id: 7,
    text: 'Such a shithole!',
    data: new Date(),
    rating: 4.9
  },
  {
    author: 'Max',
    id: 8,
    text: 'Best location ever. Nice view! Great food!',
    data: new Date(),
    rating: 2.5
  },
  {
    author: 'Pamela',
    id: 9,
    text: 'We really enjoyed our stay in this hotel!',
    data: new Date(),
    rating: 3.3
  },
];

function PropertyReviews():JSX.Element {

  const offerComments = commentsArray;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerComments && offerComments.length}</span></h2>
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
