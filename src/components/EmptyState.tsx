import './EmptyState.css';

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <svg viewBox="0 0 100 100" width="48" height="48">
        <circle cx="50" cy="50" r="48" stroke="var(--text-dim)" strokeWidth="3" fill="none"/>
        <path d="M2 50a48 48 0 0 1 96 0" fill="none" stroke="var(--text-dim)" strokeWidth="3"/>
        <line x1="2" y1="50" x2="98" y2="50" stroke="var(--text-dim)" strokeWidth="3"/>
        <circle cx="50" cy="50" r="14" stroke="var(--text-dim)" strokeWidth="3" fill="none"/>
      </svg>
      <p>{message}</p>
    </div>
  );
}
