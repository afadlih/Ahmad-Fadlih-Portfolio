import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "secondary"
  | "signal"
  | "outline"
  | "ghost"
  | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const baseClass = "ui-button";

const variantClasses: Record<ButtonVariant, string> = {
  default: "ui-button--primary",
  secondary: "ui-button--secondary",
  signal: "ui-button--signal",
  outline: "ui-button--outline",
  ghost: "ui-button--ghost",
  link: "ui-button--link",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "ui-button--default-size",
  sm: "ui-button--sm",
  lg: "ui-button--lg",
  icon: "ui-button--icon",
};

export function buttonClassName({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(baseClass, variantClasses[variant], sizeClasses[size], className);
}

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  );
}
