export function PostCardSkeleton() {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 space-y-3 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-border" />
        <div className="space-y-2">
          <div className="h-3 w-24 bg-border rounded" />
          <div className="h-2 w-16 bg-border rounded" />
        </div>
      </div>
      <div className="h-5 w-20 bg-border rounded-full" />
      <div className="space-y-2">
        <div className="h-3 w-full bg-border rounded" />
        <div className="h-3 w-3/4 bg-border rounded" />
      </div>
    </div>
  );
}