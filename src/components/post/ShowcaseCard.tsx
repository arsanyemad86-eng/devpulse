import type { ShowcasePost } from '../../types';
import { Badge } from '../ui/Badge';

interface Props {
  post: ShowcasePost;
}

export function ShowcaseCard({ post }: Props) {
  return (
    <div className="space-y-3">
      <Badge variant="showcase">Showcase</Badge>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.projectTitle}
          className="w-full h-48 object-cover rounded-lg border border-border"
        />
      )}

      <h3 className="font-semibold text-zinc-100">{post.projectTitle}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed" dir="auto">{post.content}</p>

      <div className="flex gap-3 text-sm">
        {post.projectUrl && (
          <a href={post.projectUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo →
          </a>
        )}
        {post.repoUrl && (
          <a href={post.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Source Code →
          </a>
        )}
      </div>
    </div>
  );
}