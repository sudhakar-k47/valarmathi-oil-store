
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { toast } from '../components/ui/use-toast';
import { submitContactToGoogleSheets, ContactFormData } from '../services/googleSheets';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // This would typically be stored in an environment variable
  const GOOGLE_SHEETS_WEBHOOK_URL = "YOUR_GOOGLE_SHEETS_WEBHOOK_URL";
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const contactData: ContactFormData = {
        ...formData,
        date: new Date().toISOString()
      };
      
      const success = await submitContactToGoogleSheets(contactData, GOOGLE_SHEETS_WEBHOOK_URL);
      
      if (success) {
        toast({
          title: "Message sent",
          description: "Thank you for your message. We will get back to you soon!",
          duration: 3000,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-teal-900">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to place a bulk order? We'd love to hear from you. Reach out to us using any of the methods below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="bg-cream-50 rounded-lg p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-teal-800">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-salmon-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Oil Press Lane<br />
                        Anna Nagar, Chennai<br />
                        Tamil Nadu, India - 600001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-salmon-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@valarmathioils.com" className="hover:text-teal-700 transition-colors">
                          info@valarmathioils.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="mailto:orders@valarmathioils.com" className="hover:text-teal-700 transition-colors">
                          orders@valarmathioils.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-salmon-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+919876543210" className="hover:text-teal-700 transition-colors">
                          +91 98765 43210
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+914435678910" className="hover:text-teal-700 transition-colors">
                          +91 44 3567 8910
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-salmon-500 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-teal-800">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:opacity-70 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="h-5 w-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
