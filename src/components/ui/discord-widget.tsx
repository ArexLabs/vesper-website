"use client";

import React from "react";
import { useTheme } from "next-themes";

interface DiscordWidgetProps {
  className?: string;
}

const DiscordWidget: React.FC<DiscordWidgetProps> = ({ className }) => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className={className}>
      <iframe
        src={`https://discord.com/widget?id=1441770650602831902&theme=${theme}`}
        width="100%"
        height="500"
        frameBorder={0}
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-same-origin allow-popups"
        title="Discord Widget"
        className="rounded-xl"
      />
    </div>
  );
};

export default DiscordWidget;
