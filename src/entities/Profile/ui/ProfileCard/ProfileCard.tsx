import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  readonly?: boolean;
  isLoading?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    readonly,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.profileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt="" />
          </div>
        )}
        <Input
          value={data?.first}
          onChange={onChangeFirstname}
          placeholder={t("Ваше имя")}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          onChange={onChangeAge}
          placeholder={t("Ваш возраст")}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t("Ваш город")}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t("Введите имя пользователя")}
          className={cls.input}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={t("Введите ссылку на аватар")}
          className={cls.input}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
