import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
  id: string;
  password: string;
}
interface Action {
  setID: (id: string) => void;
  setPassword: (password: string) => void;
}

const useSignupStore = devtools<State & Action>((set) => ({
  // state
  id: '',
  password: '',
  // actions
  setID: (id) => set(() => ({ id })),
  setPassword: (password) => set(() => ({ password })),
}));

export default create(useSignupStore);
