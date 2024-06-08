import { RootState } from '../../types/state';
import { Namespace } from '../const';
import { Comments } from '../../types/appType';


export const getChosenCity = (state: RootState) : {name: string;lat: number;lng: number;zoom: number} => state[Namespace.userActivity].chosenCity;
export const getCurrentFilter = (state: RootState) : string => state[Namespace.userActivity].chosenFilter;
export const getOfferComments = (state: RootState) : Comments | null => state[Namespace.userActivity].chosenOfferComments;
export const getCurrentCity = (state: RootState) : {name: string;lat: number;lng: number;zoom: number} => state[Namespace.userActivity].chosenCity;
