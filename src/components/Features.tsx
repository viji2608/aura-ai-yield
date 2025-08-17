import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Settings, 
  Coins,
  ArrowRight 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Strategy Engine",
      description: "Advanced machine learning algorithms continuously analyze market conditions, yield rates, and risk factors to identify optimal DeFi strategies across the Andromeda ecosystem.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Smart Vaults & Asset Management", 
      description: "Secure smart contracts hold and manage user funds, automatically deploying assets into the highest-yielding protocols while maintaining safety through battle-tested code.",
      color: "text-accent"
    },
    {
      icon: Settings,
      title: "Automated Rebalancing",
      description: "Dynamic fund movement across protocols based on real-time analysis. Our system rebalances portfolios automatically to chase yields and minimize risks.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Risk-Adjusted Returns",
      description: "Intelligent risk assessment considers protocol audits, TVL, historical performance, and market volatility to optimize the risk-reward ratio for your investments.",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      title: "Yield Distribution & Compounding",
      description: "Automated yield harvesting with options for compounding returns back into vaults or distributing rewards to maximize your earning potential.",
      color: "text-primary"
    },
    {
      icon: Coins,
      title: "Cross-Chain Optimization",
      description: "Leverage Andromeda's cross-chain capabilities to access yield opportunities across multiple Cosmos SDK chains via IBC for maximum capital efficiency.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligent Money
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of DeFi with our comprehensive suite of AI-powered tools 
            designed to maximize your returns while minimizing risk.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-6 hover:shadow-primary transition-smooth group hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg gradient-card border border-border/20">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              <Button variant="ghost" size="sm" className="group">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Optimizing?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Join thousands of users who are already maximizing their DeFi yields with AuraFi's intelligent strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="hero" size="lg">
              Launch App
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;