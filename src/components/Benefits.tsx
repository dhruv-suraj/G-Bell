import {
  Workflow,
  CheckCircle,
  Eye,
  TrendingUp,
  Zap,
  Shield
} from 'lucide-react';

const benefits = [
  {
    icon: Workflow,
    title: 'End-to-End Automation',
    description: 'Complete conversation handling, not partial bots or scripts'
  },
  {
    icon: CheckCircle,
    title: 'Real-World Tested',
    description: 'Handles unpredictable, emotional conversations successfully'
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'Every call tracked, recorded, and analyzed'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Self-learning system that gets better with every call'
  },
  {
    icon: Zap,
    title: 'Enterprise Scalability',
    description: 'Grows seamlessly from hundreds to millions of calls'
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Built for regulated industries with audit trails'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]"></div>

      {/* Gold dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgba(201, 169, 98, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201, 169, 98, 0.05) 0%, transparent 50%)'
        }}
      ></div>

      {/* Floating glow orbs */}
      <div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.05) 0%, transparent 60%)',
          animation: 'glow-pulse 10s ease-in-out infinite'
        }}
      ></div>
      <div
        className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.05) 0%, transparent 60%)',
          animation: 'glow-pulse 10s ease-in-out infinite',
          animationDelay: '5s'
        }}
      ></div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-20 w-40 h-40 border-t border-l border-[#C9A962]/10"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-b border-r border-[#C9A962]/10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
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
            Why Choose Us
          </span>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '2.75rem', color: '#FFFFFF' }}>
            Why Choose Graham Bell Voice AI?
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#AAAAAA', maxWidth: '600px', margin: '1.5rem auto 0' }}>
            A complete platform built for real-world deployment
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className="relative p-10 transition-all duration-500 h-full hover:transform hover:-translate-y-1"
                  style={{ backgroundColor: '#141414', border: '1px solid rgba(201, 169, 98, 0.3)' }}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 transition-all duration-300 group-hover:w-14 group-hover:h-14" style={{ borderTop: '2px solid #C9A962', borderLeft: '2px solid #C9A962' }}></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 transition-all duration-300 group-hover:w-14 group-hover:h-14" style={{ borderBottom: '2px solid #C9A962', borderRight: '2px solid #C9A962' }}></div>

                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className="mb-8 flex justify-center">
                      <div className="relative">
                        <div
                          className="w-16 h-16 rotate-45 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                          style={{ border: '1px solid rgba(201, 169, 98, 0.5)', backgroundColor: 'rgba(201, 169, 98, 0.05)' }}
                        >
                          <Icon className="w-7 h-7 text-[#C9A962] -rotate-45 transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-center mb-4 group-hover:text-[#C9A962] transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '1.35rem', color: '#FFFFFF' }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-center"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#BBBBBB', lineHeight: 1.7 }}
                    >
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C9A962] group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#C9A962]/30"></div>
          <div className="w-2 h-2 bg-[#C9A962]/50 rotate-45"></div>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#C9A962]/30"></div>
        </div>
      </div>
    </section>
  );
}
