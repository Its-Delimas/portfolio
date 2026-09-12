const nodes = [
  { x: 60, y: 90 },
  { x: 180, y: 40 },
  { x: 320, y: 110, accent: true },
  { x: 460, y: 50 },
  { x: 580, y: 130 },
  { x: 140, y: 220, accent: true },
  { x: 300, y: 260 },
  { x: 470, y: 230, accent: true },
  { x: 600, y: 300 },
  { x: 70, y: 340 },
  { x: 230, y: 400 },
  { x: 400, y: 380 },
  { x: 540, y: 420 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [2, 6],
  [3, 7],
  [4, 8],
  [5, 6],
  [6, 7],
  [7, 8],
  [5, 9],
  [6, 10],
  [7, 11],
  [8, 12],
  [9, 10],
  [10, 11],
  [11, 12],
];

export default function NetworkGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--border)" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.accent ? 5 : 3}
          fill={n.accent ? "var(--accent)" : "var(--muted)"}
          opacity={n.accent ? 0.9 : 0.5}
          className={n.accent ? "node-pulse" : undefined}
          style={n.accent ? { animationDelay: `${i * 0.4}s` } : undefined}
        />
      ))}
    </svg>
  );
}
