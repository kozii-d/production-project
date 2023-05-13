import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { Select, SelectOption } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

// const options: SelectOption[] = [
//   { value: Currency.UAH, content: Currency.UAH },
//   { value: Currency.EUR, content: Currency.EUR },
//   { value: Currency.USD, content: Currency.USD },
// ];

const options: SelectOption[] = Object.values(Currency).map((currency) => ({
  value: currency,
  content: currency,
}));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames("", {}, [className])}
      label={t("Укажите валюту")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
