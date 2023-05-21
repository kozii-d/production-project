import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ НАДО
  setTimeout(() => resolve(import("./ArticleDetailsPage")), 1500);
}));
