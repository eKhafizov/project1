import Map from '../Map/Map';
import Form from '../Form/Form';
import PlacesList from '../PlacesList/PlacesList';
import { useCallback, useState } from 'react';
import { OfferType } from '../../mocks/offers';
import { useAppSelector } from '../../hooks';
import {getTheSelector} from '../../store/user-activity/selector';
import {isDataLoading} from '../../store/offers-data/selector';
import { memo } from 'react';


function Cities(): JSX.Element {
  //Using createSelector
  const selectorTheSelector = useAppSelector(getTheSelector);


  //состояние выбранного оффера
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(undefined);
  //функция смены состояния для выбранного офера
  const handleListItemHover = useCallback((item: OfferType) => {
    setSelectedOffer(item);},[]);
  const isDataLoaded = useAppSelector(isDataLoading);
  if (isDataLoaded && selectorTheSelector.length < 1) {
    return (
      <div>
        <h2>LOADING</h2>
      </div>);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{selectorTheSelector.length} places to stay in {selectorTheSelector[0].city.name} </b>
          <Form />
          <PlacesList
            filteredOffersInCity={selectorTheSelector}
            onListItemHover={handleListItemHover}
          />
        </section>
        <Map
          offersInChosenCity={selectorTheSelector}
          selectedOffer={selectedOffer}
        />
      </div>
    </div>
  );
}

export default memo(Cities);
