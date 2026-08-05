"use client";

import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be used inside Tabs");
  return context;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
}: {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: ReactNode;
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const baseId = useId();
  const activeValue = value ?? internalValue;
  const context = useMemo<TabsContextValue>(
    () => ({
      value: activeValue,
      baseId,
      setValue: (nextValue) => {
        if (value === undefined) setInternalValue(nextValue);
        onValueChange?.(nextValue);
      },
    }),
    [activeValue, baseId, onValueChange, value],
  );

  return (
    <TabsContext.Provider value={context}>
      <div className={cn("ui-tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    const triggers = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)'),
    );
    const currentIndex = triggers.indexOf(document.activeElement as HTMLButtonElement);
    if (currentIndex < 0 || triggers.length === 0) return;
    event.preventDefault();
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? triggers.length - 1
          : (currentIndex + (event.key === "ArrowRight" ? 1 : -1) + triggers.length) %
            triggers.length;
    triggers[nextIndex]?.focus();
    triggers[nextIndex]?.click();
  };

  return (
    <div
      role="tablist"
      className={cn("ui-tabs-list", className)}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
}

export function TabsTrigger({
  value,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const context = useTabsContext();
  const active = context.value === value;
  const tabId = `${context.baseId}-tab-${value}`;
  const panelId = `${context.baseId}-panel-${value}`;

  return (
    <button
      role="tab"
      id={tabId}
      aria-selected={active}
      aria-controls={panelId}
      tabIndex={active ? 0 : -1}
      className={cn("ui-tabs-trigger", active && "is-active", className)}
      onClick={() => context.setValue(value)}
      {...props}
    />
  );
}

export function TabsContent({
  value,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { value: string }) {
  const context = useTabsContext();
  if (context.value !== value) return null;
  return (
    <div
      role="tabpanel"
      id={`${context.baseId}-panel-${value}`}
      aria-labelledby={`${context.baseId}-tab-${value}`}
      className={cn("ui-tabs-content", className)}
      tabIndex={0}
      {...props}
    />
  );
}
