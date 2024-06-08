import { ChangeEvent, FormEvent, useState} from 'react';
import { useAppSelector, useAppDispatch} from '../hooks';
import { AuthorizationStatus } from '../store/const';
import { OfferType } from '../mocks/offers';
import {fetchAddCommentsAction, fetchCommentsAction} from '../store/api-actions';
import {getAuthorization} from '../store/server-data/selector';

export type PassingOfferNew = {
  offer: OfferType;
};

function ReviewForm({offer}: PassingOfferNew) {

  const dispatch = useAppDispatch();

  const [form1, setForm1] = useState({
    id: Number(offer.id),
    comment: 'Tell how was your stay, what you like and what can be improved',
    rating: 2 });
  const obj = form1;

  const authorized = useAppSelector(getAuthorization);

  function handlerFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(fetchAddCommentsAction(obj));
    dispatch(fetchCommentsAction(Number(offer.id)));
  }
  function handleTextChanges(evt: ChangeEvent<HTMLTextAreaElement>) {
    evt.preventDefault();
    const {value} = evt.target;
    setForm1({...form1, comment: value});
  }
  function handleRatingChanges(evt: ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    const {value} = evt.target;
    setForm1({...form1, rating: Number(value)});
  }


  return authorized === AuthorizationStatus.Auth
    ? (
      <form onSubmit={handlerFormSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label htmlForm__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleRatingChanges}/>
          <label htmlFor="5-stars" className="reviews__rating-label htmlForm__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleRatingChanges} />
          <label htmlFor="4-stars" className="reviews__rating-label htmlForm__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleRatingChanges} />
          <label htmlFor="3-stars" className="reviews__rating-label htmlForm__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleRatingChanges} />
          <label htmlFor="2-stars" className="reviews__rating-label htmlForm__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleRatingChanges} />
          <label htmlFor="1-star" className="reviews__rating-label htmlForm__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder={form1.comment}
          onChange={handleTextChanges}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          {form1.comment}
          {form1.rating}
          <button className="reviews__submit form__submit button" type="submit" disabled={false}>
            Submit
          </button>
        </div>
      </form>
    )
    : (
      <div>
      Only aithorized users can leave comments
      </div>
    );
}

export default ReviewForm;
