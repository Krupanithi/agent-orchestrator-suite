const statusStyles = {
  active: "bg-glow-success/10 text-glow-success border-glow-success/20",
  idle: "bg-muted text-muted-foreground border-border",
  busy: "bg-glow-warning/10 text-glow-warning border-glow-warning/20",
  error: "bg-destructive/10 text-destructive border-destructive/20",
};

interface StatusBadgeProps {
  status: keyof typeof statusStyles;
  label?: string;
}

const StatusBadge = ({ status, label }: StatusBadgeProps) => {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono border ${statusStyles[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-glow" />
      {label || status}
    </span>
  );
};

export default StatusBadge;
