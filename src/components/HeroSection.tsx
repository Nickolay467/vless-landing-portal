
import { Button } from "@/components/ui/button";
import { Shield, Lock, Zap, Globe, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400 mb-6">
              <Lock className="mr-1 h-3 w-3" /> Военный уровень шифрования
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ваш персональный <span className="text-gradient">VPN сервис</span> для полной приватности
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Получите неограниченный, зашифрованный доступ к интернету с нашим высокоскоростным HurikyNetwork VPN. Защитите вашу онлайн-личность и путешествуйте по сети с уверенностью.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-yellow button-glow-yellow hover:opacity-90 transition-opacity">
                Начать <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                Узнать больше
              </Button>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="flex -space-x-2 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-vless-dark bg-gray-800"></div>
                ))}
              </div>
              <div className="ml-2 text-sm text-gray-400">
                <span className="font-semibold text-white">2,000+</span> пользователей доверяют нам
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative animate-floating">
              <div className="glass-card rounded-2xl p-6 relative z-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <Zap className="h-8 w-8 text-yellow-400 mr-2" />
                    <span className="text-xl font-bold">HurikyNetwork</span>
                  </div>
                  <div className="flex items-center px-3 py-1 rounded-full bg-green-500/20">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                    <span className="text-xs text-green-500">Подключено</span>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Ваш IP:</span>
                    <span className="text-sm font-mono">255.255.255.255</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Сервер:</span>
                    <span className="text-sm font-mono">Москва, РФ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-400">Шифрование:</span>
                    <span className="text-sm font-mono">AES-256</span>
                  </div>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
                  <div className="absolute h-full w-3/4 bg-gradient-to-r from-yellow-400 to-yellow-200 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <Zap className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                    <span className="text-xs">10 Гбит/с</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <Globe className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                    <span className="text-xs">30+ Локаций</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <Lock className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
                    <span className="text-xs">Без логов</span>
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
