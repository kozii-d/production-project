import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";

import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";
import type { Comment } from "../../model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames("", {}, [className])}>
      {comments?.length ? comments.map((comment) => (
        <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />
      )) : <Text text={t("Комментарии отсутствуют")} />}
    </div>
  );
});
