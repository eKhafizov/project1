import { ChangeEvent, FormEvent, useState} from 'react';

function ReviewForm() {

  const [form1, setForm1] = useState({
    text: 'Tell how was your stay, what you like and what can be improved',
    rating: '0-start'});

  function handlerFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  function handleTextChanges(evt: ChangeEvent<HTMLTextAreaElement>) {
    evt.preventDefault();
    const {value} = evt.target;
    setForm1({text: value, rating:'sss'});
  }

  function handleRatingChanges(evt: ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    const {name, value} = evt.target;
    setForm1({...form1, [name]: value}); //this works but we need to change previous state
  }


  return (
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
        placeholder={form1.text}
        onChange={handleTextChanges}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        {form1.text}
        {form1.rating}
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
