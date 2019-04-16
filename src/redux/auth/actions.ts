import { PROVIDERS, PERFORM_LOGIN } from './types';

export const performLogin = (provider: PROVIDERS) => {
  return {
    type: PERFORM_LOGIN,
    payload: {
      provider,
    },
  };
};
