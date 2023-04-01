import { classNames } from "shared/lib/classNames/classNames";

import { Modal } from "shared/ui/Modal/Modal";
import { Suspense, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Loader } from "shared/ui/Loader/Loader";
import { loginActions } from "../../model/slice/loginSlice";
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
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
