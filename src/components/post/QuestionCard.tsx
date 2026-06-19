import type { QuestionPost } from '../../types';
import { Badge } from '../ui/Badge';

interface Props {
  post: QuestionPost;
}

export function QuestionCard({ post }: Props) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="question">Question</Badge>
        {post.isResolved && (
          <span className="text-xs text-emerald-400">✓ Resolved</span>
        )}
      </div>

      <h3 className="font-semibold text-zinc-100">{post.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{post.content}</p>

      <div className="flex gap-2 flex-wrap">
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs text-zinc-500 bg-surface px-2 py-1 rounded-md">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}