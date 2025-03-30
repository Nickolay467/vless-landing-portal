
import { Button } from "@/components/ui/button";
import { Shield, Lock, Zap, Globe, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-vless-purple/10 px-3 py-1 text-sm text-vless-purple mb-6">
              <Lock className="mr-1 h-3 w-3" /> Military-grade encryption
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Personal <span className="text-gradient">VPN Service</span> For Complete Privacy
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Get unrestricted, encrypted access to the internet with our high-speed VLESS VPN. Protect your online identity and browse with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary button-glow hover:opacity-90 transition-opacity">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-vless-dark bg-gray-800"></div>
                ))}
              </div>
              <div className="ml-2 text-sm text-gray-400">
                <span className="font-semibold text-white">2,000+</span> customers trust us
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-vless-purple/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative animate-floating">
              <div className="glass-card rounded-2xl p-6 relative z-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-vless-cyan/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-vless-purple/10 rounded-full blur-3xl -z-10"></div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-vless-purple mr-2" />
                    <span className="text-xl font-bold">VLESS Protocol</span>
                  </div>
                  <div className="flex items-center px-3 py-1 rounded-full bg-green-500/20">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                    <span className="text-xs text-green-500">Connected</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Your IP:</span>
                    <span className="text-sm font-mono">255.255.255.255</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Server:</span>
                    <span className="text-sm font-mono">Tokyo, JP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Encryption:</span>
                    <span className="text-sm font-mono">AES-256</span>
                  </div>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
                  <div className="absolute h-full w-3/4 bg-gradient-to-r from-vless-purple to-vless-cyan animate-pulse"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <Zap className="h-5 w-5 text-vless-cyan mx-auto mb-1" />
                    <span className="text-xs">10 Gbps</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <Globe className="h-5 w-5 text-vless-pink mx-auto mb-1" />
                    <span className="text-xs">30+ Locations</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <Lock className="h-5 w-5 text-vless-purple mx-auto mb-1" />
                    <span className="text-xs">No Logs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
