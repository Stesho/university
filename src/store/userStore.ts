import { makeAutoObservable } from 'mobx';
import User, { AuthData } from '../core/types/user';
import api from '../core/api/api';
import { setCookie } from '../core/utils/cookie';

class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async singIn(user: AuthData): Promise<void> {
    const response = await api.signIn(user);

    if (response !== null) {
      this.user = response;
      setCookie('token', response.token);
    }
  }

  async signUp(user: AuthData): Promise<void> {
    const response = await api.signUp(user);

    if (response !== null) {
      this.user = response;
    }
  }
}

export default UserStore;
