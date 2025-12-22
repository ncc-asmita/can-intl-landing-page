import { Building2, AlertCircle } from "lucide-react";

export default function EmptyState({ type }) {
  if (type === 'not-found') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Branch Not Found</h2>
        <p className="text-muted-foreground max-w-md">We couldn't find the branch you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="text-center py-12 px-4 border border-dashed border-border rounded-xl bg-muted/30">
      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
        <Building2 className="w-8 h-8 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground font-medium">No services available at this branch</p>
    </div>
  );
}
