export function AnimatedBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-space-glow opacity-60" />
      <div className="absolute inset-0 starfield" />
      <div className="absolute inset-0 topo-lines" />
      <div className="absolute inset-0 signal-waves" />
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
