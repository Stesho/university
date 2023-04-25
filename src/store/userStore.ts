import { makeAutoObservable } from 'mobx';
import User, { AuthData } from '../core/types/user';
import api from '../core/api/api';
import { setCookie } from '../core/utils/cookie';

class UserStore {
  private user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async singIn(user: AuthData): Promise<void> {
    const response = await api.signIn(user);

    if (response !== null) {
      this.user = response;
    }
  }

  async signUp(user: AuthData): Promise<void> {
    const response = await api.signUp(user);

    if (response !== null) {
      this.user = response;
    }
  }

  async logout(): Promise<void> {
    this.user = null;
  }

  getUser() {
    return this.user;
  }
}

export default UserStore;
