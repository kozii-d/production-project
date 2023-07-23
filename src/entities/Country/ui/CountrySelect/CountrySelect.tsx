import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select/Select";

import { Country } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options: SelectOption[] = Object.values(Country).map((currency) => ({
  value: currency,
  content: currency,
}));

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames("", {}, [className])}
      label={t("Выберите страну")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
