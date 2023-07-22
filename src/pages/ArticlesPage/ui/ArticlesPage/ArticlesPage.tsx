import { classNames } from "shared/lib/classNames/classNames";

import { useCallback } from "react";
import { ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import cls from "./ArticlesPage.module.scss";
import { articlesPageActions, articlesPageReducer, getArticles } from "../../model/slice/articlesPageSlice";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.articlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
