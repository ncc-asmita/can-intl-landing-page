import { Package, ArrowRight, Truck, Clock } from "lucide-react";

export function OrderPromptCard({ branchName, onOrderClick }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-custom-slate to-custom-slate-light p-6 sm:p-8 shadow-elevated border border-gray-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div 
            className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: 'var(--custom-red)' }}
          >
            <Package className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-1">
              Ready to Ship?
            </h3>
            <p className="text-primary-foreground/70 text-sm sm:text-base">
              Send your parcels abroad from{" "}
              <span style={{ color: 'var(--custom-red)' }} className="font-medium">{branchName}</span>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Truck className="w-4 h-4" style={{ color: 'var(--custom-red)' }} />
            <span className="text-sm">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="w-4 h-4" style={{ color: 'var(--custom-red)' }} />
            <span className="text-sm">Track Anytime</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOrderClick}
          className="group w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl select-none focus:outline-none"
          style={{ 
            backgroundColor: 'var(--custom-red)',
            color: 'white',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#c60000'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--custom-red)'}
        >
          <span style={{ color: 'white' }}>Place Your Order Now</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: 'white' }} />
        </button>
      </div>
    </div>
  );
}
