import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Search, ShoppingCart } from "lucide-react";

export default function Shop() {
  // Placeholder data for shop items based on the video editing bundle theme
  const shopItems = [
    {
      id: 1,
      title: "Ultimate Transition Pack Vol. 1",
      category: "TRANSITIONS",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/1.webp",
      price: "₹49"
    },
    {
      id: 2,
      title: "Cinematic LUTs Collection",
      category: "LUTS",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/21.webp",
      price: "₹49"
    },
    {
      id: 3,
      title: "Pro Sound Effects Library",
      category: "SOUNDS",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/22.webp",
      price: "₹49"
    },
    {
      id: 4,
      title: "YouTube Essential Graphics",
      category: "TEMPLATES",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/6.webp",
      price: "₹49"
    },
    {
      id: 5,
      title: "Glitch & Distortion Overlays",
      category: "OVERLAYS",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/4.webp",
      price: "₹49"
    },
    {
      id: 6,
      title: "Animated Emoji Pack",
      category: "GRAPHICS",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/23.webp",
      price: "₹49"
    },
    {
      id: 7,
      title: "Film Grain & Textures",
      category: "OVERLAYS",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/8.webp",
      price: "₹49"
    },
    {
      id: 8,
      title: "Lower Thirds Bundle",
      category: "TEMPLATES",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/25.webp",
      price: "₹49"
    },
    {
      id: 9,
      title: "Wedding Title Animations",
      category: "TITLES",
      image: "https://nextskillup.in/wp-content/uploads/2025/11/20.webp",
      price: "₹49"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <SEO 
        title="Shop - GET DIGITAL PACK | Premium Video Editing Assets"
        description="Browse our collection of premium video editing assets, transitions, LUTs, sound effects, and more."
        keywords="video editing shop, buy transitions, buy luts, sound effects store, video assets"
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-black text-gray-900 tracking-tight cursor-pointer">
            GET DIGITAL PACK
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary font-bold text-lg transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-primary font-bold text-lg transition-colors">
              Shop
            </Link>
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-primary transition-colors" />
          </nav>
        </div>
      </header>

      {/* Breadcrumb & Title */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary cursor-pointer">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Shop</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shop</h1>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white group h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                  <div className="mb-2">
                    <span className="text-xs font-bold text-green-500 uppercase tracking-wider bg-green-50 px-2 py-1 rounded-sm inline-block mb-2 group-hover:hidden">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-4 w-full">
                    <a href="https://superprofile.bio/vp/creator-pro" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gray-900 hover:bg-primary text-white font-bold py-2 rounded transition-colors duration-300">
                        Buy Now - {item.price}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination Placeholder */}
        <div className="flex justify-center mt-12 gap-2">
          <Button variant="outline" className="w-10 h-10 p-0 font-bold bg-primary text-white border-primary">1</Button>
          <Button variant="outline" className="w-10 h-10 p-0 font-bold hover:bg-gray-100">2</Button>
          <Button variant="outline" className="w-10 h-10 p-0 font-bold hover:bg-gray-100">3</Button>
          <span className="flex items-end px-2">...</span>
          <Button variant="outline" className="px-4 font-bold hover:bg-gray-100">Next</Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-black tracking-tight mb-2">GET DIGITAL PACK</div>
              <p className="text-gray-400 text-sm">Premium assets for modern creators.</p>
            </div>
            <div className="flex gap-6 text-sm font-medium text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} getdigitalpack.shop. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
