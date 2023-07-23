import {
  Suspense, useCallback,
} from "react";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { RoutePath } from "shared/config/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Loader } from "shared/ui/Loader/Loader";
import { Page } from "shared/ui/Page/Page";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";

import { ArticleDetails } from "entities/Article";
import { getArticleDetailsError } from "entities/Article/model/selectors/articleDetails";
import { CommentList } from "entities/Comment";

import { AddCommentForm } from "features/addCommentForm";

import { getArticleCommentsIsAdding, getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";

import cls from "./ArticleDetailsPage.module.scss";

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
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
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
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
