import type { Comment } from '../types';

export interface CommentNode extends Comment {
  replies: CommentNode[];
}

export function buildCommentTree(comments: Comment[]): CommentNode[] {
  const nodeMap = new Map<string, CommentNode>();

  comments.forEach((comment) => {
    nodeMap.set(comment.id, { ...comment, replies: [] });
  });

  const roots: CommentNode[] = [];

  comments.forEach((comment) => {
    const node = nodeMap.get(comment.id)!;
    if (comment.parentCommentId === null) {
      roots.push(node);
    } else {
      const parent = nodeMap.get(comment.parentCommentId);
      if (parent) {
        parent.replies.push(node);
      }
    }
  });

  return roots;
}