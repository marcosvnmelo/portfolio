export function VerticalDashedLine() {
  return (
    <div className="flex h-24 w-2 justify-center">
      <svg
        width={4}
        height="100%"
        viewBox="0 0 4 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1={2}
          y1={0}
          x2={2}
          y2={100}
          stroke="#d1d5db"
          strokeWidth={2}
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
