import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered DeFi Optimization</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            Maximize Your DeFi{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Yields
            </span>{" "}
            with AI
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            AuraFi revolutionizes yield generation through intelligent AI-driven strategies, 
            automatically optimizing your portfolio across Andromeda's DeFi ecosystem for maximum returns.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up">
            <Button variant="hero" size="lg" className="group">
              Start Earning
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              View Dashboard
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-xl p-6 text-center hover:shadow-primary transition-smooth">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Smart Optimization</h3>
              <p className="text-sm text-muted-foreground">
                AI analyzes market conditions in real-time
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:shadow-primary transition-smooth">
              <Shield className="h-8 w-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Risk Management</h3>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms minimize exposure
              </p>
            </div>
            <div className="glass rounded-xl p-6 text-center hover:shadow-primary transition-smooth">
              <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Auto Rebalancing</h3>
              <p className="text-sm text-muted-foreground">
                Seamless portfolio adjustments 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;