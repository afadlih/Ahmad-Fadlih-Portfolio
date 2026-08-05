# Clean Code Refactor Log

## V9

### Reduced component responsibility

`ProjectDetail.tsx` previously owned the project hero, local navigation, overview, contribution, architecture, deep dive, evidence, and limitations. It is now an orchestration component with focused child modules under:

```text
src/components/portfolio/project-detail/
```

### Removed repeated evidence markup

Organization, credential, and experience sections previously duplicated status badges and proof lists. Shared components now live under:

```text
src/components/portfolio/evidence/
```

### Added structural policy

ast-grep rules enforce syntax-level constraints that ESLint configuration alone does not express clearly for this repository.

### Added graph and duplication analysis

Knip, jscpd, and Fallow are configured separately because they answer different questions:

- Knip: is code or a dependency reachable and used?
- jscpd: are token blocks duplicated?
- Fallow: where are dead code, architecture drift, duplication, and complexity hotspots?
