import { Briefcase, Tag } from "lucide-react";

export default function ServiceCard({ service, index }) {
  return (
    <div className="group bg-card rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-elevated transition-all duration-300 animate-slide-up"
         style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-full">
          <Tag className="w-3 h-3 text-secondary-foreground" />
          <span className="text-xs font-medium text-secondary-foreground">{service.code}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.name}</h3>
      {service.type?.name && (
        <p className="text-sm text-muted-foreground mb-3">
          Type: <span className="font-medium text-foreground">{service.type.name}</span>
        </p>
      )}
      <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
    </div>
  );
}
