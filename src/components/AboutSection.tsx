import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Coffee, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Meet the <span className="text-gradient">Developer</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Passionate about creating AI-powered solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Developer Profile */}
          <Card className="card-glow lg:col-span-2">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-background">HK</span>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">Hari Kethan Bola</h3>
                  <p className="text-xl text-primary mb-4">Full Stack Developer & AI Enthusiast</p>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Passionate developer with expertise in modern web technologies and artificial intelligence. 
                    I specialize in creating innovative solutions that bridge the gap between complex AI 
                    capabilities and user-friendly interfaces. This resume evaluator represents my commitment 
                    to helping professionals advance their careers through technology.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button className="btn-hero" asChild>
                      <a href="mailto:harikethanbola1234@gmail.com" className="inline-flex items-center">
                        <Mail className="mr-2" size={20} />
                        Get in Touch
                      </a>
                    </Button>
                    <Button variant="outline" className="btn-ghost" asChild>
                      <a href="tel:+918919751369" className="inline-flex items-center">
                        Call: +91 8919751369
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="card-glow">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Code className="text-primary" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient mb-2">5+</div>
                <div className="text-foreground/70">Years Experience</div>
              </div>
            </Card>

            <Card className="card-glow">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Zap className="text-accent" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient mb-2">50+</div>
                <div className="text-foreground/70">Projects Completed</div>
              </div>
            </Card>

            <Card className="card-glow">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Coffee className="text-primary" size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gradient mb-2">∞</div>
                <div className="text-foreground/70">Cups of Coffee</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="card-glow mt-12">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-gradient">Technology Stack</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "React", "TypeScript", "Node.js", "Python", 
                "TailwindCSS", "MongoDB", "PostgreSQL", "AWS",
                "Docker", "OpenAI", "TensorFlow", "FastAPI"
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors"
                >
                  <div className="font-medium text-sm">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Team Section */}
        <Card className="card-glow mt-12">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-gradient">Team CodeCrafters</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-background">HK</span>
                </div>
                <h4 className="font-bold mb-1">Hari Kethan Bola</h4>
                <p className="text-sm text-foreground/70">Frontend & Architecture</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-background">CM</span>
                </div>
                <h4 className="font-bold mb-1">Charan Mancha</h4>
                <p className="text-sm text-foreground/70">Backend + Resume Parser</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-background">JC</span>
                </div>
                <h4 className="font-bold mb-1">Jagadeesh Chalamcharla</h4>
                <p className="text-sm text-foreground/70">AI/NLP Integration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-background">LR</span>
                </div>
                <h4 className="font-bold mb-1">Likhitha Ramya Mandala</h4>
                <p className="text-sm text-foreground/70">UX Design + Testing</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <Button variant="outline" size="lg" className="btn-ghost" asChild>
            <a href="https://github.com/HariKethanBola" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              GitHub
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="btn-ghost" asChild>
            <a href="https://www.linkedin.com/in/hari-kethan-bola-9384602b2" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="btn-ghost" asChild>
            <a href="mailto:harikethanbola1234@gmail.com">
              <Mail className="mr-2" size={20} />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;