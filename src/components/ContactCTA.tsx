import { useState } from 'react';

export function ContactCTA() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Radial grid background */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(0,249,250,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Central beam of light */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-[#00F9FA]/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="relative bg-black/60 backdrop-blur-xl border-2 border-[#00F9FA]/30 rounded-2xl p-12 text-center overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00F9FA] rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#F9030B] rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#F9030B] rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00F9FA] rounded-br-2xl"></div>

          {/* Glowing orbs */}
          <div className="absolute -top-20 left-1/4 w-40 h-40 bg-[#00F9FA] rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 right-1/4 w-40 h-40 bg-[#F9030B] rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            {!showForm ? (
              <>
                <h2 className="text-white mb-4">
                  Ready to Transform Your Phone Operations?
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  See how G Bell can reduce costs, improve response times, and scale your business communications.
                </p>
                <button 
                  onClick={() => setShowForm(true)}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-full hover:bg-white/10 hover:shadow-[0_0_50px_rgba(0,249,250,0.5)] transition-all transform hover:scale-105 group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00F9FA]/20 to-[#F9030B]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </>
            ) : (
              <div className="text-left">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-white mb-2 text-center">Get in Touch</h2>
                    <p className="text-gray-400 mb-6 text-center">Fill out the form below and we'll get back to you shortly.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-[#00F9FA]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9FA] transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-[#00F9FA]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9FA] transition-colors"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-gray-400 mb-2 text-sm">Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-[#00F9FA]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9FA] transition-colors"
                            placeholder="Your company"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-gray-400 mb-2 text-sm">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-[#00F9FA]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9FA] transition-colors"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-[#00F9FA]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00F9FA] transition-colors resize-none"
                          placeholder="Tell us about your needs..."
                        />
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <button
                          type="submit"
                          className="flex-1 bg-[#00F9FA]/10 border border-[#00F9FA] text-[#00F9FA] px-6 py-3 rounded-full hover:bg-[#00F9FA]/20 transition-all"
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="flex-1 bg-white/5 border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#00F9FA]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#00F9FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-white mb-2">Thank You!</h3>
                    <p className="text-gray-400">We'll be in touch shortly.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}