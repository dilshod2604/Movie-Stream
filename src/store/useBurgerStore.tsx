import { create } from "zustand";
interface useBurgerStoreProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
export const useBurgerStore = create<useBurgerStoreProps>((set, get) => ({
  isOpen: false,
  setIsOpen: () => {
    const { isOpen } = get();
    if (isOpen == false) {
      set(() => ({ isOpen: true }));
    } else {
      set(() => ({ isOpen: false }));
    }
  },
}));
