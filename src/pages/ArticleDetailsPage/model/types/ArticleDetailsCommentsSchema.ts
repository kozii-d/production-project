import type { Comment } from "entities/Comment/model/types/comment";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string;
}
