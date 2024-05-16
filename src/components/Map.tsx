import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';
import useMap from './useMap';
import { AppType } from './app/app';


function Map(props: AppType): JSX.Element {
  const myRef = useRef(null);
  // создаем переменную map - используя хук useMap, который строит карту
  // в этот хук передаем город из props.city и ссылку на объект DOM, куда эту карту отрисуем
  const map = useMap(myRef, props.city);

  useEffect(() => {
    window.scrollTo(0,0);
  },[map]);

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
