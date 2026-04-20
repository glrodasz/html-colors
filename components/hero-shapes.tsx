export function HeroShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
    >
      <svg
        className="absolute -top-24 -right-16 w-[420px] h-[420px] opacity-90"
        viewBox="0 0 200 200"
        fill="none"
      >
        <g transform="rotate(45 100 100)">
          <rect x="40" y="40" width="120" height="120" fill="#FFD600" />
        </g>
      </svg>
      <svg
        className="absolute top-40 -right-4 w-[180px] h-[180px] opacity-90 hidden sm:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <g transform="rotate(45 100 100)">
          <rect
            x="50"
            y="50"
            width="100"
            height="100"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="6"
          />
        </g>
      </svg>
      <svg
        className="absolute bottom-0 -left-20 w-[260px] h-[260px] opacity-60"
        viewBox="0 0 200 200"
        fill="none"
      >
        <g transform="rotate(45 100 100)">
          <rect
            x="40"
            y="40"
            width="120"
            height="120"
            fill="none"
            stroke="#FFD600"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  )
}
