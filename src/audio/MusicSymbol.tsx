export type MusicSymbolType = "chord" | "melody" | "note";

export function MusicSymbol({
    type,
    className,
    x,
    y,
    color,
    scale,
}: {
    type: MusicSymbolType;
    className?: string;
    x?: number;
    y?: number;
    color?: string;
    scale?: number;
}) {
    return (
        <svg
            aria-hidden="true"
            className={className}
            height="60"
            viewBox="0 0 48 60"
            width="48"
            x={x}
            y={y}
            style={{ color, transformOrigin: "center" }}
        >
            {type === "chord" && (
                <path
                    d="M 24 8 L 45 52 L 3 52 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    style={{ transformOrigin: "center", transform: scale ? `scale(${scale})` : undefined }}
                />
            )}
            {type === "melody" && (
                <text className="music-symbol-clef"
                    style={{ transformOrigin: "center", transform: scale ? `scale(${scale})` : undefined }}
                    textAnchor="middle" x="24" y="52">
                    𝄞
                </text>
            )}
            {type === "note" && (
                <text className="music-symbol-note"
                    style={{ transformOrigin: "center", transform: scale ? `scale(${scale})` : undefined }}
                    textAnchor="middle" x="24" y="52">
                    ♪
                </text>
            )}
        </svg>

    );
}