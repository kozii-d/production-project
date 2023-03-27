import { classNames } from "shared/lib/classNames/classNames";

import { Modal } from "shared/ui/Modal/Modal";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    onClose();
    dispatch(loginActions.clearError());
  }, [dispatch, onClose]);

  return (
    <Modal
      className={classNames("", {}, [className])}
      lazy
      isOpen={isOpen}
      onClose={handleClose}
    >
      <LoginForm />
    </Modal>
  );
};
