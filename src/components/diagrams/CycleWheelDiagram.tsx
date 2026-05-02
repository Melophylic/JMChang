// 4-phase donut wheel diagram — Pinterest style, JM Chang brand
// Segments computed: cx=300, cy=300, outer R=165, inner R=100, 5° gap between segments
export default function CycleWheelDiagram() {
  const segments = [
    {
      phase: "Menstruasi",
      days: "Hari 1–5",
      desc: "Istirahat & pulihkan",
      color: "#C9A8D4",
      bgColor: "#F3E5F5",
      // Arc: -87.5° to -2.5° (clockwise in SVG coords)
      outerPath:
        "M 307.2 135.1 A 165 165 0 0 1 464.9 292.8 L 399.9 295.6 A 100 100 0 0 0 304.4 200.1 Z",
      iconX: 430,
      iconY: 175,
      labelX: 490,
      labelY: 155,
      anchor: "start" as const,
      lineX1: 420,
      lineY1: 188,
      lineX2: 480,
      lineY2: 168,
    },
    {
      phase: "Folikular",
      days: "Hari 6–13",
      desc: "Energi naik & mulai",
      color: "#7CC49A",
      bgColor: "#E8F5E9",
      // Arc: 2.5° to 87.5°
      outerPath:
        "M 464.9 307.2 A 165 165 0 0 1 307.2 465.0 L 304.4 399.9 A 100 100 0 0 0 399.9 304.4 Z",
      iconX: 430,
      iconY: 425,
      labelX: 490,
      labelY: 448,
      anchor: "start" as const,
      lineX1: 420,
      lineY1: 415,
      lineX2: 480,
      lineY2: 432,
    },
    {
      phase: "Ovulasi",
      days: "Hari 14–16",
      desc: "Puncak energi & sosial",
      color: "#F0C060",
      bgColor: "#FFF8E1",
      // Arc: 92.5° to 177.5°
      outerPath:
        "M 292.8 465.0 A 165 165 0 0 1 135.1 307.2 L 200.1 304.4 A 100 100 0 0 0 295.6 399.9 Z",
      iconX: 170,
      iconY: 425,
      labelX: 110,
      labelY: 448,
      anchor: "end" as const,
      lineX1: 180,
      lineY1: 415,
      lineX2: 120,
      lineY2: 432,
    },
    {
      phase: "Luteal",
      days: "Hari 17–28",
      desc: "Tenang & persiapkan",
      color: "#E8908D",
      bgColor: "#FDE6E5",
      // Arc: 182.5° to 267.5°
      outerPath:
        "M 135.1 292.8 A 165 165 0 0 1 292.8 135.2 L 295.6 200.1 A 100 100 0 0 0 200.1 295.6 Z",
      iconX: 170,
      iconY: 175,
      labelX: 110,
      labelY: 155,
      anchor: "end" as const,
      lineX1: 180,
      lineY1: 188,
      lineX2: 120,
      lineY2: 168,
    },
  ];

  const icons = ["🌑", "🌱", "☀️", "🍂"];

  return (
    <div className="w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Diagram 4 Fase Siklus Menstruasi"
      >
        {/* Outer glow ring */}
        <circle
          cx="300"
          cy="300"
          r="175"
          fill="none"
          stroke="#F9D5D3"
          strokeWidth="8"
          opacity="0.5"
        />

        {/* Inner glow ring */}
        <circle
          cx="300"
          cy="300"
          r="90"
          fill="none"
          stroke="#F9D5D3"
          strokeWidth="8"
          opacity="0.5"
        />

        {/* Phase arc segments */}
        {segments.map((seg, i) => (
          <g key={seg.phase}>
            {/* Shadow layer */}
            <path
              d={seg.outerPath}
              fill={seg.color}
              opacity="0.12"
              transform="translate(2,3)"
            />
            {/* Main segment */}
            <path d={seg.outerPath} fill={seg.color} opacity="0.92" />
            {/* Highlight overlay */}
            <path d={seg.outerPath} fill="white" opacity="0.08" />

            {/* Icon in segment */}
            <text
              x={seg.iconX}
              y={seg.iconY}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="22"
            >
              {icons[i]}
            </text>

            {/* Connecting dotted line */}
            <line
              x1={seg.lineX1}
              y1={seg.lineY1}
              x2={seg.lineX2}
              y2={seg.lineY2}
              stroke={seg.color}
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.8"
            />

            {/* Small circle at line end */}
            <circle cx={seg.lineX2} cy={seg.lineY2} r="3" fill={seg.color} />

            {/* Phase label group */}
            <text
              x={seg.labelX}
              y={seg.labelY - 14}
              textAnchor={seg.anchor}
              fill="#3D1A1A"
              fontSize="13"
              fontWeight="700"
              fontFamily="Playfair Display, Georgia, serif"
            >
              {seg.phase}
            </text>
            <text
              x={seg.labelX}
              y={seg.labelY + 2}
              textAnchor={seg.anchor}
              fill={seg.color}
              fontSize="10.5"
              fontWeight="600"
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              {seg.days}
            </text>
            <text
              x={seg.labelX}
              y={seg.labelY + 17}
              textAnchor={seg.anchor}
              fill="#7A3E3E"
              fontSize="9.5"
              fontFamily="DM Sans, system-ui, sans-serif"
              opacity="0.85"
            >
              {seg.desc}
            </text>
          </g>
        ))}

        {/* Center white circle */}
        <circle cx="300" cy="300" r="87" fill="white" />
        <circle cx="300" cy="300" r="87" fill="#FFF8F7" />

        {/* Center decorative ring */}
        <circle
          cx="300"
          cy="300"
          r="82"
          fill="none"
          stroke="#F9D5D3"
          strokeWidth="1"
        />

        {/* Center text */}
        <text
          x="300"
          y="278"
          textAnchor="middle"
          fill="#C96E6A"
          fontSize="38"
          fontWeight="800"
          fontFamily="Playfair Display, Georgia, serif"
        >
          28
        </text>
        <text
          x="300"
          y="298"
          textAnchor="middle"
          fill="#3D1A1A"
          fontSize="12"
          fontWeight="600"
          fontFamily="DM Sans, system-ui, sans-serif"
          letterSpacing="1.5"
        >
          HARI
        </text>
        <text
          x="300"
          y="315"
          textAnchor="middle"
          fill="#7A3E3E"
          fontSize="10"
          fontFamily="DM Sans, system-ui, sans-serif"
          opacity="0.8"
        >
          siklus kamu
        </text>

        {/* Tiny decorative dots between segments */}
        {[{x: 300, y: 132}, {x: 468, y: 300}, {x: 300, y: 468}, {x: 132, y: 300}].map(
          (pt, i) => (
            <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="#FDE6E5" stroke="#E8A8A5" strokeWidth="1.5" />
          )
        )}

        {/* Title below */}
        <text
          x="300"
          y="552"
          textAnchor="middle"
          fill="#7A3E3E"
          fontSize="11"
          fontFamily="DM Sans, system-ui, sans-serif"
          opacity="0.7"
          letterSpacing="2"
        >
          SIKLUS HORMON PEREMPUAN
        </text>
      </svg>
    </div>
  );
}
