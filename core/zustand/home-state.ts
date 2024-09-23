import { create } from "zustand";

interface IHomeState {
  homeData: IHomeResponse;
  setHomeData: (form: any) => void;
  resetHomeData: () => void;
}

const useHomeState = create<IHomeState>((set) => ({
  homeData: {} as IHomeResponse,
  setHomeData: (homeData) => set({ homeData }),
  resetHomeData: () => set({ homeData: {} as IHomeResponse }),
}));

export default useHomeState;
