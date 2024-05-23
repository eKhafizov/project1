import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../hooks';
import { changeFilter } from '../store/actions';

function Form({currentFilter}: {currentFilter: string}): JSX.Element {

  const dispatch = useAppDispatch();

  function hanldeFormSubmit(evt: FormEvent) {
    evt.preventDefault();
  }
  const [ulOpen, setUlOpen] = useState(false);

  function toggleUl() {
    setUlOpen((previous) => {
      if (previous === true) {
        return false;
      } else {return true;}
    });
  }

  return (
    <form onSubmit={hanldeFormSubmit} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => toggleUl()}>
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={(ulOpen === true) ? ('places__options places__options--custom places__options--opened') : ('places__options places__options--custom')}
      >
        <li
          className={(currentFilter === 'popular') ? ('places__option places__option--active') : ('places__option')}
          tabIndex={0}
          onClick={() => {
            dispatch(changeFilter({type: 'popular'}));
            toggleUl();
          }}
        >Popular
        </li>
        <li
          className={(currentFilter === 'priceLowToHigh') ? ('places__option places__option--active') : ('places__option')}
          tabIndex={1}
          onClick={() => {
            dispatch(changeFilter({type: 'priceLowToHigh'}));
            toggleUl();
          }}
        >Price: low to high
        </li>
        <li
          className={(currentFilter === 'priceHighToLow') ? ('places__option places__option--active') : ('places__option')}
          tabIndex={2}
          onClick={() => {
            dispatch(changeFilter({type: 'priceHighToLow'}));
            toggleUl();
          }}
        >Price: high to low
        </li>
        <li
          className={(currentFilter === 'topRated') ? ('places__option places__option--active') : ('places__option')}
          tabIndex={3}
          onClick={() => {
            dispatch(changeFilter({type: 'topRated'}));
            toggleUl();
          }}
        >Top rated first
        </li>
      </ul>
    </form>);
}

export default Form;
