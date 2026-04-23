import React from "react";

import { cn } from "components/lib/utils";

const DEFAULT_START_COLOR = [100, 116, 139];
const DEFAULT_END_COLOR = [241, 245, 249];

function interpolateColor(startColor, endColor, progress) {
  return startColor.map((channel, index) =>
    Math.round(channel + (endColor[index] - channel) * progress)
  );
}

function toRgba(color, alpha) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  startColor = DEFAULT_START_COLOR,
  endColor = DEFAULT_END_COLOR,
}) {
  return (
    (<div
      className={cn(
        "pointer-events-none select-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const progress = numCircles === 1 ? 1 : i / (numCircles - 1);
        const circleColor = interpolateColor(startColor, endColor, progress);
        const opacityFactor = Math.max(mainCircleOpacity / 0.24, 0.55);
        const fillAlpha = Math.max(0.05, (0.18 - progress * 0.08) * opacityFactor);
        const borderAlpha = Math.max(0.2, (0.72 - progress * 0.2) * opacityFactor);

        return (
          (<div
            key={i}
            className={`absolute animate-ripple rounded-full shadow-xl border [--i:${i}]`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                backgroundColor: toRgba(circleColor, fillAlpha),
                borderColor: toRgba(circleColor, borderAlpha),
                boxShadow: `0 10px 30px ${toRgba(circleColor, 0.08)}`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)"
              }
            } />)
        );
      })}
    </div>)
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
