import { useState } from 'react';
import type { Comment, User } from '../../types';
import { buildCommentTree } from '../../lib/buildCommentTree';
import { CommentItem } from './CommentItem';
import { mockUsers } from '../../data/mockData';

interface Props {
  postId: string;
  initialComments: Comment[];
}

export function CommentSection({ postId, initialComments }: Props) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newCommentText, setNewCommentText] = useState('');

  const currentUser = mockUsers[0]; // محل auth لاحقًا، هنفترض اليوزر الحالي هو الأول مؤقتًا

  const handleAddComment = (parentId: string | null, content: string) => {
    const newComment: Comment = {
      id: `c${Date.now()}`,
      postId,
      authorId: currentUser.id,
      content,
      createdAt: new Date().toISOString(),
      parentCommentId: parentId,
      likesCount: 0,
    };
    setComments((prev) => [...prev, newComment]);
  };

  const tree = buildCommentTree(comments);

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-sm font-semibold text-zinc-300">
        {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
      </h3>

      <div className="flex gap-2">
        <input
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && newCommentText.trim() !== '') {
              handleAddComment(null, newCommentText.trim());
              setNewCommentText('');
            }
          }}
        />
      </div>

      <div className="divide-y divide-border">
        {tree.map((comment) => (
          <CommentItem key={comment.id} comment={comment} users={mockUsers} onReply={handleAddComment} />
        ))}
      </div>
    </div>
  );
}