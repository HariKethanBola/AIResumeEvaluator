import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              ResumeAI
            </h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              Empowering professionals with AI-driven resume analysis and career guidance. 
              Transform your career trajectory with intelligent insights and personalized recommendations.
            </p>
            <div className="flex items-center text-sm text-foreground/50">
              <span>Made with</span>
              <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
              <span>by Hari Kethan Bola</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#upload" className="text-foreground/70 hover:text-primary transition-colors">
                  Upload Resume
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About Developer
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/HariKethanBola"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/hari-kethan-bola-9384602b2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:harikethanbola1234@gmail.com"
              className="text-foreground/50 hover:text-primary transition-colors text-sm"
            >
              Email
            </a>
            <a 
              href="tel:+918919751369"
              className="text-foreground/50 hover:text-primary transition-colors text-sm"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
