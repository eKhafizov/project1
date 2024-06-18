import { Namespace } from '../const';
import { RootState } from '../../types/state';

export const getAuthorization = (state: Pick<RootState, Namespace.serverData>) : string => state[Namespace.serverData].authorizationStatus;
