import { Phone } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#022D35] border-b border-[#00F9FA]/20 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Phone className="w-6 h-6 text-[#00F9FA]" />
              <div className="absolute inset-0 blur-md bg-[#00F9FA] opacity-50"></div>
            </div>
            <span className="text-white">Graham Bell (G Bell)</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-[#00F9FA] hover:text-white transition-colors relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F9FA] group-hover:w-full transition-all"></span>
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-[#00F9FA] hover:text-white transition-colors relative group"
            >
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F9FA] group-hover:w-full transition-all"></span>
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-[#00F9FA] hover:text-white transition-colors relative group"
            >
              Benefits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F9FA] group-hover:w-full transition-all"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#00F9FA] hover:text-white transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F9FA] group-hover:w-full transition-all"></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}