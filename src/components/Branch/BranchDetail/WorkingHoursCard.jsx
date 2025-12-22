import { Clock } from "lucide-react";

export default function WorkingHoursCard({ day, index }) {
  const isOpen = day.startsAt && 
               day.closesAt && 
               day.startsAt !== "Closed" && 
               day.closesAt !== "Closed";

  return (
    <div
      className="group flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full ${
            isOpen ? "bg-green-500" : "bg-muted-foreground"
          }`}
        />
        <span className="font-semibold text-foreground">{day.day}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-muted-foreground" />
        <span
          className={
            isOpen ? "text-foreground" : "text-muted-foreground italic"
          }
        >
          {isOpen ? `${day.startsAt} - ${day.closesAt}` : "Closed"}
        </span>
      </div>
    </div>
  );
}
