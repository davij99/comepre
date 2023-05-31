import { AuthState } from "./useAuth.ts";

export const selectAuthToken = (state: AuthState) => state.token;
export const selectAuthError = (state: AuthState) => state.error;
export const selectAuthIsLoggedIn = (state: AuthState) => state.isLoggedIn;
