import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';


const URL = 'https://13.design.pages.academy/six-cities';
const TIME_LIMIT = 3000;

//Для отправки сетевых запросов воспользуемся пакетом `axios`
//Создадим отдельный модуль и опишем в нём функцию `createAPI`.
const createApi = () : AxiosInstance => {

  const api = axios.create({
    baseURL: URL,
    timeout: TIME_LIMIT,
  });

  //Добавим извлечение токена из `localStorage` и вставим его в заголовки.
  //Для этого нам потребуется воспользоваться перехватчиками, а именно перехватчиком запроса.
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  }
  );

  return api;
};

export default createApi;


