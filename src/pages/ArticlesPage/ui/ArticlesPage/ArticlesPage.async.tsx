import { lazy } from "react";

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ НАДО
  setTimeout(() => resolve(import("./ArticlesPage")), 1500);
}));
