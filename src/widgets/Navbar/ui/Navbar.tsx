import { memo, useCallback, useState } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import { getUserAuthData, userActions } from "entities/User";

import { LoginModal } from "features/AuthByUsername";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const handleShowModal = useCallback(() => setIsAuthModal(true), []);
  const handleClose = useCallback(() => setIsAuthModal(false), []);
  const handleLogOut = useCallback(() => dispatch(userActions.logout()), [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          onClick={handleLogOut}
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={handleShowModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleClose} />}
    </header>
  );
});
