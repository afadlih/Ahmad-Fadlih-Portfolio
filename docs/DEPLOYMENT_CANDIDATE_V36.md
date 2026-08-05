# V36 Deployment Candidate

This portfolio is ready for final local verification before deployment.

## Local verification

```bash
npm ci
npm run qa:light
npm run verify
npm run release:candidate
```

## Development preview

```bash
npm run dev
```

Open:

```text
http://localhost:3000/id
```

## Production build

```bash
npm run build
npm run start
```

## Environment

```env
NEXT_PUBLIC_SITE_URL=https://your-final-domain.example
ENABLE_CONTENT_STUDIO=false
```

## Deployment checks

```text
NEXT_PUBLIC_SITE_URL points to the final production domain
CV files are present under public/documents
sitemap and robots routes return successfully
Open Graph image renders
security headers are active
Content Studio is disabled unless intentionally used
no private .env file is shipped
```

## Release candidate command

```bash
npm run release:candidate
```

This command runs qa:light and public URL checks. It does not replace a production browser review.

## Final tag recommendation

Use this package as:

```text
Ahmad-Fadlih-Portfolio-v36-final-deployment-candidate
```

After production deploy, a separate public release can be tagged as:

```text
v1.0.0-final-public
```
