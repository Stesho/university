import { createStoreContext } from '../core/utils/createContext';
import UserStore from '../store/userStore';

const userStore = new UserStore();

const { StoreProvider, useStore } = createStoreContext({
  UserStore: userStore,
});

export { StoreProvider, useStore };
