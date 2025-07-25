import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions about the platform or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-glow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/20 p-2 rounded-lg mr-3">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <h3 className="font-bold">Email</h3>
                </div>
                <p className="text-foreground/70">harikethanbola1234@gmail.com</p>
                <p className="text-sm text-foreground/50 mt-2">
                  I typically respond within 24 hours
                </p>
              </div>
            </Card>

            <Card className="card-glow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-accent/20 p-2 rounded-lg mr-3">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <h3 className="font-bold">Location</h3>
                </div>
                <p className="text-foreground/70">Available for remote work</p>
                <p className="text-sm text-foreground/50 mt-2">
                  Open to global opportunities
                </p>
              </div>
            </Card>

            <Card className="card-glow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/20 p-2 rounded-lg mr-3">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <h3 className="font-bold">Response Time</h3>
                </div>
                <p className="text-foreground/70">Usually within 24 hours</p>
                <p className="text-sm text-foreground/50 mt-2">
                  Monday to Friday, 9 AM - 6 PM IST
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-glow lg:col-span-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      required
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="bg-muted/30 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me more about your project or question..."
                    rows={6}
                    required
                    className="bg-muted/30 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-foreground/50 text-center">
                  By sending this message, you agree to be contacted about your inquiry.
                </p>
              </form>
            </div>
          </Card>
        </div>

        {/* Alternative Contact Methods */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-6">
            Prefer other ways to connect? Find me on:
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="btn-ghost" asChild>
              <a href="https://linkedin.com/in/harikethan" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="btn-ghost" asChild>
              <a href="https://github.com/HariKethanBola" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="btn-ghost" asChild>
              <a href="https://x.com/BoLa_HaRi15" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;