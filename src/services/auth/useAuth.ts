import { create } from "zustand";
import * as AuthService from "./auth.api.ts";

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  error: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  token: AuthService.getToken(),
  isLoggedIn: AuthService.isLoggedIn(),
  error: false,
  login: async () => {
    set({ isLoggedIn: false, error: false });
    try {
      await AuthService.login();
      set({
        isLoggedIn: AuthService.isLoggedIn(),
        token: AuthService.getToken(),
      });
    } catch (e) {
      set({ error: true, isLoggedIn: false });
    }
  },
  logout: () => {
    AuthService.logout();
    set({ isLoggedIn: false, token: null });
  },
}));
