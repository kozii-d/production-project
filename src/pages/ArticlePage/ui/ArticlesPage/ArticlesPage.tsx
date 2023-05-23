import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { memo } from "react";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.articlesPage, {}, [className])} />
  );
};

export default memo(ArticlesPage);
