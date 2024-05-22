import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../types/state';

//хук для диспача - передачи наших action-creators в функцию reducer,
//которая обработает их и изменит состояние
export const useAppDispatch = () => useDispatch<AppDispatch>();

//хук для того, чтобы получить значение из состояния
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
