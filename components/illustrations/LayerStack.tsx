export default function LayerStack({ className = "" }: { className?: string }) {
  const layer = (y: number, stroke: string, strokeWidth = 1.5) => (
    <polygon
      points={`100,${y} 180,${y + 22} 100,${y + 44} 20,${y + 22}`}
      fill="var(--surface)"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );

  return (
    <svg viewBox="0 0 200 170" className={className} fill="none">
      {layer(96, "var(--border)")}
      {layer(58, "var(--border)")}
      {layer(20, "var(--accent)", 2)}
    </svg>
  );
}
