// Hormone wave chart — Pinterest style
// Shows Estrogen + Progesterone curves over 28-day cycle
// Plot area: x 60→540, y 24→220 (height 196), total SVG 600 x 340
export default function HormoneWaveChart() {
  const phases = [
    { name: "Menstruasi", days: "1–5", x1: 60, x2: 123, color: "#C9A8D4", bg: "#F5EEF8" },
    { name: "Folikular", days: "6–13", x1: 123, x2: 254, color: "#7CC49A", bg: "#EEF8F2" },
    { name: "Ovulasi", days: "14–16", x1: 254, x2: 303, color: "#F0C060", bg: "#FDF8EC" },
    { name: "Luteal", days: "17–28", x1: 303, x2: 540, color: "#E8908D", bg: "#FEF1F0" },
  ];

  // Estrogen curve — rises in follicular, sharp peak at ovulation, smaller plateau in luteal
  const estrogenPath =
    "M 60 195 C 75 195 90 190 123 175 C 155 160 195 105 254 52 C 270 40 285 55 303 130 C 318 160 340 150 380 148 C 420 146 460 165 490 178 C 510 186 525 192 540 195";

  // Progesterone curve — flat/low, rises sharply mid-luteal, drops before menstruation
  const progesteronePath =
    "M 60 200 C 100 200 200 200 254 200 C 270 200 285 198 303 195 C 325 192 360 130 400 95 C 425 75 450 80 480 100 C 500 115 520 150 540 195";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 600 340"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Grafik Hormon Estrogen dan Progesteron Selama 28 Hari"
      >
        {/* Phase background bands */}
        {phases.map((ph) => (
          <rect
            key={ph.name}
            x={ph.x1}
            y={24}
            width={ph.x2 - ph.x1}
            height={196}
            fill={ph.bg}
            opacity="0.7"
          />
        ))}

        {/* Phase vertical dividers */}
        {[123, 254, 303].map((x) => (
          <line
            key={x}
            x1={x}
            y1={24}
            x2={x}
            y2={220}
            stroke="#E8C8C5"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        ))}

        {/* Horizontal grid lines */}
        {[60, 110, 160].map((y) => (
          <line
            key={y}
            x1={60}
            y1={y}
            x2={540}
            y2={y}
            stroke="#F0DDD9"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        {/* X axis */}
        <line x1="60" y1="220" x2="540" y2="220" stroke="#D4A5A2" strokeWidth="1.5" />

        {/* Estrogen fill area */}
        <path
          d={`${estrogenPath} L 540 220 L 60 220 Z`}
          fill="#C96E6A"
          opacity="0.07"
        />

        {/* Progesterone fill area */}
        <path
          d={`${progesteronePath} L 540 220 L 60 220 Z`}
          fill="#9C7BB5"
          opacity="0.07"
        />

        {/* Estrogen curve */}
        <path
          d={estrogenPath}
          fill="none"
          stroke="#C96E6A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Progesterone curve */}
        <path
          d={progesteronePath}
          fill="none"
          stroke="#9C7BB5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="6 3"
        />

        {/* Ovulation peak dot (estrogen) */}
        <circle cx="254" cy="52" r="5" fill="#C96E6A" />
        <circle cx="254" cy="52" r="9" fill="#C96E6A" opacity="0.2" />

        {/* Progesterone peak dot */}
        <circle cx="400" cy="95" r="5" fill="#9C7BB5" />
        <circle cx="400" cy="95" r="9" fill="#9C7BB5" opacity="0.2" />

        {/* Estrogen peak label */}
        <text x="258" y="38" fill="#C96E6A" fontSize="9.5" fontWeight="700" fontFamily="DM Sans, sans-serif">
          Estrogen
        </text>
        <text x="258" y="50" fill="#C96E6A" fontSize="8.5" fontFamily="DM Sans, sans-serif" opacity="0.75">
          puncak
        </text>

        {/* Progesterone peak label */}
        <text x="404" y="83" fill="#9C7BB5" fontSize="9.5" fontWeight="700" fontFamily="DM Sans, sans-serif">
          Progesteron
        </text>
        <text x="404" y="95" fill="#9C7BB5" fontSize="8.5" fontFamily="DM Sans, sans-serif" opacity="0.75">
          puncak
        </text>

        {/* Phase labels below x-axis */}
        {phases.map((ph) => (
          <g key={ph.name}>
            {/* Phase colored bar */}
            <rect
              x={ph.x1 + 2}
              y={228}
              width={ph.x2 - ph.x1 - 4}
              height={6}
              rx="3"
              fill={ph.color}
              opacity="0.8"
            />
            {/* Phase name */}
            <text
              x={(ph.x1 + ph.x2) / 2}
              y={248}
              textAnchor="middle"
              fill="#3D1A1A"
              fontSize="10"
              fontWeight="700"
              fontFamily="Playfair Display, Georgia, serif"
            >
              {ph.name}
            </text>
            {/* Days */}
            <text
              x={(ph.x1 + ph.x2) / 2}
              y={261}
              textAnchor="middle"
              fill={ph.color}
              fontSize="8.5"
              fontFamily="DM Sans, sans-serif"
              fontWeight="600"
            >
              Hari {ph.days}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g transform="translate(60, 285)">
          <line x1="0" y1="7" x2="20" y2="7" stroke="#C96E6A" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="10" cy="7" r="3" fill="#C96E6A" />
          <text x="26" y="11" fill="#3D1A1A" fontSize="10" fontFamily="DM Sans, sans-serif">
            Estrogen
          </text>

          <line x1="90" y1="7" x2="110" y2="7" stroke="#9C7BB5" strokeWidth="2.5" strokeDasharray="5 2" strokeLinecap="round" />
          <circle cx="100" cy="7" r="3" fill="#9C7BB5" />
          <text x="116" y="11" fill="#3D1A1A" fontSize="10" fontFamily="DM Sans, sans-serif">
            Progesteron
          </text>
        </g>

        {/* Title */}
        <text
          x="300"
          y="316"
          textAnchor="middle"
          fill="#7A3E3E"
          fontSize="9"
          fontFamily="DM Sans, sans-serif"
          opacity="0.6"
          letterSpacing="2"
        >
          FLUKTUASI HORMON SELAMA 28 HARI
        </text>
      </svg>
    </div>
  );
}
