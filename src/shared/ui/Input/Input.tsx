import { classNames } from "shared/lib/classNames/classNames";

import {
  ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useCallback, useEffect, useRef, useState,
} from "react";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  }, [onChange]);

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSelect = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    if (e.target instanceof HTMLInputElement) {
      setCaretPosition(e.target.selectionStart || 0);
    }
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);

      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          className={cls.input}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSelect={handleSelect}
          {...otherProps}
        />
        {isFocused && <span className={cls.caret} style={{ left: caretPosition * 9 }} />}
      </div>
    </div>
  );
});
