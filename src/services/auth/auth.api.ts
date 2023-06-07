import { pb } from "../../pocketbase.ts";

export const login = async () => {
  return pb.admins.authWithPassword("cugliari770@gmail.com", "Enetworks2023");
};

export const logout = async () => {
  return localStorage.removeItem("selectedEmployee");
};

export const getToken = () => {
  return pb.authStore.token;
};

export const isLoggedIn = () => {
  return pb.authStore.isValid;
};
