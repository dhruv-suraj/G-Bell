export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0d0d0d',
        borderBottom: '1px solid rgba(201, 169, 98, 0.3)',
        zIndex: 9999
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Logo Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                border: '2px solid #C9A962',
                transform: 'rotate(45deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span
                style={{
                  color: '#C9A962',
                  fontSize: '1.25rem',
                  transform: 'rotate(-45deg)',
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 600
                }}
              >
                G
              </span>
            </div>

            {/* Brand Name */}
            <div>
              <span
                style={{
                  color: '#C9A962',
                  fontSize: '1.25rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 500
                }}
              >
                Graham Bell
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.125rem' }}>
                <div style={{ height: '1px', width: '32px', backgroundColor: 'rgba(201, 169, 98, 0.4)' }}></div>
                <span
                  style={{
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: "'Cormorant Garamond', serif"
                  }}
                >
                  Voice AI
                </span>
                <div style={{ height: '1px', width: '32px', backgroundColor: 'rgba(201, 169, 98, 0.4)' }}></div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            {['Features', 'Use Cases', 'Benefits'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                style={{
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C9A962'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contact')}
            style={{
              border: '2px solid #C9A962',
              padding: '0.75rem 2rem',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C9A962';
              const span = e.currentTarget.querySelector('span');
              if (span) span.style.color = '#0d0d0d';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              const span = e.currentTarget.querySelector('span');
              if (span) span.style.color = '#C9A962';
            }}
          >
            <span
              style={{
                color: '#C9A962',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'color 0.3s'
              }}
            >
              Contact
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
