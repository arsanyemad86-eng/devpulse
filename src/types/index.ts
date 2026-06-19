export type PostType = 'build-log' | 'question' | 'showcase';

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  joinedAt: string;
}

export interface BasePost {
  id: string;
  authorId: string;
  type: PostType;
  content: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
}

export interface BuildLogPost extends BasePost {
  type: 'build-log';
  projectName: string;
  progressPercentage?: number;
}

export interface QuestionPost extends BasePost {
  type: 'question';
  title: string;
  tags: string[];
  isResolved: boolean;
}

export interface ShowcasePost extends BasePost {
  type: 'showcase';
  projectTitle: string;
  projectUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
}

export type Post = BuildLogPost | QuestionPost | ShowcasePost;

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: string;
  parentCommentId: string | null;
  likesCount: number;
}