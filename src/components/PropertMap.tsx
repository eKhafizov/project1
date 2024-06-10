import { useRef, useEffect } from 'react';
import useMap from '../hooks/useMap';
import { OfferType } from '../mocks/offers';
import {Marker, layerGroup} from 'leaflet';
import { defaultCustomIcon, currentCustomIcon } from './Map';
import { useAppSelector } from '../hooks';
import {getNearbyOffers} from '../store/offers-data/selector';

type PropertyMapType = {
  offer: OfferType;
}

function PropertyMap({offer}: PropertyMapType ): JSX.Element {

  //form an object from lat/lng of our recieved offer
  const city = {
    lat: offer.location.latitude,
    lng: offer.location.longitude,
    zoom: 10
  };

  const propertyRef = useRef(null);
  const map = useMap(propertyRef, city);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sameLocations = useAppSelector(getNearbyOffers);

  //используем хук useEffect, чтобы добавлять маркеры на отрисованную карту
  useEffect(() => {
    if (map) {
      //создаем слой
      const markerLayer = layerGroup().addTo(map);
      //для каждого объекта из props.offers делаем маркер
      sameLocations !== null && sameLocations.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        //добавляем маркеру иконку
        marker
          .setIcon(
            point.id === offer.id
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
  }, [map, offer, sameLocations]);

  return (
    <section className="property__map map">
      <div
        style={{height: '600px'}}
        ref={propertyRef} //добавили ссылку на элемент DOM с картой
      >
      </div>
    </section>
  );
}

export default PropertyMap;
