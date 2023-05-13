import { classNames, Mods } from "shared/lib/classNames/classNames";

import { ChangeEvent, memo, useCallback } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, value, onChange, readonly,
  } = props;

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    },
    [onChange],
  );

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div
      data-testid="select-wrapper"
      className={classNames(cls.wrapper, mods, [className])}
    >
      {label && (
        <span
          data-testid="select-label"
          className={cls.label}
        >
          {`${label}>`}
        </span>
      )}
      <select
        disabled={readonly}
        data-testid="select"
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {options?.map((opt) => (
          <option key={opt.value} className={cls.option} value={opt.value}>
            {opt.content}
          </option>
        ))}
      </select>
    </div>
  );
});
