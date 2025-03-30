
import { Shield, Zap, Globe, Lock, Server, Smartphone, Wifi, Clock } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-vless-purple" />,
    title: "Military-grade Encryption",
    description: "Protect your data with AES-256 encryption, the same standard used by security experts worldwide."
  },
  {
    icon: <Zap className="h-6 w-6 text-vless-cyan" />,
    title: "Lightning Speed",
    description: "Enjoy ultra-fast connections with our optimized VLESS protocol and 10Gbps server network."
  },
  {
    icon: <Globe className="h-6 w-6 text-vless-pink" />,
    title: "Global Server Network",
    description: "Access content from anywhere with servers in over 30 countries around the world."
  },
  {
    icon: <Lock className="h-6 w-6 text-vless-purple" />,
    title: "No-logs Policy",
    description: "We never track, collect, or share your browsing data. Your privacy is guaranteed."
  },
  {
    icon: <Server className="h-6 w-6 text-vless-cyan" />,
    title: "Dedicated Servers",
    description: "Get personal dedicated IP addresses with private servers for enhanced security."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-vless-pink" />,
    title: "Multi-device Support",
    description: "Connect all your devices simultaneously with support for Windows, Mac, iOS, Android, and Linux."
  },
  {
    icon: <Wifi className="h-6 w-6 text-vless-purple" />,
    title: "Anti-ISP Throttling",
    description: "Bypass ISP bandwidth throttling for consistent streaming and download speeds."
  },
  {
    icon: <Clock className="h-6 w-6 text-vless-cyan" />,
    title: "24/7 Support",
    description: "Get help anytime with our round-the-clock customer support team."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 network-lines opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="text-gradient">Features</span> for Ultimate Protection
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our VLESS VPN offers cutting-edge security features with uncompromising performance, allowing you to browse, stream, and work with complete confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-vless-blue/50 rounded-xl p-6 border border-white/5 hover:border-vless-purple/50 transition-all duration-300"
            >
              <div className="rounded-full bg-vless-purple/10 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
