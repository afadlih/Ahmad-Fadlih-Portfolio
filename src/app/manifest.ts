import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahmad Fadlih Portfolio",
    short_name: "Ahmad Fadlih",
    description:
      "Bilingual fullstack portfolio with traceable project case studies.",
    start_url: "/id",
    scope: "/",
    display: "standalone",
    background_color: "#f3f6fa",
    theme_color: "#315f9f",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
