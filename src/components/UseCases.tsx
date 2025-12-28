import { CheckCircle2, Calendar, CreditCard, Headphones } from 'lucide-react';

const useCases = [
  {
    badge: 'ACTIVE', icon: CheckCircle2, title: 'Political Campaign Outreach',
    subtitle: 'U.S. Congressional campaign voter outreach',
    points: ['Automated voter contact at scale', 'Message delivery and response capture', 'Sentiment tracking and voter intent analysis', 'Real-time outcome reporting'],
    footer: 'Validated in high-variance, emotionally-driven conversations.'
  },
  {
    badge: 'ACTIVE', icon: Calendar, title: 'Healthcare Operations',
    subtitle: 'Hospital system patient communication',
    points: ['Appointment scheduling and confirmations', 'Automated rescheduling workflows', 'Post-visit follow-up calls', 'Reduced no-show rates'],
    footer: 'Expanding to billing outreach and payment reminders.'
  },
  {
    badge: 'PLANNED', icon: CreditCard, title: 'Financial Services',
    subtitle: 'Compliant client communications',
    points: ['Credit card and loan product education', 'Pre-qualification workflows', 'Compliant outbound marketing campaigns', 'High-intent lead routing to sales teams'],
    footer: 'Designed for regulated environments requiring compliance.'
  },
  {
    badge: 'PLANNED', icon: Headphones, title: 'Customer Support & Tech',
    subtitle: 'Technical and customer service',
    points: ['First-line technical support', 'Issue categorization and resolution', 'Context gathering before escalation', 'Complete call summaries for agents'],
    footer: 'Reduce support costs while maintaining satisfaction.'
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]"></div>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(201, 169, 98, 0.04) 0%, transparent 40%), radial-gradient(ellipse at 70% 50%, rgba(201, 169, 98, 0.04) 0%, transparent 40%)'
        }}
      ></div>

      {/* Central timeline line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C9A962]/30 to-transparent hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C9A962]"></div>
            <div className="w-3 h-3 bg-[#C9A962] rotate-45"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C9A962]"></div>
          </div>
          <span
            className="uppercase tracking-widest mb-4 block"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#C9A962', fontSize: '0.9rem', letterSpacing: '0.25em' }}
          >
            Industry Solutions
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '2.75rem', color: '#FFFFFF' }}>
            Use Cases Across Industries
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#AAAAAA', maxWidth: '600px', margin: '1.5rem auto 0' }}>
            Proven solutions for diverse business needs
          </p>
        </div>

        <div className="space-y-20">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isActive = useCase.badge === 'ACTIVE';
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Timeline node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                  <div
                    className="w-4 h-4 rotate-45 border border-[#C9A962] transition-all duration-300"
                    style={{ backgroundColor: isActive ? '#C9A962' : '#0d0d0d' }}
                  ></div>
                </div>

                <div className={`md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div
                    className="group relative p-10 transition-all duration-500 hover:transform hover:-translate-y-1"
                    style={{
                      backgroundColor: '#141414',
                      border: `1px solid ${isActive ? 'rgba(201, 169, 98, 0.4)' : 'rgba(114, 47, 55, 0.4)'}`
                    }}
                  >
                    {/* Corner accents */}
                    <div
                      className="absolute top-0 left-0 w-12 h-12 transition-all duration-300 group-hover:w-16 group-hover:h-16"
                      style={{ borderTop: `2px solid ${isActive ? '#C9A962' : '#722F37'}`, borderLeft: `2px solid ${isActive ? '#C9A962' : '#722F37'}` }}
                    ></div>
                    <div
                      className="absolute bottom-0 right-0 w-12 h-12 transition-all duration-300 group-hover:w-16 group-hover:h-16"
                      style={{ borderBottom: `2px solid ${isActive ? '#C9A962' : '#722F37'}`, borderRight: `2px solid ${isActive ? '#C9A962' : '#722F37'}` }}
                    ></div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to bottom right, ${isActive ? 'rgba(201, 169, 98, 0.08)' : 'rgba(114, 47, 55, 0.08)'}, transparent)` }}
                    ></div>

                    <div className="relative z-10">
                      <div className="mb-6">
                        <span
                          className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 600,
                            color: isActive ? '#C9A962' : '#d4737d',
                            border: `1px solid ${isActive ? 'rgba(201, 169, 98, 0.5)' : 'rgba(114, 47, 55, 0.5)'}`,
                            backgroundColor: isActive ? 'rgba(201, 169, 98, 0.1)' : 'rgba(114, 47, 55, 0.1)'
                          }}
                        >
                          {useCase.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 flex items-center justify-center"
                          style={{
                            border: `1px solid ${isActive ? 'rgba(201, 169, 98, 0.4)' : 'rgba(114, 47, 55, 0.4)'}`,
                            backgroundColor: isActive ? 'rgba(201, 169, 98, 0.05)' : 'rgba(114, 47, 55, 0.05)'
                          }}
                        >
                          <Icon style={{ color: isActive ? '#C9A962' : '#d4737d' }} className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <h3
                          className="group-hover:text-[#C9A962] transition-colors duration-300"
                          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '1.5rem', color: '#FFFFFF' }}
                        >
                          {useCase.title}
                        </h3>
                      </div>

                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#AAAAAA', marginBottom: '1.5rem' }}>
                        {useCase.subtitle}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {useCase.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div
                              className="mt-2.5 w-2 h-2 rotate-45 flex-shrink-0"
                              style={{ backgroundColor: isActive ? '#C9A962' : '#722F37' }}
                            ></div>
                            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#DDDDDD', lineHeight: 1.6 }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div style={{ paddingTop: '1.5rem', borderTop: `1px solid ${isActive ? 'rgba(201, 169, 98, 0.3)' : 'rgba(114, 47, 55, 0.3)'}` }}>
                        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#999999', fontSize: '1rem', lineHeight: 1.7 }}>
                          {useCase.footer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
