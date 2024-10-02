import { create } from "zustand";
interface useVideoStoreState {
  show: boolean;
  movie_key: string;
  open: (key: string) => void;
  close: () => void;
}
export const useVideoStore = create<useVideoStoreState>((set) => ({
  show: false,
  movie_key: "",
  open: (key) => set({ show: true, movie_key: key }),
  close: () => set({ show: false, movie_key: "" }),
}));
