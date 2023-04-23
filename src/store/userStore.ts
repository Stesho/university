import { makeAutoObservable } from 'mobx';
import User from '../core/types/user';
import api from '../core/api/api';
import { setCookie } from '../core/utils/cookie';

class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async singIn(user: User): Promise<void> {
    const response = await api.signIn(user);

    if (response !== null) {
      this.user = response;
      // setCookie('token', response.token);
    }
  }

  async signUp(user: User): Promise<void> {
    const response = await api.signUp(user);

    if (response !== null) {
      this.user = response;
    }
  }
}

export default UserStore;
