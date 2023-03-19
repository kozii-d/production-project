import { classNames } from "shared/lib/classNames/classNames";

import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => setIsAuthModal((prevState) => !prevState), []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={onToggleModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, esse laborum magni natus nemo possimus vitae. Amet deserunt dolores eius esse est explicabo laudantium sapiente? Amet aspernatur consectetur doloremque recusandae?
      </Modal>
    </div>
  );
};
