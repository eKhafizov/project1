import { Namespace } from '../const';
import { RootState } from '../../types/state';

export const getAuthorization = (state: RootState) : string => state[Namespace.serverData].authorizationStatus;
