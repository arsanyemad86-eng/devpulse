import { useParams } from 'react-router-dom';
import { mockPosts, mockUsers, mockComments } from '../data/mockData';
import { PostCard } from '../components/feed/PostCard';
import { CommentSection } from '../components/post/CommentSection';

export function PostDetail() {
  const { postId } = useParams();
  const post = mockPosts.find((p) => p.id === postId);
  const author = post ? mockUsers.find((u) => u.id === post.authorId) : null;

  if (!post || !author) {
    return <div className="p-8 text-zinc-400">Post not found.</div>;
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