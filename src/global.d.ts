// Нужно для того, чтобы работал CSS Modules
// Как пример import classes from "./Counter.module.scss"
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}