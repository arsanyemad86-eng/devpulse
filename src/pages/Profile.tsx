import { useParams } from 'react-router-dom';
import { mockUsers } from '../data/mockData';
import { usePostsStore } from '../features/posts/postsStore';
import { useUsersStore } from '../features/users/usersStore';
import { PostCard } from '../components/feed/PostCard';

export function Profile() {
  const { userId } = useParams();
  const user = mockUsers.find((u) => u.id === userId);
  const posts = usePostsStore((state) => state.posts);
  const isFollowed = useUsersStore((state) =>
    userId ? state.followedUserIds.has(userId) : false
  );
  const toggleFollow = useUsersStore((state) => state.toggleFollow);

  if (!user) {
    return <div className="p-8 text-zinc-400">User not found.</div>;
  }

  const userPosts = posts.filter((p) => p.authorId === user.id);
  const isCurrentUser = user.id === 'u1';

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-100">{user.displayName}</h1>
          {!isCurrentUser && (
            <button
              onClick={() => toggleFollow(user.id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isFollowed
                  ? 'bg-surface text-zinc-300 border border-border'
                  : 'bg-primary text-white'
              }`}
            >
              {isFollowed ? 'Following' : 'Follow'}
            </button>
          )}
        </div>
        <p className="text-zinc-500">@{user.username}</p>
        <p className="text-zinc-400 text-sm">{user.bio}</p>
        <div className="flex gap-4 text-sm text-zinc-500 pt-2">
          <span>{user.followersCount} followers</span>
          <span>{user.followingCount} following</span>
        </div>
      </div>

      <div className="space-y-4">
        {userPosts.length === 0 ? (
          <div className="text-center py-16 text-zinc-500">
            <p className="text-lg font-medium text-zinc-300">No posts yet</p>
            <p className="text-sm mt-1">{user.displayName} hasn't shared anything yet.</p>
          </div>
        ) : (
          userPosts.map((post) => (
            <PostCard key={post.id} post={post} author={user} />
          ))
        )}
      </div>
    </div>
  );
}