// Благодаря такой записи в объекте ключом может быть только строка, а значением булеан, строка или undefined
export type Mods = Record<string, boolean | string | undefined>;
export type Additional = Array<string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Additional = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
