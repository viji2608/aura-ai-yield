import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  Brain, 
  Zap, 
  TrendingUp,
  ArrowRight,
  ArrowDown
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Wallet,
      title: "Connect & Deposit",
      description: "Connect your wallet and deposit CW20 tokens into our secure Aura Vaults. Your funds are immediately secured by battle-tested smart contracts.",
      color: "text-primary"
    },
    {
      step: "02", 
      icon: Brain,
      title: "AI Analysis",
      description: "Our AI continuously monitors yield rates, gas fees, market volatility, and protocol risk scores across the Andromeda ecosystem to identify optimal strategies.",
      color: "text-accent"
    },
    {
      step: "03",
      icon: Zap,
      title: "Auto Optimization",
      description: "Funds are automatically deployed and rebalanced across high-yield protocols. The AI makes strategic adjustments 24/7 without your intervention.",
      color: "text-success"
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Earn & Compound",
      description: "Watch your yields grow as the AI compounds returns and optimizes your portfolio. Withdraw anytime or let your earnings compound for maximum growth.",
      color: "text-warning"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AuraFi Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent platform makes DeFi yield optimization simple and automated. 
            Here's how we turn your assets into intelligent money.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-4">
                      <step.icon className={`h-10 w-10 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{step.step}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <Button variant="outline" size="sm" className="group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0 hidden lg:block">
                  <div className="w-64 h-40 glass rounded-xl flex items-center justify-center">
                    <div className={`w-24 h-24 rounded-full ${step.color} opacity-20 animate-pulse`}></div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <ArrowDown className="h-8 w-8 text-muted-foreground animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Start Your DeFi Journey Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the future of intelligent money and let AI optimize your yields while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="hero" size="lg">
                Get Started Now
              </Button>
              <Button variant="glass" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;