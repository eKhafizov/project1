import Map from './Map';
import Form from './Form';
import PlacesList from './PlacesList';
import { useCallback, useState } from 'react';
import { OfferType } from '../mocks/offers';
import { useAppSelector } from '../hooks';
import { sortByPriceDown, sortByPriceUp, sortByPopularity } from '../mocks/utils';
import {getChosenCity, getCurrentFilter} from '../store/user-activity/selector';
import {getOffers, isDataLoading} from '../store/offers-data/selector';
import { memo } from 'react';

function Cities(): JSX.Element {

  const offers = useAppSelector(getOffers);
  const chosenCity = useAppSelector(getChosenCity);

  //состояние выбранного оффера
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(undefined);
  //функция смены состояния для выбранного офера
  const handleListItemHover = useCallback((item: OfferType) => {
    setSelectedOffer(item);},[]);

  //получаем текущий фильтр из состояния store
  const currentFilter = useAppSelector(getCurrentFilter);
  //фильтруем города, которые находятся в выбранном городе
  const offersForMap = useCallback(() => offers.filter((offer) => offer.city.name === chosenCity.name),[chosenCity.name, offers]);

  const offersInChosenCity = offers.filter((offer) => offer.city.name === chosenCity.name);
  //функция сортировки (изменения копии) массива офферов в нужном городе
  const filterAllOffers = useCallback(() => {
    switch(currentFilter) {
      case 'popular':
        return [...offersInChosenCity];
      case 'priceLowToHigh':
        return [...offersInChosenCity].sort(sortByPriceUp);
      case 'priceHighToLow':
        return [...offersInChosenCity].sort(sortByPriceDown);
      case 'topRated':
        return [...offersInChosenCity].sort(sortByPopularity);
      default:
        return [...offersInChosenCity];
    }
  }, [currentFilter, offersInChosenCity]);

  const isDataLoaded = useAppSelector(isDataLoading);
  if (isDataLoaded && offers.length < 1) {
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
          <b className="places__found">{offersForMap.length} places to stay in {chosenCity.name} </b>
          <Form />
          <PlacesList
            filteredOffersInCity={filterAllOffers()}
            onListItemHover={handleListItemHover}
          />
        </section>
        <Map
          offersInChosenCity={offersForMap}
          selectedOffer={selectedOffer}
        />
      </div>
    </div>
  );
}

export default memo(Cities);
