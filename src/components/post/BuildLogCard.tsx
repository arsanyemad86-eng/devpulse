import type { BuildLogPost } from '../../types';
import { Badge } from '../ui/Badge';

interface Props {
  post: BuildLogPost;
}

export function BuildLogCard({ post }: Props) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Badge variant="build-log">Build Log</Badge>
        <span className="text-sm text-zinc-500">{post.projectName}</span>
      </div>

      <p className="text-zinc-200 leading-relaxed" dir="auto">{post.content}</p>

      {post.progressPercentage !== undefined && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>Progress</span>
            <span>{post.progressPercentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${post.progressPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}