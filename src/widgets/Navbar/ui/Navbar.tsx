import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => setIsAuthModal(true), []);
  const onClose = useCallback(() => setIsAuthModal(false), []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={onShowModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
      >
        {t("Войти")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onClose} />
    </div>
  );
};
