export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d0d0d', borderTop: '1px solid rgba(201, 169, 98, 0.3)', padding: '4rem 0', position: 'relative' }}>
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 rotate-45" style={{ backgroundColor: '#0d0d0d', border: '2px solid #C9A962' }}></div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(201, 169, 98, 0.5)' }}></div>
            <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 500, color: '#C9A962', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '1.25rem' }}>
              Graham Bell
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: '#AAAAAA', fontSize: '1rem' }}>
              (G Bell)
            </span>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(201, 169, 98, 0.5)' }}></div>
          </div>

          {/* Decorative divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ height: '1px', width: '80px', background: 'linear-gradient(to right, transparent, rgba(201, 169, 98, 0.5))' }}></div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '4px', height: '4px', backgroundColor: 'rgba(201, 169, 98, 0.5)', transform: 'rotate(45deg)' }}></div>
              <div style={{ width: '6px', height: '6px', backgroundColor: '#C9A962', transform: 'rotate(45deg)' }}></div>
              <div style={{ width: '4px', height: '4px', backgroundColor: 'rgba(201, 169, 98, 0.5)', transform: 'rotate(45deg)' }}></div>
            </div>
            <div style={{ height: '1px', width: '80px', background: 'linear-gradient(to left, transparent, rgba(201, 169, 98, 0.5))' }}></div>
          </div>

          {/* Copyright */}
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#FFFFFF', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
            © 2025 Graham Bell Voice AI. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#999999', fontSize: '1rem' }}>
            Transforming business conversations through intelligent voice automation
          </p>
        </div>
      </div>
    </footer>
  );
}
