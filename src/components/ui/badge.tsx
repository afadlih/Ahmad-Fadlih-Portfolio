import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "outline" | "success";

const variants: Record<BadgeVariant, string> = {
  default: "ui-badge ui-badge--default",
  secondary: "ui-badge ui-badge--secondary",
  outline: "ui-badge ui-badge--outline",
  success: "ui-badge ui-badge--success",
};

export function Badge({
  className,
  variant = "secondary",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return <span className={cn(variants[variant], className)} {...props} />;
}
