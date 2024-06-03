import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';
import useMap from '../hooks/useMap';
import {Icon, Marker, layerGroup} from 'leaflet';
import City from '../types/city';
import { OffersArrayType } from '../mocks/offers';
import { OfferType } from '../mocks/offers';

//markers
const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
const currentCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type AppTypeSelect = {
  offersInChosenCity: OffersArrayType;
  chosenCity: City;
  selectedOffer?: OfferType;
  onListItemHover: (item: OfferType) => void;
};

function Map({offersInChosenCity, chosenCity, selectedOffer, onListItemHover}: AppTypeSelect): JSX.Element {


  //используем хук useRef и вешаем ссылку на DOM дива, где будет отрисована карта
  const myRef = useRef(null);

  // создаем переменную map - используя хук useMap, который строит карту
  // в этот хук передаем город из props.city и ссылку на объект DOM, куда эту карту отрисуем
  const map = useMap(myRef, chosenCity);

  //используем хук useEffect, чтобы добавлять маркеры на отрисованную карту
  useEffect(() => {
    if (map) {
      //создаем слой
      const markerLayer = layerGroup().addTo(map);
      //для каждого объекта из props.offers делаем маркер
      offersInChosenCity.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        //добавляем маркеру иконку
        marker
          .setIcon(
            selectedOffer !== undefined && point.id === selectedOffer.id
              ? currentCustomIcon //если есть выбранный в сотоянии объект, то делаем его маркер красным
              : defaultCustomIcon //остальные маркеры делаем синими
          )
          .addTo(markerLayer);
      });

      //убираем слой перед размонтированием элемента, он добавится после обновления при монтировании
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersInChosenCity, selectedOffer, chosenCity.name]);


  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <div
          style={{height: '600px'}}
          ref={myRef} //добавили ссылку на элемент DOM с картой
        >
        </div>
      </section>
    </div>);
}

export default Map;
export {defaultCustomIcon, currentCustomIcon};
