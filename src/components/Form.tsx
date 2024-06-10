import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeFilter } from '../store/actions';
import { getCurrentFilter } from '../store/user-activity/selector';

function Form(): JSX.Element {

  const dispatch = useAppDispatch();
  //const currentFilter = useMemo(useAppSelector(getCurrentFilter),[]);
  const currentFilter = useAppSelector(getCurrentFilter);

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
            currentFilter !== 'popular' && dispatch(changeFilter('popular'));
            toggleUl();
          }}
        >Popular
        </li>
        <li
          className={(currentFilter === 'priceLowToHigh') ? ('places__option places__option--active') : ('places__option')}
          tabIndex={1}
          onClick={() => {
            currentFilter !== 'priceLowToHigh' && dispatch(changeFilter('priceLowToHigh'));
            toggleUl();
          }}
        >Price: low to high
        </li>
        <li
          className={(currentFilter === 'priceHighToLow') ? ('places__option places__option--active') : ('places__option')}
          tabIndex={2}
          onClick={() => {
            currentFilter !== 'priceHighToLow' && dispatch(changeFilter('priceHighToLow'));
            toggleUl();
          }}
        >Price: high to low
        </li>
        <li
          className={(currentFilter === 'topRated') ? ('places__option places__option--active') : ('places__option')}
          tabIndex={3}
          onClick={() => {
            currentFilter !== 'topRated' && dispatch(changeFilter('topRated'));
            toggleUl();
          }}
        >Top rated first
        </li>
      </ul>
    </form>);
}

export default Form;
