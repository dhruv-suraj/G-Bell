import { SplineScene } from './ui/splite';

const SPLINE_SCENE_URL = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* 3D Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-96 opacity-30" 
        style={{
          background: `linear-gradient(to top, transparent, black 90%)`,
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(0,249,250,0.1) 0px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, rgba(0,249,250,0.1) 0px, transparent 1px, transparent 40px)
          `,
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom'
        }}>
      </div>

      {/* Curved 3D shapes on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00F9FA] to-transparent blur-3xl" 
          style={{
            clipPath: 'ellipse(80% 50% at 0% 50%)',
            transform: 'translateX(-30%)'
          }}>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-l from-[#F9030B] to-transparent blur-3xl"
          style={{
            clipPath: 'ellipse(80% 50% at 100% 50%)',
            transform: 'translateX(30%)'
          }}>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00F9FA] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>

      {/* Central beam effect */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00F9FA]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-white mb-6 relative">
              <span className="block mb-2 text-5xl md:text-7xl bg-gradient-to-r from-white via-[#00F9FA] to-white bg-clip-text text-transparent">
                AI-Powered Voice Automation
              </span>
              <span className="block text-gray-400">
                for Real Business Conversations
              </span>
            </h1>
            <p className="text-[#00F9FA]/60 mb-8 text-lg max-w-2xl lg:max-w-none">
              Voice-triggered. Chain-aware. Built to scale.
            </p>
            <button 
              onClick={scrollToContact}
              className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 hover:shadow-[0_0_40px_rgba(0,249,250,0.6)] transition-all transform hover:scale-105 group overflow-hidden"
            >
              <span className="relative z-10">Schedule a Demo</span>
            </button>

            {/* Subtitle tagline */}
            <div className="mt-12 text-gray-500 text-sm tracking-wider">
              Handle thousands of calls autonomously with complete transparency
            </div>
          </div>

          {/* Right side - AI Head Image with animations */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Animated glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#00F9FA] blur-[120px] opacity-30 animate-pulse"></div>
            </div>
            
            {/* Rotating rings around image */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'spin 20s linear infinite' }}>
              <div className="w-[500px] h-[500px] border border-[#00F9FA]/20 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'spin 15s linear infinite reverse' }}>
              <div className="w-[600px] h-[600px] border border-[#F9030B]/10 rounded-full"></div>
            </div>

            {/* Floating data nodes around the image */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#00F9FA] rounded-full shadow-[0_0_10px_rgba(0,249,250,0.8)]"
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}

            {/* Main AI 3D Spline Scene */}
            <div className="relative z-10 w-[500px] h-[500px] md:w-[600px] md:h-[600px]" style={{ animation: 'float 6s ease-in-out infinite' }}>
              <div className="relative w-full h-full">
                {/* Scene glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F9FA]/20 to-[#F9030B]/20 blur-xl rounded-lg"></div>

                <SplineScene
                  scene={SPLINE_SCENE_URL}
                  className="relative z-10 w-full h-full"
                />
              </div>
            </div>

            {/* Connecting lines effect */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
              {[...Array(5)].map((_, i) => (
                <line
                  key={i}
                  x1={`${20 + i * 15}%`}
                  y1="100%"
                  x2="50%"
                  y2="50%"
                  stroke="#00F9FA"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  style={{
                    animation: `dash 2s linear infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>
    </section>
  );
}