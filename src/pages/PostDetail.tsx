import { useParams } from 'react-router-dom';
import { mockUsers, mockComments } from '../data/mockData';
import { usePostsStore } from '../features/posts/postsStore';
import { PostCard } from '../components/feed/PostCard';
import { CommentSection } from '../components/post/CommentSection';

export function PostDetail() {
  const { postId } = useParams();
  const posts = usePostsStore((state) => state.posts);
  const post = posts.find((p) => p.id === postId);
  const author = post ? mockUsers.find((u) => u.id === post.authorId) : null;

  if (!post || !author) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <p className="text-lg font-medium text-zinc-300">Post not found</p>
        <p className="text-sm text-zinc-500 mt-1">This post doesn't exist or may have been removed.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <PostCard post={post} author={author} />
      <CommentSection
        postId={post.id}
        initialComments={mockComments.filter((c) => c.postId === post.id)}
      />
    </div>
  );
}