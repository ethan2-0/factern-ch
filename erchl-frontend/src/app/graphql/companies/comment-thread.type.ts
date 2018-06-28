/*
 * comment-thread.type.ts
 *
 * Copyright (C) 2018 Finovertech
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

import { Comment } from './comment.type';

export interface CommentThread {
  count: number;
  comments: Comment[];
}
