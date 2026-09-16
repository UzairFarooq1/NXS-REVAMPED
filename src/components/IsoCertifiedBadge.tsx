interface IsoCertifiedBadgeProps {
  className?: string;
  title?: string;
}

let badgeInstance = 0;

const IsoCertifiedBadge = ({
  className = "",
  title = "ISO 13485:2016 Certified Company - MQA Certification UK Ltd.",
}: IsoCertifiedBadgeProps) => {
  const id = `iso-badge-text-path-${(badgeInstance += 1)}`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <defs>
        <path
          id={id}
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
      </defs>

      <circle cx="100" cy="100" r="98" fill="#5c5652" />
      <circle cx="100" cy="100" r="72" fill="#a8cf9f" />

      <path
        d="M70 102 L92 124 L134 78"
        fill="none"
        stroke="#ffffff"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text fill="#ffffff" fontSize="13.5" fontWeight="700" letterSpacing="1.5">
        <textPath href={`#${id}`} startOffset="25%" textAnchor="middle">
          ISO 13485:2016 CERTIFIED COMPANY
        </textPath>
      </text>
      <text fill="#ffffff" fontSize="13.5" fontWeight="700" letterSpacing="1.5">
        <textPath href={`#${id}`} startOffset="75%" textAnchor="middle">
          MQA CERTIFICATION UK LTD.
        </textPath>
      </text>

      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
        const r = 88;
        const x = 100 + r * Math.cos(angle);
        const y = 100 + r * Math.sin(angle);
        return (
          <text
            key={i}
            x={x}
            y={y + 4}
            fill="#ffffff"
            fontSize="9"
            textAnchor="middle"
          >
            ★
          </text>
        );
      })}
    </svg>
  );
};

export default IsoCertifiedBadge;
