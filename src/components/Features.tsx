import {
  PhoneOutgoing,
  PhoneIncoming,
  FileText,
  Mic,
  BarChart3,
  DollarSign
} from 'lucide-react';

const features = [
  { icon: PhoneOutgoing, title: 'Outbound Campaigns', description: 'Automated campaigns, reminders, and follow-ups at scale' },
  { icon: PhoneIncoming, title: 'Inbound Support', description: '24/7 support, scheduling, and inquiry handling' },
  { icon: FileText, title: 'Full Transcriptions', description: 'Complete conversation transcripts with searchable history' },
  { icon: Mic, title: 'Call Recordings', description: 'Audio recordings for quality assurance and compliance' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time performance metrics and insights' },
  { icon: DollarSign, title: 'Cost Tracking', description: 'Monitor ROI with detailed cost and volume analytics' }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]"></div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(201, 169, 98, 0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Floating glow orbs */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.06) 0%, transparent 60%)',
          animation: 'glow-pulse 12s ease-in-out infinite'
        }}
      ></div>

      {/* Corner decorations */}
      <div className="absolute top-16 left-16 w-32 h-32 border-t border-l border-[#C9A962]/10"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 border-b border-r border-[#C9A962]/10"></div>

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
            Platform Features
          </span>

          <h2
            className="mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '2.75rem', color: '#FFFFFF' }}
          >
            Complete Voice AI Capabilities
          </h2>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#AAAAAA', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to automate and enhance your voice operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div
                  className="relative p-8 transition-all duration-500 h-full hover:transform hover:-translate-y-1"
                  style={{
                    backgroundColor: '#141414',
                    border: '1px solid rgba(201, 169, 98, 0.25)',
                  }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 transition-all duration-300 group-hover:w-14 group-hover:h-14" style={{ borderTop: '2px solid #C9A962', borderLeft: '2px solid #C9A962' }}></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 transition-all duration-300 group-hover:w-14 group-hover:h-14" style={{ borderBottom: '2px solid #C9A962', borderRight: '2px solid #C9A962' }}></div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="mb-5">
                      <div
                        className="w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ border: '1px solid rgba(201, 169, 98, 0.4)', backgroundColor: 'rgba(201, 169, 98, 0.05)' }}
                      >
                        <Icon className="w-7 h-7 text-[#C9A962] group-hover:text-[#D4B96A] transition-colors duration-300" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3
                      className="mb-3 group-hover:text-[#C9A962] transition-colors duration-300"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '1.35rem', color: '#FFFFFF' }}
                    >
                      {feature.title}
                    </h3>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#BBBBBB', lineHeight: 1.7 }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C9A962] group-hover:w-20 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
