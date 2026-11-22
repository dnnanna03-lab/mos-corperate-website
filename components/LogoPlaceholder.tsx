export default function LogoPlaceholder({ compact = false }: { compact?: boolean }) {
  return (
    <div className="logo-lockup" aria-label="MOS original logo placeholder">
      <div className="logo-mark" aria-hidden="true"><span>MOS</span></div>
      {!compact && <div className="logo-wordmark"><strong>MEGA ORTHO</strong><span>SERVICES NIGERIA LIMITED</span></div>}
    </div>
  );
}
