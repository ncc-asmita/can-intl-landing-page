export default function InfoCard({ icon, label, value }) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm text-red-900/60 font-medium">{label}</p>
        <p className="text-foreground font-semibold truncate">{value}</p>
      </div>
    </div>
  );
}
