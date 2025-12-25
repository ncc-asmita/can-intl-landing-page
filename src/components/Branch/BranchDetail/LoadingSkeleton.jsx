export default function LoadingSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="h-64 bg-muted rounded-2xl mb-10" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {[...Array(6)].map((_, i) => <div key={i} className="h-20 bg-muted rounded-lg" />)}
      </div>
    </div>
  );
}
