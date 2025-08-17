import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Twitter, 
  Github, 
  MessageCircle,
  Mail,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Dashboard", href: "#dashboard" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
    ],
    developers: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "GitHub", href: "#github" },
      { name: "Smart Contracts", href: "#contracts" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Discord", href: "#discord" },
      { name: "Contact", href: "#contact" },
      { name: "Bug Reports", href: "#bugs" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", name: "Twitter" },
    { icon: Github, href: "#github", name: "GitHub" },
    { icon: MessageCircle, href: "#discord", name: "Discord" },
    { icon: Mail, href: "#email", name: "Email" },
  ];

  return (
    <footer className="border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-lg gradient-primary">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">AuraFi</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revolutionizing DeFi yield generation through intelligent AI-driven strategies 
                on the Andromeda ecosystem.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Product */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Product</h3>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Developers */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Developers</h3>
                  <ul className="space-y-3">
                    {footerLinks.developers.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-smooth flex items-center"
                        >
                          {link.name}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Support</h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border/20">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest updates on new features and yield opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg glass border border-border/20 focus:border-primary focus:outline-none text-foreground"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/20 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2024 AuraFi. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;