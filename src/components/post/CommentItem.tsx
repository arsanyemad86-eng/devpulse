import { useState } from 'react';
import type { User } from '../../types';
import type { CommentNode } from '../../lib/buildCommentTree';
import { Avatar } from '../ui/Avatar';

interface Props {
  comment: CommentNode;
  users: User[];
  depth?: number;
  onReply: (parentId: string, content: string) => void;
}

export function CommentItem({ comment, users, depth = 0, onReply }: Props) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const author = users.find((u) => u.id === comment.authorId);
  if (!author) return null;

  const handleReplySubmit = () => {
    if (replyText.trim() === '') return;
    onReply(comment.id, replyText.trim());
    setReplyText('');
    setShowReplyForm(false);
  };

  return (
    <div className={depth > 0 ? 'ms-6 ps-4 border-s border-border' : ''}>
      <div className="flex gap-3 py-3">
        <Avatar src={author.avatarUrl} alt={author.displayName} size="sm" />
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-zinc-100">{author.displayName}</span>
            <span className="text-xs text-zinc-500">@{author.username}</span>
          </div>
          <p className="text-sm text-zinc-300">{comment.content}</p>
          <div className="flex items-center gap-4 text-xs text-zinc-500 pt-1">
            <span>{comment.likesCount} likes</span>
            <button
              onClick={() => setShowReplyForm((prev) => !prev)}
              className="hover:text-zinc-300 transition-colors"
            >
              Reply
            </button>
          </div>

          {showReplyForm && (
            <div className="flex gap-2 pt-2">
              <input
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="flex-1 bg-surface border border-border rounded-lg px-3 py-1.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
                onKeyDown={(e) => e.key === 'Enter' && handleReplySubmit()}
              />
              <button
                onClick={handleReplySubmit}
                className="text-sm text-primary font-medium px-3"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>

      {comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} users={users} depth={depth + 1} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
}