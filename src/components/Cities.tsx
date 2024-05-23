import Map from './Map';
import Form from './Form';
import PlacesList from './PlacesList';
import { useState } from 'react';
import { OfferType } from '../mocks/offers';
import City from '../types/city';
import { OffersArrayType} from '../mocks/offers';
//import { useAppSelector } from '../hooks';

type CitiesType = {
  offers: OffersArrayType;
  chosenCity: City;
}

function Cities({offers, chosenCity } : CitiesType): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(undefined);

  //const currentFilter = useAppSelector((state) => state.chosenFilter);


  function handleListItemHover(item: OfferType) {
    setSelectedOffer(item);
  }
  const offersInChosenCity = offers.filter((offer) => offer.location === chosenCity.name);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersInChosenCity.length} places to stay in {chosenCity.name} </b>
          <Form />
          <PlacesList offersInChosenCity={offersInChosenCity} onListItemHover={handleListItemHover}/>
        </section>
        <Map chosenCity={chosenCity} offersInChosenCity={offersInChosenCity} selectedOffer={selectedOffer} onListItemHover={handleListItemHover} />
      </div>
    </div>
  );
}

export default Cities;
