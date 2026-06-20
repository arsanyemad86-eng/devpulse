import { create } from 'zustand';

interface UsersState {
  followedUserIds: Set<string>;
  toggleFollow: (userId: string) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
  followedUserIds: new Set(),

  toggleFollow: (userId) =>
    set((state) => {
      const followed = new Set(state.followedUserIds);
      if (followed.has(userId)) {
        followed.delete(userId);
      } else {
        followed.add(userId);
      }
      return { followedUserIds: followed };
    }),
}));