import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

export const useUserStore = create()(persist((set) => ({
  user: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  loading: false,
}),
  {
    name: 'user-name',
    storage: createJSONStorage(() => localStorage),
  }

))