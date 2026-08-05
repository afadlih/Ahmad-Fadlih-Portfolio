export default function Loading() {
  return (
    <main id="main-content" className="page-loading" aria-busy="true" aria-live="polite">
      <div className="loading-shell">
        <span className="loading-line loading-line-short" />
        <span className="loading-line loading-line-title" />
        <span className="loading-line" />
        <div className="loading-grid">
          <span />
          <span />
          <span />
        </div>
      </div>
      <span className="sr-only">Loading portfolio content</span>
    </main>
  );
}
