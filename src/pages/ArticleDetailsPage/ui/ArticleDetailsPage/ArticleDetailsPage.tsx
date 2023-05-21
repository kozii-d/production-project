import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article");

  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      ArticleDetailsPage
    </div>
  );
};

export default memo(ArticleDetailsPage);
