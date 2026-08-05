import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Local Portfolio Content Studio",
  description: "Local-only draft generator for portfolio content.",
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#315f9f",
};

export default function ContentStudioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
