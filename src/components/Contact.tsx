
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 opacity-0 animate-fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Interested in working together or have questions about my services? 
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 opacity-0 animate-fade-in animate-delay-200">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <a href="mailto:hello@yourportfolio.com" className="text-gray-600 hover:text-primary transition-colors">
                        hello@yourportfolio.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <a href="tel:+12345678901" className="text-gray-600 hover:text-primary transition-colors">
                        +1 (234) 567-8901
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Social Media</h4>
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                          LinkedIn
                        </a>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-2">Working Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-600">Saturday: 10am - 4pm</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 opacity-0 animate-fade-in animate-delay-300">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?" 
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="How can I help you?" 
                      rows={5} 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Sending...' : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
