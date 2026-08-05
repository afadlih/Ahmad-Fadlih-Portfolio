export const dynamic = "force-static";

export function GET() {
  return new Response(
    [
      "Contact: mailto:ahmadfadlihwahyusardana@gmail.com",
      "Preferred-Languages: id, en",
      "Canonical: /.well-known/security.txt",
      "Policy: /id",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    },
  );
}
