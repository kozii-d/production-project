import { classNames } from "shared/lib/classNames/classNames";

import { memo } from "react";
import { ArticleImageBlock } from "entities/Article/model/types/article";
import { Text, TextAlign } from "shared/ui/Text/Text";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
  <div className={classNames("", {}, [className])}>
    <img src={block.src} alt={block.title} className={cls.img} />
    {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
  </div>
));
