import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8">
                Have questions about the Video Editing Bundle? We're here to help! Reach out to us using the contact information below or fill out the form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">abhisheksharmatech99@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We usually reply within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">WhatsApp Support</h3>
                    <p className="text-gray-600">+91 XXXXXXXXXX</p>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-32" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
