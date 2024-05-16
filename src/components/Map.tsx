import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';
import useMap from './useMap';
import { AppType } from './app/app';
import {Icon, Marker, layerGroup} from 'leaflet';


//markers
export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
//const currentCustomIcon = new Icon({
  //iconUrl: URL_MARKER_CURRENT,
  //iconSize: [40, 40],
  //iconAnchor: [20, 40]
//});


function Map(props: AppType): JSX.Element {
  const myRef = useRef(null);
  // создаем переменную map - используя хук useMap, который строит карту
  // в этот хук передаем город из props.city и ссылку на объект DOM, куда эту карту отрисуем
  const map = useMap(myRef, props.city);
  const points = props.offers;

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(defaultCustomIcon
          )
          .addTo(markerLayer);
      });

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
          ref={myRef}
        >
        </div>
      </section>
    </div>);
}

export default Map;
