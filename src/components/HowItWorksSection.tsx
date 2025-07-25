import { Card } from "@/components/ui/card";
import { Upload, Brain, Target, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      description: "Simply drag and drop your resume in PDF or DOCX format. Our secure platform ensures your data privacy.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI algorithms extract skills, analyze experience, and identify gaps in your profile.",
      color: "accent"
    },
    {
      icon: Target,
      title: "Get Insights",
      description: "Receive personalized recommendations, skill suggestions, and perfectly matched job opportunities.",
      color: "primary"
    },
    {
      icon: Download,
      title: "Take Action",
      description: "Download your comprehensive report and start implementing the recommended improvements.",
      color: "accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Transform your career in just 4 simple steps with our AI-powered platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="card-glow text-center relative">
                <div className="p-8">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-background font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl ${
                      step.color === 'primary' 
                        ? 'bg-primary/20' 
                        : 'bg-accent/20'
                    }`}>
                      <IconComponent 
                        className={step.color === 'primary' ? 'text-primary' : 'text-accent'} 
                        size={32} 
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Flow Animation */}
        <div className="hidden lg:flex justify-center mt-12">
          <div className="flex items-center space-x-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                {index < 2 && (
                  <div className="w-4 h-4 bg-accent rounded-full mx-4 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="card-premium text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-gradient mb-2">⚡</div>
              <h4 className="font-bold mb-2">Lightning Fast</h4>
              <p className="text-sm text-foreground/70">
                Get results in under 5 minutes with our optimized AI engine.
              </p>
            </div>
          </Card>

          <Card className="card-premium text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-gradient mb-2">🔒</div>
              <h4 className="font-bold mb-2">Secure & Private</h4>
              <p className="text-sm text-foreground/70">
                Your data is encrypted and deleted after analysis.
              </p>
            </div>
          </Card>

          <Card className="card-premium text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-gradient mb-2">🎯</div>
              <h4 className="font-bold mb-2">Highly Accurate</h4>
              <p className="text-sm text-foreground/70">
                95% accuracy rate based on current job market trends.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;