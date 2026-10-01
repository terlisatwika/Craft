import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Heart, Sparkles, PenTool, Award, Mail, MapPin } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('Contact Us');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message Sent!');
    setTimeout(() => {
      setFormStatus('Contact Us');
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-bg-cream text-text-dark">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-sm bg-bg-cream/90 backdrop-blur-md' : 'py-5 bg-bg-cream/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Crafts<span className="text-primary">.</span>
          </a>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8">
            {['Home', 'Our Crafts', 'Featured', 'Why Us', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-medium hover:text-primary transition-colors relative group"
                >
                  {item === 'Home' ? 'Home' : item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'}`}>
          <ul className="flex flex-col items-center gap-6">
            {['Home', 'Our Crafts', 'Featured', 'Why Us', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="font-medium text-lg hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item === 'Home' ? 'Home' : item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Handmade With Love
            </h1>
            <p className="text-text-light text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Discover beautiful handmade crafts created with care, passion, and creativity. Bring unique warmth and elegance into your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#our-crafts" className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-[0_4px_15px_rgba(212,163,115,0.4)] hover:bg-primary-hover hover:-translate-y-0.5 transition-all">
                Explore Crafts
              </a>
              <a href="#featured" className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-full font-medium hover:bg-secondary hover:border-secondary hover:text-text-dark hover:-translate-y-0.5 transition-all">
                Shop Now
              </a>
            </div>
          </div>
          <div className="relative px-4 md:px-0 mt-8 md:mt-0">
            <div className="absolute -top-5 -right-5 -bottom-5 -left-5 bg-secondary rounded-[24px] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800" 
              alt="Handmade crafts workspace" 
              className="rounded-[24px] shadow-lg w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Our Crafts Section */}
      <section id="our-crafts" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold mb-4">Our Crafts</h2>
          <p className="text-text-light">Explore our carefully curated categories of handmade wonders.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Handmade Home Decor', desc: 'Add a warm touch to your space.', img: '1513519245088-0e12902e5a38' },
            { title: 'Personalized Gifts', desc: 'Make every occasion special.', img: '1549465220-1a8b9238cd48' },
            { title: 'Handmade Accessories', desc: 'Unique details for everyday style.', img: '1535632066927-ab7c9ab60908' },
            { title: 'Art & Paintings', desc: 'Expressive art for your walls.', img: '1579762715111-a6e19c8e1216' },
          ].map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-2 transition-all group">
              <div className="overflow-hidden aspect-square">
                <img 
                  src={`https://images.unsplash.com/photo-${cat.img}?auto=format&fit=crop&q=80&w=600`} 
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                <p className="text-text-light text-sm mb-4">{cat.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover group/link">
                  Explore <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Crafts Section */}
      <section id="featured" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold mb-4">Featured Crafts</h2>
          <p className="text-text-light">Our most popular and beloved handmade creations.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: 'Rustic Ceramic Vase', desc: 'Hand-thrown clay vase with matte glaze.', price: '$45.00', img: '1610701596007-11502861dcfa' },
            { title: 'Natural Woven Basket', desc: 'Eco-friendly handwoven storage basket.', price: '$32.00', img: '1584472282946-e8f315243dd6' },
            { title: 'Macrame Wall Hanging', desc: 'Intricate boho-chic wall decoration.', price: '$58.00', img: '1606041008023-472dfb5e530f' },
            { title: 'Botanical Soy Candle', desc: 'Lavender and sage scented natural candle.', price: '$24.00', img: '1606760227091-3dd870d97f1d' },
          ].map((prod, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-2 transition-all flex flex-col group">
              <div className="overflow-hidden aspect-square">
                <img 
                  src={`https://images.unsplash.com/photo-${prod.img}?auto=format&fit=crop&q=80&w=600`} 
                  alt={prod.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{prod.title}</h3>
                <p className="text-text-light text-sm mb-6 flex-grow">{prod.desc}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-xl text-primary">{prod.price}</span>
                  <button className="px-4 py-2 bg-secondary text-text-dark rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-10 md:p-20 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-semibold mb-4">Why Choose Us</h2>
            <p className="text-text-light">What makes our crafts truly special.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: Heart, title: 'Handmade With Care', desc: 'Every single item is thoughtfully created by skilled artisans with genuine passion.' },
              { icon: Sparkles, title: 'Unique Designs', desc: 'No two pieces are exactly alike, ensuring your craft is a one-of-a-kind treasure.' },
              { icon: PenTool, title: 'Customizable', desc: 'We offer personalized touches to make your purchase perfectly fit your vision.' },
              { icon: Award, title: 'Quality Materials', desc: 'Sourced ethically and responsibly, we only use the finest materials for our creations.' },
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-light text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="bg-primary rounded-3xl p-8 md:p-16 lg:p-20 text-white shadow-xl grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-4xl font-semibold mb-6 text-white">Create Something Special</h2>
            <p className="text-white/90 mb-10 text-lg">
              Have a custom order in mind or simply want to say hello? We'd love to hear from you and help bring your creative ideas to life.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <Mail size={24} />
                <span>hello@handmadecrafts.com</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <MapPin size={24} />
                <span>123 Artisan Lane, Creative City</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl text-text-dark">
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
              />
            </div>
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
              />
            </div>
            <div className="mb-6">
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                required
                className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`w-full py-4 rounded-xl font-medium text-lg transition-all ${
                formStatus === 'Message Sent!' ? 'bg-secondary hover:bg-secondary/90 text-text-dark' : 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30'
              }`}
            >
              {formStatus}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-text-light text-sm border-t border-gray-200">
        <p>&copy; 2026 Handmade Crafts. Created with love.</p>
      </footer>
    </div>
  );
}

export default App;
