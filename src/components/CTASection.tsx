
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-vless-purple/20 to-vless-cyan/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-vless-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-vless-purple/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 py-16 px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-white/10 p-3">
                <Shield className="h-8 w-8 text-vless-purple" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
              Ready to Take Control of Your Online <span className="text-gradient">Privacy</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied users who have already secured their internet connection with VLESS VPN. Start your risk-free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary button-glow hover:opacity-90 transition-opacity">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                Contact Sales
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              30-day money-back guarantee • No credit card required for trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
