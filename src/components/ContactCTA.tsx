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
    <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]"></div>

      {/* Large centered glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201, 169, 98, 0.08) 0%, transparent 50%)'
        }}
      ></div>

      {/* Decorative lines */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#C9A962]/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          className="relative p-12 md:p-16 text-center"
          style={{ backgroundColor: '#141414', border: '1px solid rgba(201, 169, 98, 0.4)' }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16" style={{ borderTop: '2px solid #C9A962', borderLeft: '2px solid #C9A962' }}></div>
          <div className="absolute top-0 right-0 w-16 h-16" style={{ borderTop: '2px solid #C9A962', borderRight: '2px solid #C9A962' }}></div>
          <div className="absolute bottom-0 left-0 w-16 h-16" style={{ borderBottom: '2px solid #C9A962', borderLeft: '2px solid #C9A962' }}></div>
          <div className="absolute bottom-0 right-0 w-16 h-16" style={{ borderBottom: '2px solid #C9A962', borderRight: '2px solid #C9A962' }}></div>

          {/* Diamond decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-5 h-5 rotate-45" style={{ backgroundColor: '#141414', border: '2px solid #C9A962' }}></div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="w-5 h-5 rotate-45" style={{ backgroundColor: '#141414', border: '2px solid #C9A962' }}></div>
          </div>

          <div className="relative z-10">
            {!showForm ? (
              <>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A962]"></div>
                  <div className="w-3 h-3 bg-[#C9A962] rotate-45"></div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A962]"></div>
                </div>

                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                  Ready to Transform Your Phone Operations?
                </h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#BBBBBB', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                  See how G Bell can reduce costs, improve response times, and scale your business communications.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative overflow-hidden transition-all duration-500"
                  style={{ border: '2px solid #C9A962', padding: '1rem 3rem', background: 'transparent' }}
                >
                  <span
                    className="relative z-10 uppercase tracking-widest group-hover:text-[#0d0d0d] transition-colors duration-500"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: '1rem', color: '#C9A962' }}
                  >
                    Contact Us
                  </span>
                  <div className="absolute inset-0 bg-[#C9A962] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </>
            ) : (
              <div className="text-left">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-8">
                      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '2rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                        Get in Touch
                      </h2>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#AAAAAA' }}>
                        Fill out the form below and we'll get back to you shortly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-[#C9A962] mb-2 text-sm uppercase tracking-wider"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-[#C9A962]/30 px-0 py-3 text-white focus:outline-none focus:border-[#C9A962] transition-colors"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[#C9A962] mb-2 text-sm uppercase tracking-wider"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-[#C9A962]/30 px-0 py-3 text-white focus:outline-none focus:border-[#C9A962] transition-colors"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-[#C9A962] mb-2 text-sm uppercase tracking-wider"
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-[#C9A962]/30 px-0 py-3 text-white focus:outline-none focus:border-[#C9A962] transition-colors"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            placeholder="Your company"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-[#C9A962] mb-2 text-sm uppercase tracking-wider"
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-[#C9A962]/30 px-0 py-3 text-white focus:outline-none focus:border-[#C9A962] transition-colors"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[#C9A962] mb-2 text-sm uppercase tracking-wider"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-[#C9A962]/30 px-0 py-3 text-white focus:outline-none focus:border-[#C9A962] transition-colors resize-none"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                          placeholder="Tell us about your needs..."
                        />
                      </div>

                      <div className="flex gap-6 pt-6">
                        <button
                          type="submit"
                          className="flex-1 group relative border border-[#C9A962] text-[#C9A962] px-8 py-4 transition-all duration-500 hover:text-[#0d0d0d] overflow-hidden"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                        >
                          <span className="relative z-10 uppercase text-sm tracking-widest">Submit</span>
                          <div className="absolute inset-0 bg-[#C9A962] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="flex-1 border border-white/20 text-white/60 px-8 py-4 transition-all duration-300 hover:border-white/40 hover:text-white"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                        >
                          <span className="uppercase text-sm tracking-widest">Cancel</span>
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rotate-45 flex items-center justify-center mx-auto mb-6" style={{ border: '2px solid #C9A962' }}>
                      <svg className="w-8 h-8 -rotate-45" style={{ color: '#C9A962' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                      Thank You
                    </h3>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#AAAAAA' }}>
                      We'll be in touch shortly.
                    </p>
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
