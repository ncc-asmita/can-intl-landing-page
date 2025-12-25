import { Clock } from "lucide-react";

export default function WorkingHoursCard({ day, index }) {
  const isOpen =
    day.startsAt &&
    day.closesAt &&
    day.startsAt !== "Closed" &&
    day.closesAt !== "Closed";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const isToday = today.toLowerCase() === day.day.toLowerCase();

  return (
    <div
      className={`group flex items-center justify-between p-4 bg-card rounded-lg border transition-all duration-300 animate-fade-in ${
        isToday 
          ? 'border-red-200 bg-red-50 shadow-md hover:shadow-lg hover:border-red-300' 
          : 'border-border hover:border-primary/30 hover:shadow-medium'
      }`}
      style={{ 
        animationDelay: `${index * 50}ms`,
        ...(isToday && { backgroundColor: 'rgba(220, 30, 62, 0.05)' })
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full transition-colors ${
            isOpen 
              ? (isToday ? "bg-red-500" : "bg-green-500") 
              : "bg-muted-foreground"
          }`}
        />
        <span className={`font-semibold ${isToday ? 'text-red-700' : 'text-foreground'}`}>
          {day.day}
          {isToday && (
            <span 
              className="ml-2 text-xs text-white px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: 'var(--custom-red)' }}
            >
              Today
            </span>
          )}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className={`w-4 h-4 transition-colors ${isToday ? 'text-red-600' : 'text-muted-foreground'}`} />
        <span
          className={`transition-colors ${
            isOpen 
              ? (isToday ? "text-red-700 font-medium" : "text-foreground") 
              : "text-muted-foreground italic"
          }`}
        >
          {isOpen ? `${day.startsAt} - ${day.closesAt}` : "Closed"}
        </span>
      </div>
    </div>
  );
}
