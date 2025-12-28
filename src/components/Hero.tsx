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
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]"></div>

      {/* Radial glow effects */}
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.06) 0%, transparent 50%)',
          animation: 'glow-pulse 15s ease-in-out infinite'
        }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(114, 47, 55, 0.04) 0%, transparent 50%)',
          animation: 'glow-pulse 12s ease-in-out infinite',
          animationDelay: '3s'
        }}
      ></div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(rgba(201, 169, 98, 1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Elegant corner accents */}
      <div className="absolute top-8 left-8 w-32 h-32 border-t border-l border-[#C9A962]/20"></div>
      <div className="absolute top-8 right-8 w-32 h-32 border-t border-r border-[#C9A962]/20"></div>
      <div className="absolute bottom-8 left-8 w-32 h-32 border-b border-l border-[#C9A962]/20"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 border-b border-r border-[#C9A962]/20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-20">
          {/* Left side - Text content */}
          <div className="lg:pr-8">
            {/* Elegant decorative element */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#C9A962]"></div>
              <span
                className="text-[#C9A962] text-sm tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                Voice Intelligence
              </span>
            </div>

            <h1 className="mb-8">
              <span
                className="block text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
              >
                AI-Powered Voice
              </span>
              <span
                className="block text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: '#C9A962'
                }}
              >
                Automation
              </span>
            </h1>

            <p
              className="text-white text-xl mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              for Real Business Conversations
            </p>

            {/* Elegant divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="h-px w-12 bg-gradient-to-r from-[#C9A962] to-transparent"></div>
              <div className="w-1.5 h-1.5 bg-[#C9A962] rotate-45"></div>
              <div className="h-px w-12 bg-gradient-to-l from-[#C9A962] to-transparent"></div>
            </div>

            <p
              className="text-white/60 text-lg mb-10 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Voice-triggered · Chain-aware · Built to scale
            </p>

            <button
              onClick={scrollToContact}
              className="group relative bg-transparent border border-[#C9A962] text-[#C9A962] px-10 py-4 overflow-hidden transition-all duration-500 hover:text-[#0d0d0d]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: '0.1em' }}
            >
              <span className="relative z-10 uppercase text-sm tracking-widest">Schedule a Demo</span>
              <div className="absolute inset-0 bg-[#C9A962] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>

            <p
              className="mt-12 text-white/50 text-sm tracking-wider"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Handle thousands of calls autonomously with complete transparency
            </p>
          </div>

          {/* Right side - 3D Robot */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Subtle glow behind robot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[600px] h-[600px] rounded-full"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.1) 0%, transparent 60%)',
                  animation: 'glow-pulse 8s ease-in-out infinite'
                }}
              ></div>
            </div>

            {/* Elegant rotating ring */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ animation: 'spin 30s linear infinite' }}
            >
              <div className="w-[700px] h-[700px] md:w-[850px] md:h-[850px] border border-[#C9A962]/10 rounded-full"></div>
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ animation: 'spin 40s linear infinite reverse' }}
            >
              <div className="w-[850px] h-[850px] md:w-[1000px] md:h-[1000px] border border-[#722F37]/10 rounded-full"></div>
            </div>

            {/* Main 3D Spline Scene */}
            <div
              className="relative z-10 w-[650px] h-[650px] md:w-[850px] md:h-[850px]"
              style={{ animation: 'float 8s ease-in-out infinite' }}
            >
              <SplineScene
                scene={SPLINE_SCENE_URL}
                className="w-full h-full"
              />
            </div>

            {/* Corner decorations */}
            <div className="absolute top-10 right-10 w-8 h-8 border-t border-r border-[#C9A962]/30"></div>
            <div className="absolute bottom-10 left-10 w-8 h-8 border-b border-l border-[#C9A962]/30"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent"></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
