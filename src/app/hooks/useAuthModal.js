import { create } from "zustand";

const useAuthModal = create((set) => ({
  isOpen: false,
  isLogin: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  goLogin: () => set({ isLogin: true }),
  goRegister: () => set({ isLogin: false }),
}));

export default useAuthModal;
