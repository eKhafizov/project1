import { Namespace } from '../const';
import { AuthorizationStatus } from '../const';
import { getAuthorization } from './selector';

describe('server-data selector test', () => {
  const state = {
    [Namespace.serverData]: {
      authorizationStatus: AuthorizationStatus
    }
  };

  it('should get(return) auth status from state', () => {
    const {authorizationStatus} = state[Namespace.serverData];
    const result = getAuthorization(state);
    expect(result).toBe(authorizationStatus);
  });

});
