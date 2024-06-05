export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favourite = '/favorite'
}
export type AuthData = {
  login: string;
  password: string;
}
export type UserData = {
  id: number;
  email: string;
  token: string;
};
export const TIMEOUT_SHOW_ERROR = 2000;
