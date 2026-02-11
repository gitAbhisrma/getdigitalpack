import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Check, Star, Download, Play, Music, Type, Layers, Film, Camera, Monitor, Gift, Clock, ShieldCheck, Mail } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Home() {
  const products = [
    { name: "8000+ Transitions", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/1.webp" },
    { name: "Adobe CC Collection", icon: Monitor, image: "https://nextskillup.in/wp-content/uploads/2025/11/2.webp" },
    { name: "Camera Rig Overlays", icon: Camera, image: "https://nextskillup.in/wp-content/uploads/2025/11/3.webp" },
    { name: "Glitch Effects", icon: Zap, image: "https://nextskillup.in/wp-content/uploads/2025/11/4.webp" },
    { name: "Video Editing Course", icon: Film, image: "https://nextskillup.in/wp-content/uploads/2025/11/5.webp" },
    { name: "Youtube Essential Pack", icon: Play, image: "https://nextskillup.in/wp-content/uploads/2025/11/6.webp" },
    { name: "2000+ FX Presets", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/7.webp" },
    { name: "4K Cinematic Film Grain", icon: Film, image: "https://nextskillup.in/wp-content/uploads/2025/11/8.webp" },
    { name: "Fire Spark Overlays", icon: Zap, image: "https://nextskillup.in/wp-content/uploads/2025/11/10.webp" },
    { name: "10,000+ Fonts Collection", icon: Type, image: "https://nextskillup.in/wp-content/uploads/2025/11/9.webp" },
    { name: "Rain Overlays", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/11-1.webp" },
    { name: "Smoke Overlays", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/12.webp" },
    { name: "Dust & Snow Overlays", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/13.webp" },
    { name: "Wedding Invitation Pack", icon: Gift, image: "https://nextskillup.in/wp-content/uploads/2025/11/16.webp" },
    { name: "Lens & Bokeh Overlays", icon: Camera, image: "https://nextskillup.in/wp-content/uploads/2025/11/14.webp" },
    { name: "Light Leak Overlays", icon: Zap, image: "https://nextskillup.in/wp-content/uploads/2025/11/15.webp" },
    { name: "Logo Animation Pack", icon: Play, image: "https://nextskillup.in/wp-content/uploads/2025/11/17.webp" },
    { name: "Wedding Title Pack", icon: Type, image: "https://nextskillup.in/wp-content/uploads/2025/11/20.webp" },
    { name: "100+ After Effects Plugins", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/18.webp" },
    { name: "100+ Backgrounds", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/19.webp" },
    { name: "200+ Cinematic Luts", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/21.webp" },
    { name: "3000+ Sound Effects", icon: Music, image: "https://nextskillup.in/wp-content/uploads/2025/11/22.webp" },
    { name: "200+ Animated Emoji", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/23.webp" },
    { name: "100+ Callout Graphics", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/24.webp" },
    { name: "1500+ Lower Third Pack", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/25.webp" },
    { name: "500+ Stock Videos", icon: Film, image: "https://nextskillup.in/wp-content/uploads/2025/11/26.webp" },
    { name: "Motion Graphic Pack", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/27.webp" },
    { name: "Animated Title Pack", icon: Type, image: "https://nextskillup.in/wp-content/uploads/2025/11/28.webp" },
    { name: "1000+ Royalty Free Music", icon: Music, image: "https://nextskillup.in/wp-content/uploads/2025/11/29.webp" },
    { name: "Viral Meme Pack", icon: Layers, image: "https://nextskillup.in/wp-content/uploads/2025/11/30.webp" },
  ];

  const categories = [
    "VIDEO EDITORS", "VIDEOGRAPHERS", "CONTENT CREATORS", "FILM STUDENTS",
    "MARKETING AGENCIES", "FREELANCERS", "BUSINESSES", "EVENT ORGANIZERS"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SEO 
        title="World's Biggest Video Editing Bundle | 70GB+ Assets for ₹49"
        description="Get instant access to 70GB+ of pro editing assets including transitions, overlays, fonts, LUTs, FX, and more. Lifetime access for just ₹49!"
        keywords="video editing bundle, premiere pro assets, after effects templates, video transitions, luts, sound effects, video editing course"
      />
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
            GET DIGITAL PACK
          </div>
          <nav>
            <a href="#" className="text-gray-700 hover:text-primary font-bold text-lg transition-colors flex items-center gap-2">
              Shop
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-hero-gradient bg-grid-pattern text-center py-12 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl font-medium mb-4 text-white py-2 px-4 inline-block" style={{borderRadius: '15px', backgroundColor: '#7c3ddb'}}>
              Are You Ready To Elevate Your Editing Skills? Designed For Both Creators And Beginners Get Everything You Need In One Bundle
            </p>
            
            <p className="text-xl font-bold mb-2 text-gray-900">Special Offer:</p>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-900 leading-tight">
              World's Biggest Video<br />Editing Bundle!
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-800 font-medium">
              Instantly Access 70+ GB Of Pro Editing Assets: Transitions, Overlays, Fonts, LUTs, FX, Premade Templates, And Premium Software Like Premiere Pro, After Effects, And Six Additional Adobe Products. On Top Of That Get A Step-By-Step Video Editing Course To Launch Your Journey.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm inline-block px-6 py-2 rounded-full mb-8 border border-white/50 shadow-sm">
              <p className="text-sm md:text-base font-bold text-gray-800">
                *Lifetime Access - One-Time Payment - Instant Digital Delivery - 100% Risk Free *
              </p>
            </div>
            
            <div className="mb-12">
              <a href="https://superprofile.bio/vp/creator-pro" target="_blank" rel="noopener noreferrer">
                <Button className="btn-cta text-2xl w-full md:w-auto animate-pulse" style={{paddingTop: '18px', paddingRight: '21px', paddingBottom: '23px', paddingLeft: '24px'}}>
                  <Zap className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  Today Just ₹49
                </Button>
              </a>
            </div>
            
            {/* Hero Image */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mx-auto max-w-2xl"
            >
              <img 
                src="https://nextskillup.in/wp-content/uploads/2025/11/hero1.webp" 
                alt="Video Editing Bundle Box" 
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" style={{paddingRight: '26px'}}
              />
              
              {/* Floating Elements */}
              <div className="absolute -left-4 top-1/2 bg-white p-3 rounded-lg shadow-xl transform -rotate-6 hidden md:block">
                <p className="font-bold text-green-600">100,000+</p>
                <p className="text-xs text-gray-600">Transitions, SFX, Overlays</p>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 bg-white p-3 rounded-lg shadow-xl transform rotate-6 hidden md:block">
                <p className="font-bold text-purple-600">Software Packages Included:</p>
                <div className="flex gap-1 mt-1">
                  <div className="w-4 h-4 bg-blue-900 rounded-sm"></div>
                  <div className="w-4 h-4 bg-purple-900 rounded-sm"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Save Countless Editing Hours with Our Ultimate Asset Collection
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Today's creators need fast results—so we've packed 70GB+ of premium, ready-to-use assets to supercharge your workflow. Stop wasting time searching for overlays, transitions, LUTs, and templates. Instantly find everything, perfectly organized by style and niche—whether you're just starting out or upgrading your professional toolkit.
          </p>
          
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Especially designed for:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {categories.map((cat, index) => (
              <div key={index} className="bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold py-3 px-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
                {cat}
              </div>
            ))}
            <div className="md:col-span-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-md mt-2">
              AND EVERYONE WHOSE INTERESTED
            </div>
          </div>
          
          <div className="mt-12">
            <a href="https://superprofile.bio/vp/creator-pro" target="_blank" rel="noopener noreferrer">
              <Button className="btn-cta text-xl w-full md:w-auto" style={{paddingTop: '24px', paddingRight: '88px', paddingBottom: '25px', paddingLeft: '87px'}}>
                <Zap className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                Get Everything at ₹49
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section className="py-16 bg-red-500">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="bg-white inline-block px-8 py-3 rounded-lg shadow-lg transform -rotate-1">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wide">
                Everything You'll Get Inside:
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gray-100 relative p-4 flex items-center justify-center overflow-hidden group">
                  {/* Use generated images where available, fallback to icon */}
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <product.icon className="w-24 h-24 text-gray-300 group-hover:text-primary transition-colors duration-300" />
                  )}
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="https://superprofile.bio/vp/creator-pro" target="_blank" rel="noopener noreferrer">
              <Button className="btn-cta text-xl py-6 px-10 w-full md:w-auto bg-white text-primary hover:bg-gray-100">
                <Zap className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                Get Everything at ₹49
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials / Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US</h2>
          
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="text-6xl font-black text-gray-900 mb-2">99.4%</div>
            <div className="text-xl text-gray-600 font-medium flex items-center gap-2">
              Average Ratings <span className="text-2xl">🔥</span>
            </div>
            <div className="flex gap-1 mt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          {/* Feedback Screenshots */}
          <div className="max-w-5xl mx-auto mt-12">
            <img 
              src="/images/feedback-screenshots.png" 
              alt="Customer Feedback WhatsApp Screenshots" 
              className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* How to Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Here's how you're going to Access everything</h2>
          <h3 className="text-4xl font-black text-primary mb-12">IN 3 CLICKS!!</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-lg mt-4 mb-2">Click Button</h4>
              <p className="text-gray-600 text-sm">Click "Get everything at ₹49" Button to start your order.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-lg mt-4 mb-2">Complete Payment</h4>
              <p className="text-gray-600 text-sm">After payment is confirmed, you'll be automatically redirected.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-lg mt-4 mb-2">Download Instantly</h4>
              <p className="text-gray-600 text-sm">Simply click the download button—your files will be available right away.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-xl text-left flex gap-4 items-start">
            <Gift className="w-12 h-12 text-blue-500 flex-shrink-0" />
            <p className="text-sm text-blue-800">
              <strong>Bonus:</strong> Your purchase comes with a Lifetime Updates Policy. You will receive all the product updates on your email. We also send out random gifts and early access products to our buyers, so keep an eye out for our emails.
            </p>
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            IT'S NOW OR NEVER!
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            You've Read Everything You Need. The Choice Is Yours—One Decision Here Can Save You Thousands Of Hours, Tons Of Money, And Endless Effort. Don't Miss Out!
          </p>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 mb-12">
            <h3 className="text-2xl font-bold mb-4">World's Biggest Video Editing Bundle!</h3>
            <p className="text-sm text-gray-300 mb-8">*Lifetime Access - One-Time Payment - Instant Access - 100% Risk Free*</p>
            <a href="https://superprofile.bio/vp/creator-pro" target="_blank" rel="noopener noreferrer">
              <Button className="btn-cta text-2xl py-8 px-12 w-full animate-pulse shadow-orange-500/20">
                <Zap className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                Get Everything at ₹49
              </Button>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-left bg-gray-800 p-6 rounded-xl">
            <ShieldCheck className="w-16 h-16 text-green-400 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Your Satisfaction Is Guaranteed</h4>
              <p className="text-gray-400 text-sm">
                Editing from scratch takes time away from what matters most. That's exactly why we created this bundle—so you spend less time building, more time creating and living. Order today and experience hassle-free video editing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 text-sm">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center mb-2" style={{paddingRight: '39px'}}>
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 text-gray-300 bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
              <Mail className="w-4 h-4 text-blue-400" />
              <span className="font-medium" style={{paddingTop: '0px', paddingBottom: '2px'}}>abhisheksharmatech99@gmail.com</span>
            </div>
          </div>
          
          <p style={{paddingRight: '30px', paddingBottom: '12px', paddingLeft: '26px'}}>&copy; 2026 getdigitalpack.shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
