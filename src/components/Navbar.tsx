
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { LightningBoltIcon } from "@/components/icons/LightningBoltIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vless-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-yellow-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <LightningBoltIcon className="h-6 w-6 text-yellow-400 animate-lightning-flash relative z-10" />
              </div>
              <span className="text-xl font-bold text-white">HurikyNetwork</span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Тарифы</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</a></li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-yellow text-vless-dark font-medium hover:opacity-90 transition-opacity">
              Начать
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-vless-dark border-b border-white/10">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">Возможности</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white">Тарифы</a>
            <a href="#faq" className="block px-3 py-2 text-gray-300 hover:text-white">FAQ</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">О нас</a>
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-yellow text-vless-dark font-medium hover:opacity-90 transition-opacity">
                Начать
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
