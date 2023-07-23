import { memo, useCallback } from "react";

import ListIcon from "shared/assets/icons/list.svg";
import TiledIcon from "shared/assets/icons/tiled.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

import { ArticleView } from "../../model/types/article";

import cls from "./ArticleViewSelector.module.scss";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView,
  onViewClick?: (view: ArticleView) => void,
}

const viewTypes = [
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const handleClick = useCallback((newView) => () => {
    onViewClick?.(newView);
  }, [onViewClick]);

  return (
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={handleClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames("", { [cls.notSelected]: viewType.view !== view })}
          />
        </Button>
      ))}
    </div>
  );
});
