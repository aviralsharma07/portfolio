"use client";

export function Wordmark() {
  return (
    <svg
      viewBox="0 0 148 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 md:h-7 w-auto"
      aria-label="aviral"
      role="img"
    >
      <style>{`
        .letter {
          stroke: var(--text);
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
        }

        .stroke-normal { stroke-width: 1.2; }
        .stroke-bold { stroke-width: 1.5; }

        .l-a1      { animation: draw 0.55s ease-out 0.1s forwards; }
        .l-a1-bowl { animation: draw 0.45s ease-out 0.2s forwards; }
        .l-v       { animation: draw 0.4s ease-out 0.3s forwards; }
        .l-i-body  { animation: draw 0.3s ease-out 0.45s forwards; }
        .l-i-dot   { animation: draw 0.15s ease-out 0.55s forwards; }
        .l-r       { animation: draw 0.35s ease-out 0.6s forwards; }
        .l-r-shoulder { animation: draw 0.25s ease-out 0.65s forwards; }
        .l-a2      { animation: draw 0.55s ease-out 0.75s forwards; }
        .l-a2-bowl { animation: draw 0.45s ease-out 0.85s forwards; }
        .l-l       { animation: draw 0.3s ease-out 0.95s forwards; }

        .fill-part {
          fill: var(--text);
          fill-opacity: 0;
          stroke: none;
        }

        .f-a1      { animation: reveal 0.3s ease 0.5s forwards; }
        .f-v       { animation: reveal 0.3s ease 0.6s forwards; }
        .f-i-body  { animation: reveal 0.2s ease 0.65s forwards; }
        .f-i-dot   { animation: reveal 0.15s ease 0.65s forwards; }
        .f-r       { animation: reveal 0.3s ease 0.8s forwards; }
        .f-a2      { animation: reveal 0.3s ease 1.0s forwards; }
        .f-l       { animation: reveal 0.3s ease 1.1s forwards; }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        @keyframes reveal {
          to { fill-opacity: 1; }
        }
      `}</style>

      {/* Letter a (first) - clear bowl with distinct stem */}
      <g>
        {/* Stem with tail */}
        <path
          className="letter stroke-bold l-a1"
          d="M19.5 12c0 0 0.5-0.5 1-0.5c0.5 0 1 0.5 1 1.5v13c0 1.2 0.5 2 1.5 2"
        />
        {/* Bowl */}
        <path
          className="letter stroke-bold l-a1-bowl"
          d="M19.5 19.5c0-4-2.8-6.5-7-6.5c-4.5 0-7.5 2.5-7.5 6c0 3.8 3 6 7.5 6c3.5 0 6-1 7-2.5"
        />
        {/* Fill shapes */}
        <path className="fill-part f-a1" d="M19.5 12c0 0 0.5-0.5 1-0.5c0.5 0 1 0.5 1 1.5v13c0 1.2 0.5 2 1.5 2" />
        <path className="fill-part f-a1" d="M19.5 19.5c0-4-2.8-6.5-7-6.5c-4.5 0-7.5 2.5-7.5 6c0 3.8 3 6 7.5 6c3.5 0 6-1 7-2.5" />
      </g>

      {/* Letter v */}
      <g>
        <path
          className="letter stroke-normal l-v"
          d="M30 13l8 16l8-16"
        />
        <path className="fill-part f-v" d="M30 13l8 16l8-16" />
      </g>

      {/* Letter i - body */}
      <g>
        <path
          className="letter stroke-normal l-i-body"
          d="M55 13v16"
        />
        <path className="fill-part f-i-body" d="M55 13v16" />
      </g>

      {/* Letter i - dot */}
      <g>
        <circle
          className="letter stroke-normal l-i-dot"
          cx="55" cy="7" r="1.6"
        />
        <circle className="fill-part f-i-dot" cx="55" cy="7" r="1.6" />
      </g>

      {/* Letter r - stem */}
      <g>
        <path
          className="letter stroke-normal l-r"
          d="M66 13v16"
        />
        {/* Shoulder */}
        <path
          className="letter stroke-normal l-r-shoulder"
          d="M66 18c0-3 1.5-5 4.5-5c2 0 3.5 0.8 4 2"
        />
        <path className="fill-part f-r" d="M66 13v16" />
        <path className="fill-part f-r" d="M66 18c0-3 1.5-5 4.5-5c2 0 3.5 0.8 4 2" />
      </g>

      {/* Letter a (second) - same as first */}
      <g>
        {/* Stem with tail */}
        <path
          className="letter stroke-bold l-a2"
          d="M100 12c0 0 0.5-0.5 1-0.5c0.5 0 1 0.5 1 1.5v13c0 1.2 0.5 2 1.5 2"
        />
        {/* Bowl */}
        <path
          className="letter stroke-bold l-a2-bowl"
          d="M100 19.5c0-4-2.8-6.5-7-6.5c-4.5 0-7.5 2.5-7.5 6c0 3.8 3 6 7.5 6c3.5 0 6-1 7-2.5"
        />
        {/* Fill shapes */}
        <path className="fill-part f-a2" d="M100 12c0 0 0.5-0.5 1-0.5c0.5 0 1 0.5 1 1.5v13c0 1.2 0.5 2 1.5 2" />
        <path className="fill-part f-a2" d="M100 19.5c0-4-2.8-6.5-7-6.5c-4.5 0-7.5 2.5-7.5 6c0 3.8 3 6 7.5 6c3.5 0 6-1 7-2.5" />
      </g>

      {/* Letter l - tall stroke */}
      <g>
        <path
          className="letter stroke-normal l-l"
          d="M113 4v25"
        />
        <path className="fill-part f-l" d="M113 4v25" />
      </g>
    </svg>
  );
}
