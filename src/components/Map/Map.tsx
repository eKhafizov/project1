import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import {Icon, Marker, layerGroup} from 'leaflet';
import { OfferType } from '../../mocks/offers';
import { useAppSelector } from '../../hooks';
import { getCurrentCity} from '../../store/user-activity/selector';
import { memo } from 'react';

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
  offersInChosenCity: OfferType[] | undefined;
  selectedOffer?: OfferType;
};

function Map({offersInChosenCity, selectedOffer}: AppTypeSelect): JSX.Element {

  const city = useAppSelector(getCurrentCity);

  //используем хук useRef и вешаем ссылку на DOM дива, где будет отрисована карта
  const myRef = useRef(null);

  // создаем переменную map - используя хук useMap, который строит карту
  // в этот хук передаем город из props.city и ссылку на объект DOM, куда эту карту отрисуем
  const map = useMap(myRef, city);

  //используем хук useEffect, чтобы добавлять маркеры на отрисованную карту
  useEffect(() => {
    if (map) {
      //обновляем карту, центрируя вью на нужном городе
      map.setView([city.lat, city.lng],
        city.zoom);

      //создаем слой
      const markerLayer = layerGroup().addTo(map);
      const offersInChosenCity2 = offersInChosenCity;
      //для каждого объекта из props.offers делаем маркер
      offersInChosenCity2 !== undefined && offersInChosenCity2.forEach((point) => {
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
  }, [map, offersInChosenCity, selectedOffer, city]);


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

export default memo(Map);
export {defaultCustomIcon, currentCustomIcon};
