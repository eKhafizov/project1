import store from '../store';
import { AuthorizationStatus } from '../store/const';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//AFTER OPTIMIZATION
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}
