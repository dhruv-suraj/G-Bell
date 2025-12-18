import { AlertCircle, Sparkles } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9030B]/5 to-transparent" 
          style={{ clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#00F9FA]/5 to-transparent"
          style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 45% 100%)' }}>
        </div>
      </div>

      {/* Diagonal dividing line with glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="absolute w-1 h-[200%] bg-gradient-to-b from-[#F9030B] via-white to-[#00F9FA]"
          style={{ 
            transform: 'rotate(-10deg)',
            boxShadow: '0 0 40px rgba(249,3,11,0.5), 0 0 80px rgba(0,249,250,0.3)'
          }}
        ></div>
      </div>

      {/* Animated particles on the divide */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `calc(50% + ${(i - 7) * 50}px)`,
            top: `${20 + i * 5}%`,
            background: i % 2 === 0 ? '#F9030B' : '#00F9FA',
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#F9030B' : '#00F9FA'}`,
            animation: `float ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Transform Your Phone Operations</h2>
          <div className="inline-block h-px w-32 bg-gradient-to-r from-[#F9030B] via-white to-[#00F9FA]"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Challenge Side - Left */}
          <div className="relative" style={{ animation: 'slideInLeft 0.8s ease-out' }}>
            {/* Glowing backdrop */}
            <div className="absolute -inset-4 bg-[#F9030B]/10 blur-2xl rounded-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-black/90 to-[#F9030B]/10 backdrop-blur-sm border-2 border-[#F9030B]/40 rounded-2xl p-8 overflow-hidden">
              {/* Animated corner brackets */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#F9030B] rounded-tl-2xl"
                style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#F9030B] rounded-br-2xl"
                style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '1s' }}>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F9030B] blur-xl animate-pulse"></div>
                  <AlertCircle className="w-12 h-12 text-[#F9030B] relative z-10" />
                </div>
                <h3 className="text-white text-2xl">The Challenge</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  'High operational costs from manual calling',
                  'Long wait times and missed calls',
                  'Inconsistent customer experiences',
                  'Limited call performance visibility',
                  'Poor follow-up execution',
                  'Inefficient lead qualification'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 w-2 h-2 bg-[#F9030B] rounded-full group-hover:scale-150 transition-transform"
                      style={{ boxShadow: '0 0 10px #F9030B' }}>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#F9030B]/30">
                <p className="text-gray-400 italic">
                  Human-only systems don't scale. As call volumes grow, costs rise and service quality drops.
                </p>
              </div>

              {/* Decorative lines */}
              <div className="absolute top-1/4 right-0 w-24 h-px bg-gradient-to-l from-[#F9030B] to-transparent"></div>
              <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-[#F9030B]/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Solution Side - Right */}
          <div className="relative" style={{ animation: 'slideInRight 0.8s ease-out' }}>
            {/* Glowing backdrop */}
            <div className="absolute -inset-4 bg-[#00F9FA]/10 blur-2xl rounded-3xl"></div>
            
            <div className="relative bg-gradient-to-bl from-black/90 to-[#00F9FA]/10 backdrop-blur-sm border-2 border-[#00F9FA]/40 rounded-2xl p-8 overflow-hidden">
              {/* Animated corner brackets */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#00F9FA] rounded-tr-2xl"
                style={{ animation: 'pulse 2s ease-in-out infinite' }}>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#00F9FA] rounded-bl-2xl"
                style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '1s' }}>
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00F9FA] blur-xl animate-pulse"></div>
                  <Sparkles className="w-12 h-12 text-[#00F9FA] relative z-10" />
                </div>
                <h3 className="text-white text-2xl">The G Bell Solution</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  'Full end-to-end phone conversations',
                  'Real-time intent and sentiment detection',
                  'Autonomous action execution',
                  'Smart escalation with full context',
                  'Complete conversation analytics',
                  'Continuous performance improvement'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-[#00F9FA] flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ boxShadow: '0 0 10px #00F9FA' }}>
                        <div className="w-2 h-2 bg-[#00F9FA] rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#00F9FA]/30">
                <p className="text-gray-400 italic">
                  Intelligent automation that delivers measurable operational savings and improved customer engagement.
                </p>
              </div>

              {/* Decorative lines */}
              <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-[#00F9FA] to-transparent"></div>
              <div className="absolute bottom-1/4 left-0 w-32 h-px bg-gradient-to-r from-[#00F9FA]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}