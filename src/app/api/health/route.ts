export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "ahmad-fadlih-portfolio",
      version: "7.0.0",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    },
  );
}
