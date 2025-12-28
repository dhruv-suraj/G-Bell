export function ProblemSolution() {
  return (
    <section className="py-40 bg-[#0a0a0a] relative overflow-hidden">
      {/* Soft ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.08) 0%, transparent 60%)'
        }}
      ></div>

      {/* Central divider line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A962]/30 to-transparent hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A962]"></div>
            <div className="w-3 h-3 bg-[#C9A962] rotate-45"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A962]"></div>
          </div>
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#FFFFFF' }}
          >
            Transform Your Phone Operations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Challenge Side */}
          <div className="relative group">
            <div className="relative p-12 transition-all duration-500" style={{ backgroundColor: '#141414', border: '1px solid rgba(114, 47, 55, 0.5)' }}>
              <div className="absolute top-0 left-0 w-16 h-16" style={{ borderTop: '2px solid #722F37', borderLeft: '2px solid #722F37' }}></div>
              <div className="absolute bottom-0 right-0 w-16 h-16" style={{ borderBottom: '2px solid #722F37', borderRight: '2px solid #722F37' }}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-px" style={{ backgroundColor: '#722F37' }}></div>
                  <span
                    className="text-base tracking-widest uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#d4737d', letterSpacing: '0.25em' }}
                  >
                    The Challenge
                  </span>
                </div>

                <ul className="space-y-6">
                  {[
                    'High operational costs from manual calling',
                    'Long wait times and missed calls',
                    'Inconsistent customer experiences',
                    'Limited call performance visibility',
                    'Poor follow-up execution',
                    'Inefficient lead qualification'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-2.5 w-2 h-2 rotate-45 flex-shrink-0" style={{ backgroundColor: '#722F37' }}></div>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#FFFFFF', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-10" style={{ borderTop: '1px solid rgba(114, 47, 55, 0.4)' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#AAAAAA', fontSize: '1.1rem', lineHeight: 1.7 }}>
                    Human-only systems don't scale. As call volumes grow, costs rise and service quality drops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="relative group">
            <div className="relative p-12 transition-all duration-500" style={{ backgroundColor: '#141414', border: '1px solid rgba(201, 169, 98, 0.5)' }}>
              <div className="absolute top-0 right-0 w-16 h-16" style={{ borderTop: '2px solid #C9A962', borderRight: '2px solid #C9A962' }}></div>
              <div className="absolute bottom-0 left-0 w-16 h-16" style={{ borderBottom: '2px solid #C9A962', borderLeft: '2px solid #C9A962' }}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-px" style={{ backgroundColor: '#C9A962' }}></div>
                  <span
                    className="text-base tracking-widest uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#C9A962', letterSpacing: '0.25em' }}
                  >
                    The G Bell Solution
                  </span>
                </div>

                <ul className="space-y-6">
                  {[
                    'Full end-to-end phone conversations',
                    'Real-time intent and sentiment detection',
                    'Autonomous action execution',
                    'Smart escalation with full context',
                    'Complete conversation analytics',
                    'Continuous performance improvement'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-2.5 w-2 h-2 rotate-45 flex-shrink-0" style={{ backgroundColor: '#C9A962' }}></div>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#FFFFFF', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-10" style={{ borderTop: '1px solid rgba(201, 169, 98, 0.4)' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#AAAAAA', fontSize: '1.1rem', lineHeight: 1.7 }}>
                    Intelligent automation that delivers measurable operational savings and improved customer engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
