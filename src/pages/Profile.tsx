import { useParams } from 'react-router-dom';
import { mockUsers, mockPosts } from '../data/mockData';
import { PostCard } from '../components/feed/PostCard';

export function Profile() {
  const { userId } = useParams();
  const user = mockUsers.find((u) => u.id === userId);

  if (!user) {
    return <div className="p-8 text-zinc-400">User not found.</div>;
  }

  const userPosts = mockPosts.filter((p) => p.authorId === user.id);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-zinc-100">{user.displayName}</h1>
        <p className="text-zinc-500">@{user.username}</p>
        <p className="text-zinc-400 text-sm">{user.bio}</p>
        <div className="flex gap-4 text-sm text-zinc-500 pt-2">
          <span>{user.followersCount} followers</span>
          <span>{user.followingCount} following</span>
        </div>
      </div>

      <div className="space-y-4">
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} author={user} />
        ))}
      </div>
    </div>
  );
}