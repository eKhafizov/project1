import { setError } from '../store/actions';
import { clearErrorAction } from '../store/api-actions';
import store from '../store';

/*
Поле в хранилище `error` есть. Действие по обновлению поля `error` тоже есть. Есть даже компонент, который будет отрисовываться в зависимости от данного поля. Но чего то не хватает. Так как взаимодействуем с сервером мы через модуль `api.ts`, то необходимо как то из модуля `api.ts` вызвать действия по обновлению поля `error`. Для этого создадим еще один модуль `process-error-handle.ts` и в нем уже вызовем все необходимые действия.
*/

const processErrorHandle = (message: string) : void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

export default processErrorHandle;

