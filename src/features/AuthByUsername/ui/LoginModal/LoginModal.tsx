import { Suspense, useCallback } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";

import { loginActions } from "../../model/slices/loginSlice";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

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
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
