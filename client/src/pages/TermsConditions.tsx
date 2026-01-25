import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Terms & Conditions</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="mb-4">Last updated: January 25, 2026</p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Video Editing Bundle ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-4">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. User Representations</h2>
            <p className="mb-4">
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Products</h2>
            <p className="mb-4">
              All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Purchases and Payment</h2>
            <p className="mb-4">
              We accept the following forms of payment: Credit Cards, Debit Cards, UPI, and Net Banking. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Refund Policy</h2>
            <p className="mb-4">
              Please review our Return Policy posted on the Site prior to making any purchases.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: abhisheksharmatech99@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
