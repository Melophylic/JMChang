// TCM Herbs hub-spoke diagram — like the cholesterol/hormone connection diagram
// Center: Hormonmu — spokes to 4 herbs with benefits
export default function TCMHerbsDiagram() {
  const herbs = [
    {
      name: "Dong Quai",
      nameCN: "当归",
      benefit: "Sirkulasi darah\n& anti-kram",
      emoji: "🌿",
      phase: "Luteal & Menstruasi",
      phaseColor: "#E8908D",
      angle: -90, // top
      cx: 300,
      cy: 88,
    },
    {
      name: "Red Dates",
      nameCN: "红枣",
      benefit: "Energi &\nzat besi",
      emoji: "🍒",
      phase: "Menstruasi & Luteal",
      phaseColor: "#C9A8D4",
      angle: 0, // right
      cx: 508,
      cy: 296,
    },
    {
      name: "Goji Berry",
      nameCN: "枸杞",
      benefit: "Liver &\nantioksidan",
      emoji: "🫐",
      phase: "Folikular & Ovulasi",
      phaseColor: "#7CC49A",
      angle: 90, // bottom
      cx: 300,
      cy: 504,
    },
    {
      name: "Rose",
      nameCN: "玫瑰",
      benefit: "Lancarkan Qi\n& mood",
      emoji: "🌹",
      phase: "Semua Fase",
      phaseColor: "#F0C060",
      angle: 180, // left
      cx: 92,
      cy: 296,
    },
  ];

  // Bezier control points for elegant curved spokes
  const spokes = [
    // top → center
    { d: "M 300 140 C 300 180 300 200 300 244", herb: herbs[0] },
    // right → center
    { d: "M 456 296 C 420 296 390 296 356 296", herb: herbs[1] },
    // bottom → center
    { d: "M 300 452 C 300 412 300 392 300 348", herb: herbs[2] },
    // left → center
    { d: "M 144 296 C 180 296 210 296 244 296", herb: herbs[3] },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 600 592"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Diagram Herbal TCM dan Manfaatnya"
      >
        {/* Subtle background circles (decorative) */}
        <circle cx="300" cy="296" r="260" fill="#FFF8F7" opacity="0.5" />
        <circle cx="300" cy="296" r="200" fill="#FDE6E5" opacity="0.2" />

        {/* Spokes / connecting lines */}
        {spokes.map((spoke, i) => (
          <path
            key={i}
            d={spoke.d}
            fill="none"
            stroke={spoke.herb.phaseColor}
            strokeWidth="1.5"
            strokeDasharray="5 4"
            opacity="0.7"
          />
        ))}

        {/* Arrowheads toward center */}
        {[
          { x: 300, y: 250, rotate: 0 },
          { x: 362, y: 296, rotate: -90 },
          { x: 300, y: 342, rotate: 180 },
          { x: 238, y: 296, rotate: 90 },
        ].map((arr, i) => (
          <polygon
            key={i}
            points="-5,-6 5,-6 0,4"
            fill={herbs[i].phaseColor}
            opacity="0.85"
            transform={`translate(${arr.x},${arr.y}) rotate(${arr.rotate})`}
          />
        ))}

        {/* Center circle — "Hormonmu" */}
        <circle cx="300" cy="296" r="56" fill="white" stroke="#F9D5D3" strokeWidth="2" />
        <circle cx="300" cy="296" r="50" fill="#FDE6E5" />
        <text
          x="300"
          y="289"
          textAnchor="middle"
          fill="#8B3E3E"
          fontSize="13"
          fontWeight="800"
          fontFamily="Playfair Display, Georgia, serif"
        >
          Hormon
        </text>
        <text
          x="300"
          y="306"
          textAnchor="middle"
          fill="#C96E6A"
          fontSize="12"
          fontWeight="700"
          fontFamily="Playfair Display, Georgia, serif"
        >
          Seimbang
        </text>

        {/* Herb nodes */}
        {herbs.map((herb) => (
          <g key={herb.name}>
            {/* Shadow */}
            <circle cx={herb.cx + 2} cy={herb.cy + 3} r="44" fill={herb.phaseColor} opacity="0.1" />
            {/* Main circle */}
            <circle cx={herb.cx} cy={herb.cy} r="44" fill="white" stroke={herb.phaseColor} strokeWidth="2" />
            {/* Inner circle */}
            <circle cx={herb.cx} cy={herb.cy} r="38" fill="white" />
            <circle cx={herb.cx} cy={herb.cy} r="38" fill={herb.phaseColor} opacity="0.1" />

            {/* Emoji icon */}
            <text
              x={herb.cx}
              y={herb.cy - 8}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="22"
            >
              {herb.emoji}
            </text>

            {/* Chinese name (small, elegant) */}
            <text
              x={herb.cx}
              y={herb.cy + 12}
              textAnchor="middle"
              fill={herb.phaseColor}
              fontSize="8"
              fontFamily="DM Sans, sans-serif"
              opacity="0.7"
              letterSpacing="2"
            >
              {herb.nameCN}
            </text>

            {/* English name below circle */}
            <text
              x={herb.cx}
              y={herb.cy + 58}
              textAnchor="middle"
              fill="#3D1A1A"
              fontSize="12"
              fontWeight="700"
              fontFamily="Playfair Display, Georgia, serif"
            >
              {herb.name}
            </text>

            {/* Benefit lines */}
            {herb.benefit.split("\n").map((line, li) => (
              <text
                key={li}
                x={herb.cx}
                y={herb.cy + 73 + li * 14}
                textAnchor="middle"
                fill="#7A3E3E"
                fontSize="9.5"
                fontFamily="DM Sans, sans-serif"
              >
                {line}
              </text>
            ))}

            {/* Phase badge */}
            <rect
              x={herb.cx - 38}
              y={herb.cy + 96}
              width="76"
              height="16"
              rx="8"
              fill={herb.phaseColor}
              opacity="0.2"
            />
            <text
              x={herb.cx}
              y={herb.cy + 108}
              textAnchor="middle"
              fill={herb.phaseColor}
              fontSize="8"
              fontWeight="600"
              fontFamily="DM Sans, sans-serif"
            >
              {herb.phase}
            </text>
          </g>
        ))}

        {/* Decorative corner dots */}
        {[
          { x: 60, y: 60 }, { x: 540, y: 60 },
          { x: 60, y: 532 }, { x: 540, y: 532 },
        ].map((pt, i) => (
          <circle key={i} cx={pt.x} cy={pt.y} r="3" fill="#F9D5D3" />
        ))}

        {/* Title */}
        <text
          x="300"
          y="572"
          textAnchor="middle"
          fill="#7A3E3E"
          fontSize="9"
          fontFamily="DM Sans, sans-serif"
          opacity="0.6"
          letterSpacing="2"
        >
          HERBAL TCM UNTUK KESEIMBANGAN HORMONAL
        </text>
      </svg>
    </div>
  );
}
