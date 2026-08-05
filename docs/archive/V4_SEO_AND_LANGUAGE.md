# V4 SEO and Language

## Route bahasa

```text
/id
/en
```

Project:

```text
/id/projects/[slug]
/en/projects/[slug]
```

Language switch mengganti segmen pertama URL. Bahasa tidak bergantung pada local storage.

## Metadata

Setiap halaman memiliki:

- title;
- description;
- canonical;
- alternate language URLs;
- OpenGraph;
- Twitter card;
- robots rules.

## Structured data

Home page:

```text
Person
```

Project page:

```text
SoftwareSourceCode
```

## Sitemap

Sitemap mencakup:

- home ID dan EN;
- project index ID dan EN;
- setiap project ID dan EN;
- language alternates.

## Robots

Content Studio tidak diindeks.

## Copy SEO

Title dan description menjelaskan bidang kerja secara konkret:

```text
fullstack
automation
operational dashboards
IoT
testing
AI-assisted products
```

Hindari pengulangan keyword dan kalimat promosi tanpa bukti.

## Production

Atur:

```env
NEXT_PUBLIC_SITE_URL=https://domain-production.com
```

Setelah deploy, cek:

```text
/sitemap.xml
/robots.txt
/manifest.webmanifest
/opengraph-image
```
