import { mockUsers } from '../data/mockData';
import { usePosts } from '../features/posts/PostsContext';
import { PostCard } from '../components/feed/PostCard';

export function Feed() {
  const { posts } = usePosts();

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-4">
      <h1 className="text-2xl font-bold text-zinc-100 mb-6">Feed</h1>

      {posts.map((post) => {
        const author = mockUsers.find((u) => u.id === post.authorId);
        if (!author) return null;

        return <PostCard key={post.id} post={post} author={author} />;
      })}
    </div>
  );
}