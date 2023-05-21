import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { useTranslation } from "react-i18next";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [ValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
    [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
  };

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch],
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch],
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch],
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      const numericValue: string = value?.replace(/\D/g, "") || "";
      dispatch(
        profileActions.updateProfile({ age: Number(numericValue) || 0 }),
      );
    },
    [dispatch],
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch],
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch],
  );

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames("", {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length
          && validateErrors.map((error) => (
            <Text key={error} theme={TextTheme.ERROR} text={validateErrorTranslates[error]} />
          ))}
        <ProfileCard
          data={formData}
          readonly={readonly}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
