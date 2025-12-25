import { MapPin, Phone, Building2 } from "lucide-react";

export default function BranchHero({ name, address, code, phone }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-brand-dark p-8 md:p-12 mb-10 animate-fade-in">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
            Branch #{code}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {name}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm md:text-base">{address}</span>
          </div>
          {phone && (
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <a
                href={`tel:${phone}`}
                className="text-sm md:text-base hover:underline"
              >
                {phone}
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="absolute right-8 bottom-8 opacity-10">
        <Building2 className="w-32 h-32 md:w-48 md:h-48 text-white" />
      </div>
    </div>
  );
}
