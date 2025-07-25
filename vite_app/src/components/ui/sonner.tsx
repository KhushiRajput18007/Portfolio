import { useTheme } from "next-themes";
import { Toaster } from "sonner";
import type { ToasterProps } from "sonner"; 

const CustomToaster = (props: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Toaster
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { CustomToaster as Toaster };
