import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <SEO 
        title="Privacy Policy | Video Editing Bundle"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information when you purchase our video editing bundle."
      />
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="mb-4">Last updated: January 25, 2026</p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Video Editing Bundle ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at abhisheksharmatech99@gmail.com.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
            </p>
            <p className="mb-4">
              The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name and Contact Data. We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
              <li>Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you marketing and promotional communications.</li>
              <li>To fulfill and manage your orders.</li>
              <li>To deliver products to the user.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Sharing Your Information</h2>
            <p className="mb-4">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this policy, you may email us at abhisheksharmatech99@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
