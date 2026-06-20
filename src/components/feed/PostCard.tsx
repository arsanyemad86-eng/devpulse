import { useNavigate } from 'react-router-dom';
import type { Post, User } from '../../types';
import { Avatar } from '../ui/Avatar';
import { BuildLogCard } from '../post/BuildLogCard';
import { QuestionCard } from '../post/QuestionCard';
import { ShowcaseCard } from '../post/ShowcaseCard';
import { usePostsStore } from '../../features/posts/postsStore';

interface Props {
  post: Post;
  author: User;
}

export function PostCard({ post, author }: Props) {
  const navigate = useNavigate();
  const toggleLike = usePostsStore((state) => state.toggleLike);
  const isLiked = usePostsStore((state) => state.likedPostIds.has(post.id));

  return (
    <article
      onClick={() => navigate(`/post/${post.id}`)}
      className="bg-surface border border-border rounded-xl p-4 space-y-3 cursor-pointer hover:border-zinc-700 transition-colors"
    >
      <div className="flex items-center gap-3">
        <Avatar src={author.avatarUrl} alt={author.displayName} size="sm" />
        <div>
          <p className="text-sm font-medium text-zinc-100">{author.displayName}</p>
          <p className="text-xs text-zinc-500">@{author.username}</p>
        </div>
      </div>

      {post.type === 'build-log' && <BuildLogCard post={post} />}
      {post.type === 'question' && <QuestionCard post={post} />}
      {post.type === 'showcase' && <ShowcaseCard post={post} />}

      <div className="flex items-center gap-4 pt-2 text-xs border-t border-border">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(post.id);
          }}
          className={`flex items-center gap-1 transition-colors ${
            isLiked ? 'text-primary' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          {isLiked ? '♥' : '♡'} {post.likesCount} likes
        </button>
        <span className="text-zinc-500">{post.commentsCount} comments</span>
      </div>
    </article>
  );
}