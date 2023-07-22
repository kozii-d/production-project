import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import {
  memo, Suspense, useCallback,
} from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AddCommentForm } from "features/addCommentForm";
import { Loader } from "shared/ui/Loader/Loader";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig";
import { getArticleDetailsError } from "entities/Article/model/selectors/articleDetails";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsAdding, getArticleCommentsIsLoading } from "../../model/selectors/comments";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article-details");
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const commentsIsAdding = useSelector(getArticleCommentsIsAdding);
  const error = useSelector(getArticleDetailsError);

  const handleSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  const handleBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <Button onClick={handleBackToList} theme={ButtonTheme.OUTLINE}>
          {t("Назад к списку")}
        </Button>
        <Text
          className={cls.error}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          text={t("При загрузке статьи произошла ошибка.")}
        />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <Button onClick={handleBackToList} theme={ButtonTheme.OUTLINE}>
          {t("Назад к списку")}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t("Комментарии")} />
        <Suspense fallback={<Loader />}>
          <AddCommentForm
            onSendComment={handleSendComment}
            isLoading={commentsIsAdding || commentsIsLoading}
          />
        </Suspense>
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
