import { useParams } from 'react-router-dom';
import { AppType } from '../components/app/app';
import Page404 from './Page404';

function RoomPage({offers, location}: AppType): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id );

  return offer ? (
    <div>
      <h1>{offer?.desciption}</h1>
    </div>
  ) : (
    <Page404 />
  );
}

export default RoomPage;
