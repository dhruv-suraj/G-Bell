import { 
  PhoneOutgoing, 
  PhoneIncoming, 
  FileText, 
  Mic, 
  BarChart3, 
  DollarSign, 
  ArrowUpCircle 
} from 'lucide-react';

const features = [
  {
    icon: PhoneOutgoing,
    title: 'Outbound Campaigns',
    description: 'Automated campaigns, reminders, and follow-ups at scale',
    color: '#00F9FA'
  },
  {
    icon: PhoneIncoming,
    title: 'Inbound Support',
    description: '24/7 support, scheduling, and inquiry handling',
    color: '#F9030B'
  },
  {
    icon: FileText,
    title: 'Full Transcriptions',
    description: 'Complete conversation transcripts with searchable history',
    color: '#00F9FA'
  },
  {
    icon: Mic,
    title: 'Call Recordings',
    description: 'Audio recordings for quality assurance and compliance',
    color: '#F9030B'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time performance metrics and insights',
    color: '#00F9FA'
  },
  {
    icon: DollarSign,
    title: 'Cost Tracking',
    description: 'Monitor ROI with detailed cost and volume analytics',
    color: '#F9030B'
  },
  {
    icon: ArrowUpCircle,
    title: 'Smart Escalation',
    description: 'Seamless handoff to humans with complete call history',
    color: '#00F9FA'
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F9FA" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F9030B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00F9FA" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V200 H0 Z" 
            fill="url(#waveGradient1)"
            style={{ animation: 'wave 8s ease-in-out infinite' }}
          />
          <path 
            d="M0,150 Q250,100 500,150 T1000,150 T1500,150 T2000,150 V200 H0 Z" 
            fill="url(#waveGradient1)"
            opacity="0.5"
            style={{ animation: 'wave 10s ease-in-out infinite reverse' }}
          />
        </svg>
      </div>

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='43' viewBox='0 0 50 43' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0l12.5 7.2v14.4L25 28.8 12.5 21.6V7.2L25 0z' fill='none' stroke='%2300F9FA' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 43px'
        }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Complete Voice AI Platform Capabilities</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00F9FA]"></div>
            <div className="w-2 h-2 bg-[#00F9FA] rounded-full" style={{ boxShadow: '0 0 10px #00F9FA' }}></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#F9030B]"></div>
          </div>
        </div>
        
        {/* Honeycomb/Hexagonal layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Custom hexagonal grid positioning */}
          <div className="flex flex-col items-center gap-8">
            {/* Row 1 - 3 items */}
            <div className="flex gap-8 flex-wrap justify-center">
              {features.slice(0, 3).map((feature, index) => (
                <FeatureHexagon key={index} feature={feature} index={index} />
              ))}
            </div>
            
            {/* Row 2 - 4 items (offset) */}
            <div className="flex gap-8 flex-wrap justify-center -mt-4">
              {features.slice(3, 7).map((feature, index) => (
                <FeatureHexagon key={index + 3} feature={feature} index={index + 3} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(-10px); }
        }
        
        @keyframes hexFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes hexGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}

function FeatureHexagon({ feature, index }: { feature: typeof features[0], index: number }) {
  const Icon = feature.icon;
  const isCyan = feature.color === '#00F9FA';
  
  return (
    <div 
      className="relative group"
      style={{
        animation: `hexFloat ${4 + index * 0.3}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Hexagon shape using clip-path */}
      <div 
        className="relative w-64 h-72 flex items-center justify-center"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      >
        {/* Glowing background */}
        <div 
          className="absolute inset-0 blur-xl"
          style={{
            background: isCyan ? '#00F9FA' : '#F9030B',
            animation: 'hexGlow 3s ease-in-out infinite',
            animationDelay: `${index * 0.3}s`
          }}
        ></div>
        
        {/* Main hexagon */}
        <div 
          className="absolute inset-2 bg-black backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            border: `2px solid ${isCyan ? '#00F9FA' : '#F9030B'}`,
          }}
        >
          {/* Icon with glow */}
          <div className="relative mb-4">
            <div 
              className="absolute inset-0 blur-lg"
              style={{ background: isCyan ? '#00F9FA' : '#F9030B', opacity: 0.4 }}
            ></div>
            <Icon 
              className="relative z-10 w-10 h-10" 
              style={{ color: isCyan ? '#00F9FA' : '#F9030B' }}
            />
          </div>
          
          <h3 className="text-white mb-3 text-lg">{feature.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
        </div>

        {/* Border glow on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            boxShadow: `0 0 30px ${isCyan ? '#00F9FA' : '#F9030B'}, inset 0 0 30px ${isCyan ? '#00F9FA' : '#F9030B'}`,
          }}
        ></div>
      </div>

      {/* Corner accent dots */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
        style={{ 
          background: isCyan ? '#00F9FA' : '#F9030B',
          boxShadow: `0 0 8px ${isCyan ? '#00F9FA' : '#F9030B'}`
        }}
      ></div>
    </div>
  );
}
