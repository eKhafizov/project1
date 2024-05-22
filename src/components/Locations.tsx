import { Link } from 'react-router-dom';
import { AppType } from '../app/app';

function Locations(props: AppType): JSX.Element {
  const {location} = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            location.map((city, id) => <li key={city} className="locations__item" ><Link className="locations__item-link tabs__item" to='#'><span>{city}</span></Link></li>)
          }
        </ul>
      </section>
    </div>);
}

export default Locations;
