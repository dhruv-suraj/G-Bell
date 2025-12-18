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
  const angleStep = 360 / benefits.length;
  
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-black via-[#022D35] to-black relative overflow-hidden">
      {/* Radiating lines from center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full" style={{ maxWidth: '1200px', maxHeight: '1200px' }}>
          {benefits.map((_, i) => {
            const angle = (i * angleStep - 90) * (Math.PI / 180);
            const x1 = 50;
            const y1 = 50;
            const x2 = 50 + Math.cos(angle) * 45;
            const y2 = 50 + Math.sin(angle) * 45;
            
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke={i % 2 === 0 ? '#00F9FA' : '#F9030B'}
                strokeWidth="1"
                opacity="0.3"
                strokeDasharray="5,5"
              />
            );
          })}
          {/* Orbital rings */}
          <circle cx="50%" cy="50%" r="25%" fill="none" stroke="#00F9FA" strokeWidth="1" opacity="0.1" />
          <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#F9030B" strokeWidth="1" opacity="0.1" />
          <circle cx="50%" cy="50%" r="45%" fill="none" stroke="#00F9FA" strokeWidth="1" opacity="0.1" />
        </svg>
      </div>

      {/* Rotating orbital path */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[450px] h-[450px] border border-[#00F9FA]/20 rounded-full"
          style={{ animation: 'spin 40s linear infinite' }}
        ></div>
        <div 
          className="absolute w-[520px] h-[520px] border border-[#F9030B]/10 rounded-full"
          style={{ animation: 'spin 50s linear infinite reverse' }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-20">
          <h2 className="text-white mb-6">Why Choose Graham Bell Voice AI?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            A complete platform built for real-world deployment
          </p>
        </div>
        
        {/* Central core */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Center logo/icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulsing core */}
              <div 
                className="absolute inset-0 w-32 h-32 -m-16 bg-[#00F9FA] rounded-full blur-3xl animate-pulse"
                style={{ opacity: 0.3 }}
              ></div>
              <div 
                className="absolute inset-0 w-24 h-24 -m-12 bg-[#F9030B] rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: '0.5s', opacity: 0.2 }}
              ></div>
              
              {/* Central icon */}
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#00F9FA] to-[#F9030B] rounded-full flex items-center justify-center"
                style={{ 
                  boxShadow: '0 0 60px rgba(0,249,250,0.5), 0 0 90px rgba(249,3,11,0.3)',
                  animation: 'float 4s ease-in-out infinite'
                }}
              >
                <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>

              {/* Orbital rings around center */}
              <div className="absolute inset-0 w-32 h-32 -m-4 border-2 border-[#00F9FA]/30 rounded-full"
                style={{ animation: 'spin 15s linear infinite' }}
              ></div>
              <div className="absolute inset-0 w-40 h-40 -m-8 border-2 border-[#F9030B]/20 rounded-full"
                style={{ animation: 'spin 20s linear infinite reverse' }}
              ></div>
            </div>
          </div>

          {/* Orbital benefit cards */}
          <div className="w-full">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isCyan = index % 2 === 0;
              const angle = (index * angleStep - 90) * (Math.PI / 180);
              
              // Calculate position on circular orbit
              const radius = 260; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animation: `orbitFloat ${5 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {/* Connecting dot */}
                  <div 
                    className="absolute left-1/2 top-1/2 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full z-0"
                    style={{
                      background: isCyan ? '#00F9FA' : '#F9030B',
                      boxShadow: `0 0 15px ${isCyan ? '#00F9FA' : '#F9030B'}`,
                      animation: 'pulse 2s ease-in-out infinite',
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>

                  {/* Card */}
                  <div 
                    className="relative group w-64"
                    style={{
                      animation: `fadeIn 0.6s ease-out`,
                      animationDelay: `${0.8 + index * 0.15}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Glowing backdrop */}
                    <div 
                      className="absolute -inset-2 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                      style={{ background: isCyan ? '#00F9FA' : '#F9030B' }}
                    ></div>
                    
                    <div 
                      className="relative bg-black/90 backdrop-blur-md border-2 rounded-xl p-6 overflow-hidden transition-all group-hover:scale-105"
                      style={{ 
                        borderColor: isCyan ? '#00F9FA' : '#F9030B',
                        boxShadow: `0 0 20px ${isCyan ? 'rgba(0,249,250,0.2)' : 'rgba(249,3,11,0.2)'}`
                      }}
                    >
                      {/* Corner accent */}
                      <div 
                        className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 rounded-tr-xl"
                        style={{ borderColor: isCyan ? '#00F9FA' : '#F9030B' }}
                      ></div>

                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div 
                            className="absolute inset-0 blur-lg opacity-50 group-hover:opacity-80 transition-opacity"
                            style={{ background: isCyan ? '#00F9FA' : '#F9030B' }}
                          ></div>
                          <div 
                            className="relative w-14 h-14 rounded-full flex items-center justify-center border-2"
                            style={{ 
                              borderColor: isCyan ? '#00F9FA' : '#F9030B',
                              background: `${isCyan ? '#00F9FA' : '#F9030B'}15`
                            }}
                          >
                            <Icon 
                              className="w-7 h-7 relative z-10" 
                              style={{ color: isCyan ? '#00F9FA' : '#F9030B' }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-white text-center mb-2 text-lg">{benefit.title}</h3>
                      <p className="text-gray-400 text-center text-sm leading-relaxed">{benefit.description}</p>

                      {/* Bottom accent line */}
                      <div 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, transparent, ${isCyan ? '#00F9FA' : '#F9030B'}, transparent)`,
                          boxShadow: `0 0 10px ${isCyan ? '#00F9FA' : '#F9030B'}`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        
        @keyframes orbitFloat {
          0%, 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(0); }
          50% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) translateY(-8px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}