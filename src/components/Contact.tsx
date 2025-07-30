
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';

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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS integration
    try {
      await emailjs.send(
        'service_01f1ib5', // EmailJS service ID
        'template_kz9fb2b', // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'KD2A0qFk62129EVkk' // EmailJS public key
      );
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
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
                      <a href="mailto:monier.developer@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                        monier.developer@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start mt-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v10.5A2.25 2.25 0 009.75 19.5h4.5a2.25 2.25 0 002.25-2.25v-1.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">LinkedIn</h4>
                      <a href="http://www.linkedin.com/in/monier-hossam-64a3a8159" className="text-gray-600 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/monier-hossam-64a3a8159
                      </a>
                    </div>
                  </div>
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
