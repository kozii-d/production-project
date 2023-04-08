import { lazy } from "react";

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ НАДО
  setTimeout(() => resolve(import("./ProfilePage")), 1500);
}));
