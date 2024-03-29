import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import {
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelector";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";

import cls from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
  isLoading?: boolean;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment, isLoading = false } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);

  const handleCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const handleSendComment = useCallback(() => {
    onSendComment(text || "");
    handleCommentTextChange("");
  }, [handleCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t("Введите текст комментария")}
          value={text}
          onChange={handleCommentTextChange}
          disabled={isLoading}
        />
        <Button
          onClick={handleSendComment}
          disabled={isLoading}
          theme={ButtonTheme.OUTLINE}
        >
          {t("Отправить")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
