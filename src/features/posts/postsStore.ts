import { create } from 'zustand';
import type { Post } from '../../types';
import { mockPosts } from '../../data/mockData';

interface PostsState {
  posts: Post[];
  isLoading: boolean;
  likedPostIds: Set<string>;
  fetchPosts: () => void;
  addPost: (post: Post) => void;
  toggleLike: (postId: string) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  isLoading: true,
  likedPostIds: new Set(),

  fetchPosts: () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ posts: mockPosts, isLoading: false });
    }, 600);
  },

  addPost: (post) =>
    set((state) => ({ posts: [post, ...state.posts] })),

  toggleLike: (postId) =>
    set((state) => {
      const liked = new Set(state.likedPostIds);
      const isLiked = liked.has(postId);

      if (isLiked) {
        liked.delete(postId);
      } else {
        liked.add(postId);
      }

      const posts = state.posts.map((p) =>
        p.id === postId
          ? { ...p, likesCount: p.likesCount + (isLiked ? -1 : 1) }
          : p
      );

      return { posts, likedPostIds: liked };
    }),
}));