export const TypeBadge = ({ type, colorClass }: { type: string, colorClass: string }) => (
  <span className={`badge ${colorClass}`}>{type}</span>
);