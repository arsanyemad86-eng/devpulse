import type { User, Post, Comment } from '../types';

export const mockUsers: User[] = [
  {
    id: 'u1',
    username: 'arsany_dev',
    displayName: 'Arsany Emad',
    avatarUrl: 'https://i.pravatar.cc/150?u=u1',
    bio: 'Self-taught frontend developer | React & Tailwind',
    followersCount: 234,
    followingCount: 89,
    joinedAt: '2025-03-10',
  },
  {
    id: 'u2',
    username: 'sara_codes',
    displayName: 'Sara Mostafa',
    avatarUrl: 'https://i.pravatar.cc/150?u=u2',
    bio: 'Backend dev | Node.js & PostgreSQL',
    followersCount: 512,
    followingCount: 120,
    joinedAt: '2024-11-02',
  },
  {
    id: 'u3',
    username: 'omar_builds',
    displayName: 'Omar Khaled',
    avatarUrl: 'https://i.pravatar.cc/150?u=u3',
    bio: 'Learning full-stack, documenting the journey',
    followersCount: 67,
    followingCount: 145,
    joinedAt: '2025-06-15',
  },
];

export const mockPosts: Post[] = [
  {
    id: 'p1',
    authorId: 'u1',
    type: 'build-log',
    content: 'النهاردة ضفت Framer Motion animations في صفحة الـ feed، وحليت bug كان بيعمل double-flash.',
    createdAt: '2026-06-18T14:30:00Z',
    likesCount: 12,
    commentsCount: 3,
    projectName: 'DevPulse',
    progressPercentage: 65,
  },
  {
    id: 'p2',
    authorId: 'u2',
    type: 'question',
    content: 'إيه أفضل طريقة لعمل nested comments من غير ما الـ query تبقى تقيلة على الـ database؟',
    createdAt: '2026-06-17T09:15:00Z',
    likesCount: 8,
    commentsCount: 6,
    title: 'أفضل طريقة لعمل Nested Comments',
    tags: ['database', 'backend', 'sql'],
    isResolved: false,
  },
  {
    id: 'p3',
    authorId: 'u3',
    type: 'showcase',
    content: 'خلصت أول مشروع e-commerce ليا بالكامل بـ React و Tailwind!',
    createdAt: '2026-06-16T18:00:00Z',
    likesCount: 45,
    commentsCount: 9,
    projectTitle: 'UXNIN Store',
    projectUrl: 'https://uxnin-store.vercel.app',
    repoUrl: 'https://github.com/omar/uxnin-store',
    imageUrl: 'https://picsum.photos/seed/uxnin/600/400',
  },
];

export const mockComments: Comment[] = [
  {
    id: 'c1',
    postId: 'p1',
    authorId: 'u2',
    content: 'الـ double-flash bug ده عذبني قبل كده، عامله إزاي؟',
    createdAt: '2026-06-18T15:00:00Z',
    parentCommentId: null,
    likesCount: 2,
  },
  {
    id: 'c2',
    postId: 'p1',
    authorId: 'u1',
    content: 'كانت المشكلة في الـ AnimatePresence key، استخدمت useEffect cleanup',
    createdAt: '2026-06-18T15:20:00Z',
    parentCommentId: 'c1',
    likesCount: 4,
  },
];