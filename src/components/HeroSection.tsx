import { Button } from "@/components/ui/button";
import { Upload, Zap, Target } from "lucide-react";
import React from "react";

// Replace with your actual image path or import
const heroBg = "/assests/hero.jpg"; // Example path

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Revolutionize Your{" "}
            <span className="text-gradient">Resume</span>{" "}
            with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get personalized feedback, skill improvement suggestions, and 
            tailored job recommendations instantly with our AI-powered platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-hero text-lg px-8 py-4"
              onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Upload className="mr-2" size={20} />
              Start Evaluation
            </Button>
            <Button 
              variant="outline" 
              className="btn-ghost text-lg px-8 py-4"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-premium text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Zap className="text-primary" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-foreground/70">Resumes Analyzed</div>
            </div>

            <div className="card-premium text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Target className="text-primary" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">95%</div>
              <div className="text-foreground/70">Accuracy Rate</div>
            </div>

            <div className="card-premium text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Upload className="text-primary" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">5 Min</div>
              <div className="text-foreground/70">Analysis Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '-1s' }}></div>
    </section>
  );
};

export default HeroSection;