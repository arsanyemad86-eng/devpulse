import { Link } from 'react-router-dom';
import { mockPosts, mockUsers } from '../data/mockData';
import { PostCard } from '../components/feed/PostCard';

export function Feed() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-4">
      <h1 className="text-2xl font-bold text-zinc-100 mb-6">Feed</h1>

      {mockPosts.map((post) => {
        const author = mockUsers.find((u) => u.id === post.authorId);
        if (!author) return null;

        return (
          <Link key={post.id} to={`/post/${post.id}`} className="block">
            <PostCard post={post} author={author} />
          </Link>
        );
      })}
    </div>
  );
}