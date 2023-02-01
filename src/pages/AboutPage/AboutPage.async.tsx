import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ НАДО
  setTimeout(() => resolve(import("./AboutPage")), 1500);
}));