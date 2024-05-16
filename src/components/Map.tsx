import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';
import useMap from './useMap';
import { AppType } from './app/app';
import {Icon, Marker, layerGroup} from 'leaflet';


//markers
const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
//const currentCustomIcon = new Icon({
  //iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  //iconSize: [40, 40],
  //iconAnchor: [20, 40]
//});


function Map(props: AppType): JSX.Element {
  //используем хук useRef и вешаем ссылку на DOM дива, где будет отрисована карта
  const myRef = useRef(null);

  // создаем переменную map - используя хук useMap, который строит карту
  // в этот хук передаем город из props.city и ссылку на объект DOM, куда эту карту отрисуем
  const map = useMap(myRef, props.city);

  //переменная points = переданному props.offers(передаем все наши объекты)
  const points = props.offers;

  //используем хук useEffect, чтобы добавлять маркеры на отрисованную карту
  useEffect(() => {
    if (map) {
      //создаем слой
      const markerLayer = layerGroup().addTo(map);
      //для каждого объекта из props.offers делаем маркер
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });
        //добавляем маркеру иконку
        marker
          .setIcon(defaultCustomIcon
          )
        //добавляем маркер на слой
          .addTo(markerLayer);
      });

      //убираем слой перед размонтированием элемента, он добавится после обновления при монтировании
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);


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
