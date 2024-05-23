import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';

type City = {
  lat: number;
  lng: number;
  zoom: number;
};

function useMap(mapRef: MutableRefObject<HTMLElement | null>, chosenCity: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    //если объект в DOM, на который ссылается ссылка отрисован, то...
    if (mapRef.current !== null && !isRenderedRef.current) {
      //cоздаем карту
      const instance = new Map(mapRef.current, {
        center: {
          lat: chosenCity.lat, //указываем latitude нашего объекта
          lng: chosenCity.lng //указываем longevity нашего объекта
        },
        zoom: 10 //указываем масштаб окна карты
      });

      // создаем слой
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      //добавляем созданный слой к созданной карте
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, chosenCity]);

  //возвращаем карту
  return map;
}

export default useMap;