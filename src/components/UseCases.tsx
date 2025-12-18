import { CheckCircle2, Calendar, CreditCard, Headphones } from 'lucide-react';

const useCases = [
  {
    badge: 'USE CASES',
    badgeColor: 'bg-[#00F9FA]/10 text-[#00F9FA] border border-[#00F9FA]/50',
    icon: CheckCircle2,
    title: 'Political Campaign Outreach',
    subtitle: 'Current Application - U.S. Congressional campaign voter outreach',
    points: [
      'Automated voter contact at scale',
      'Message delivery and response capture',
      'Sentiment tracking and voter intent analysis',
      'Real-time outcome reporting'
    ],
    footer: 'Validated in high-variance, emotionally-driven conversations with unpredictable responses.'
  },
  {
    badge: 'USE CASES',
    badgeColor: 'bg-[#00F9FA]/10 text-[#00F9FA] border border-[#00F9FA]/50',
    icon: Calendar,
    title: 'Healthcare Operations',
    subtitle: 'Current Partner - Hospital system patient communication',
    heading: 'Active Use Cases:',
    points: [
      'Appointment scheduling and confirmations',
      'Automated rescheduling workflows',
      'Post-visit follow-up calls',
      'Reduced no-show rates'
    ],
    footer: 'Upcoming Expansion: Billing outreach, payment reminders, and inquiry handling with compliant escalation.'
  },
  {
    badge: 'ROADMAP',
    badgeColor: 'bg-[#F9030B]/10 text-[#F9030B] border border-[#F9030B]/50',
    icon: CreditCard,
    title: 'Financial Services',
    subtitle: 'Planned Applications',
    points: [
      'Credit card and loan product education',
      'Pre-qualification workflows',
      'Compliant outbound marketing campaigns',
      'High-intent lead routing to sales teams'
    ],
    footer: 'Designed for highly regulated environments requiring compliance and audit trails.'
  },
  {
    badge: 'ROADMAP',
    badgeColor: 'bg-[#F9030B]/10 text-[#F9030B] border border-[#F9030B]/50',
    icon: Headphones,
    title: 'Customer Support & Tech',
    subtitle: 'Planned Applications',
    points: [
      'First-line technical and customer support',
      'Issue categorization and basic resolution',
      'Context gathering before human escalation',
      'Complete call summaries for agents'
    ],
    footer: 'Reduce support costs while maintaining high customer satisfaction.'
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-32 bg-gradient-to-b from-black via-[#022D35]/20 to-black relative overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Horizontal lines */}
          {[...Array(10)].map((_, i) => (
            <line 
              key={`h-${i}`}
              x1="0" 
              y1={i * 100} 
              x2="100%" 
              y2={i * 100} 
              stroke="#00F9FA" 
              strokeWidth="1"
              strokeDasharray="10,5"
            />
          ))}
          {/* Vertical lines */}
          {[...Array(10)].map((_, i) => (
            <line 
              key={`v-${i}`}
              x1={i * 150} 
              y1="0" 
              x2={i * 150} 
              y2="100%" 
              stroke="#F9030B" 
              strokeWidth="1"
              strokeDasharray="5,10"
            />
          ))}
        </svg>
      </div>

      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
        <div 
          className="w-full h-full bg-gradient-to-b from-[#00F9FA] via-white to-[#F9030B]"
          style={{ boxShadow: '0 0 20px rgba(0,249,250,0.5)' }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-white mb-4">Use Cases Across Industries</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-white"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#00F9FA] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#F9030B] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-white"></div>
          </div>
        </div>
        
        {/* Timeline layout */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isLive = useCase.badge === 'USE CASES';
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className="relative">
                {/* Timeline node in center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing rings */}
                    <div 
                      className="absolute inset-0 w-16 h-16 -m-4 rounded-full border-2"
                      style={{ 
                        borderColor: isLive ? '#00F9FA' : '#F9030B',
                        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    ></div>
                    <div 
                      className="absolute inset-0 w-12 h-12 -m-2 rounded-full border-2"
                      style={{ 
                        borderColor: isLive ? '#00F9FA' : '#F9030B',
                        animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                        animationDelay: '0.5s'
                      }}
                    ></div>
                    
                    {/* Central node */}
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${isLive ? '#00F9FA' : '#F9030B'}, ${isLive ? '#00D4D5' : '#D10209'})`,
                        boxShadow: `0 0 30px ${isLive ? '#00F9FA' : '#F9030B'}`
                      }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Connecting line to card */}
                <svg className="absolute left-1/2 top-1/2 w-1/2 h-1 hidden md:block pointer-events-none" 
                  style={{ 
                    [isLeft ? 'right' : 'left']: '50%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <line 
                    x1={isLeft ? '100%' : '0'} 
                    y1="0" 
                    x2={isLeft ? '0' : '100%'} 
                    y2="0" 
                    stroke={isLive ? '#00F9FA' : '#F9030B'} 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    style={{ animation: 'dash 1s linear infinite' }}
                  />
                </svg>
                
                {/* Card - alternating sides */}
                <div className={`md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div 
                    className="relative group"
                    style={{
                      animation: `${isLeft ? 'slideInLeft' : 'slideInRight'} 0.6s ease-out`,
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Glowing backdrop */}
                    <div 
                      className="absolute -inset-2 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                      style={{ background: isLive ? '#00F9FA' : '#F9030B' }}
                    ></div>
                    
                    <div 
                      className="relative bg-black/80 backdrop-blur-lg border-2 rounded-2xl p-8 overflow-hidden"
                      style={{ borderColor: isLive ? '#00F9FA' : '#F9030B' }}
                    >
                      {/* Animated corner accents */}
                      <div 
                        className="absolute top-0 w-20 h-20 border-t-2 rounded-t-2xl"
                        style={{ 
                          [isLeft ? 'left' : 'right']: 0,
                          [isLeft ? 'borderLeft' : 'borderRight']: `2px solid ${isLive ? '#00F9FA' : '#F9030B'}`,
                          borderTopColor: isLive ? '#00F9FA' : '#F9030B',
                          [isLeft ? 'borderTopLeftRadius' : 'borderTopRightRadius']: '1rem'
                        }}
                      ></div>

                      {/* Badge */}
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs ${useCase.badgeColor} backdrop-blur-sm`}>
                          {useCase.badge}
                        </span>
                      </div>
                      
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative">
                          <Icon 
                            className="w-7 h-7 relative z-10" 
                            style={{ color: isLive ? '#00F9FA' : '#F9030B' }}
                          />
                          <div 
                            className="absolute inset-0 blur-md opacity-50"
                            style={{ background: isLive ? '#00F9FA' : '#F9030B' }}
                          ></div>
                        </div>
                        <h3 className="text-white text-xl">{useCase.title}</h3>
                      </div>
                      
                      <p className="text-gray-400 mb-4 text-sm">{useCase.subtitle}</p>
                      
                      {useCase.heading && (
                        <p className="text-white mb-2 text-sm">{useCase.heading}</p>
                      )}
                      
                      <ul className="space-y-2 mb-6">
                        {useCase.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div 
                              className="mt-1.5 w-1.5 h-1.5 rounded-full"
                              style={{ 
                                background: isLive ? '#00F9FA' : '#F9030B',
                                boxShadow: `0 0 5px ${isLive ? '#00F9FA' : '#F9030B'}`
                              }}
                            ></div>
                            <span className="text-gray-400 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div 
                        className="pt-4 border-t"
                        style={{ borderColor: `${isLive ? '#00F9FA' : '#F9030B'}30` }}
                      >
                        <p className="text-gray-500 text-xs italic">{useCase.footer}</p>
                      </div>

                      {/* Decorative elements */}
                      <div 
                        className="absolute bottom-4 w-16 h-px bg-gradient-to-r opacity-50"
                        style={{ 
                          [isLeft ? 'right' : 'left']: '2rem',
                          backgroundImage: `linear-gradient(to ${isLeft ? 'left' : 'right'}, ${isLive ? '#00F9FA' : '#F9030B'}, transparent)`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}