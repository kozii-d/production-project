import { EntityState } from "@reduxjs/toolkit";

import type { Comment } from "entities/Comment/model/types/comment";

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  isAdding?: boolean
  error?: string;
}
