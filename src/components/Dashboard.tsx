import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Value Locked",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-success"
    },
    {
      title: "Average APY",
      value: "24.7%",
      change: "+3.2%",
      trend: "up", 
      icon: Percent,
      color: "text-primary"
    },
    {
      title: "Active Strategies",
      value: "147",
      change: "+8",
      trend: "up",
      icon: Activity,
      color: "text-accent"
    },
    {
      title: "Total Users",
      value: "3,429",
      change: "+156",
      trend: "up",
      icon: Users,
      color: "text-warning"
    }
  ];

  const vaults = [
    {
      name: "Stable Yield Vault",
      apy: "18.2%",
      tvl: "$845K",
      risk: "Low",
      status: "Active"
    },
    {
      name: "Growth Optimizer",
      apy: "31.5%", 
      tvl: "$623K",
      risk: "Medium",
      status: "Active"
    },
    {
      name: "DeFi Alpha Fund",
      apy: "42.8%",
      tvl: "$429K",
      risk: "High",
      status: "Active"
    }
  ];

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Real-Time{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Performance Dashboard
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your yields, track performance, and manage your DeFi portfolio 
            with our comprehensive analytics dashboard.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <Card key={stat.title} className="glass p-6 hover:shadow-primary transition-smooth">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg gradient-card ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 text-success" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-destructive" />
                  )}
                  <span className={stat.trend === 'up' ? 'text-success' : 'text-destructive'}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.title}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="glass rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Active Vaults</h3>
              <p className="text-muted-foreground">Your smart vaults are optimizing yields automatically</p>
            </div>
            <Button variant="hero">
              View Full Dashboard
            </Button>
          </div>

          {/* Vaults Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-4 text-muted-foreground font-medium">Vault Name</th>
                  <th className="text-left py-4 text-muted-foreground font-medium">APY</th>
                  <th className="text-left py-4 text-muted-foreground font-medium">TVL</th>
                  <th className="text-left py-4 text-muted-foreground font-medium">Risk Level</th>
                  <th className="text-left py-4 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-4 text-muted-foreground font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {vaults.map((vault, index) => (
                  <tr key={vault.name} className="border-b border-border/10">
                    <td className="py-4">
                      <div className="font-medium text-foreground">{vault.name}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-success font-semibold">{vault.apy}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-foreground">{vault.tvl}</div>
                    </td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        vault.risk === 'Low' ? 'bg-success/20 text-success' :
                        vault.risk === 'Medium' ? 'bg-warning/20 text-warning' :
                        'bg-destructive/20 text-destructive'
                      }`}>
                        {vault.risk}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-success/20 text-success">
                        {vault.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;