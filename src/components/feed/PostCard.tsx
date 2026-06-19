import type { Post, User } from '../../types';
import { Avatar } from '../ui/Avatar';
import { BuildLogCard } from '../post/BuildLogCard';
import { QuestionCard } from '../post/QuestionCard';
import { ShowcaseCard } from '../post/ShowcaseCard';

interface Props {
  post: Post;
  author: User;
}

export function PostCard({ post, author }: Props) {
  return (
    <article className="bg-surface border border-border rounded-xl p-4 space-y-3">
      <div className="flex items-center gap-3">
        <Avatar src={author.avatarUrl} alt={author.displayName} size="sm" />
        <div>
          <p className="text-sm font-medium text-zinc-100">{author.displayName}</p>
          <p className="text-xs text-zinc-500">@{author.username}</p>
        </div>
      </div>

      {post.type === 'build-log' && (
        <BuildLogCard post={post} />
      )}
      {post.type === 'question' && <QuestionCard post={post} />}
      {post.type === 'showcase' && <ShowcaseCard post={post} />}

      <div className="flex items-center gap-4 pt-2 text-xs text-zinc-500 border-t border-border">
        <span>{post.likesCount} likes</span>
        <span>{post.commentsCount} comments</span>
      </div>
    </article>
  );
}