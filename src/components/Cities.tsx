import Map from './Map';
import Form from './Form';
import PlacesList from './PlacesList';
import { useState } from 'react';
import { OfferType } from '../mocks/offers';
import City from '../types/city';
import { OffersArrayType} from '../mocks/offers';
import { useAppSelector } from '../hooks';
import { sortByPriceDown, sortByPriceUp, sortByPopularity } from '../mocks/utils';
import {getCurrentFilter} from '../store/user-options';
import {isDataLoading} from '../store/service-data';

type CitiesType = {
  offers: OffersArrayType;
  chosenCity: City;
}

function Cities({offers, chosenCity } : CitiesType): JSX.Element {

  //состояние выбранного оффера
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(undefined);
  //функция смены состояния для выбранного офера
  function handleListItemHover(item: OfferType) {
    setSelectedOffer(item);
  }

  //получаем текущий фильтр из состояния store
  const currentFilter = useAppSelector(getCurrentFilter);
  //фильтруем города, которые находятся в выбранном городе
  const offersInChosenCity = offers.filter((offer) => offer.city.name === chosenCity.name);
  //функция сортировки (изменения копии) массива офферов в нужном городе
  function filterAllOffers() {
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
  }
  //присваиваем полученный после фильтров и сортировки массив перменной и передаем ее на отрисовку
  const filteredOffersInCity = filterAllOffers();

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
          <b className="places__found">{offersInChosenCity.length} places to stay in {chosenCity.name} </b>
          <Form
            currentFilter={currentFilter}
          />
          <PlacesList
            filteredOffersInCity={filteredOffersInCity}
            onListItemHover={handleListItemHover}
          />
        </section>
        <Map
          chosenCity={chosenCity}
          offersInChosenCity={offersInChosenCity}
          selectedOffer={selectedOffer}
          onListItemHover={handleListItemHover}
        />
      </div>
    </div>
  );
}

export default Cities;
