export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 bg-primary rounded-full" />
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground ml-4 pl-3">{subtitle}</p>
      )}
    </div>
  );
}
