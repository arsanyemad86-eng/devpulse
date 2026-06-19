interface BadgeProps {
  children: React.ReactNode;
  variant?: 'build-log' | 'question' | 'showcase';
}

const variantClasses = {
  'build-log': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'question': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'showcase': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

export function Badge({ children, variant = 'build-log' }: BadgeProps) {
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}