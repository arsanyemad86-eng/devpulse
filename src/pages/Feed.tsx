import { useEffect } from 'react';
import { mockUsers } from '../data/mockData';
import { usePostsStore } from '../features/posts/postsStore';
import { PostCard } from '../components/feed/PostCard';
import { PostCardSkeleton } from '../components/feed/PostCardSkeleton';

export function Feed() {
  const posts = usePostsStore((state) => state.posts);
  const isLoading = usePostsStore((state) => state.isLoading);
  const fetchPosts = usePostsStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-4">
      <h1 className="text-2xl font-bold text-zinc-100 mb-6">Feed</h1>

      {isLoading && (
        <>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </>
      )}

      {!isLoading && posts.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          <p className="text-lg font-medium text-zinc-300">No posts yet</p>
          <p className="text-sm mt-1">Be the first to share something with the community.</p>
        </div>
      )}

      {!isLoading &&
        posts.map((post) => {
          const author = mockUsers.find((u) => u.id === post.authorId);
          if (!author) return null;

          return <PostCard key={post.id} post={post} author={author} />;
        })}
    </div>
  );
}