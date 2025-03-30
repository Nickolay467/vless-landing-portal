
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LightningBoltIcon } from "@/components/icons/LightningBoltIcon";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-vless-purple/20 to-vless-cyan/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-vless-purple/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 py-16 px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-yellow-400/20 p-3 hover:bg-yellow-400/30 transition-all duration-300 group">
                <LightningBoltIcon className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
              Готовы взять под контроль свою <span className="text-gradient-yellow">конфиденциальность</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам довольных пользователей, которые уже защитили свое интернет-соединение с HurikyNetwork VPN. Начните свою пробную версию без риска уже сегодня.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-yellow button-glow-yellow hover:opacity-90 transition-opacity">
                Начать <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
                Связаться с отделом продаж
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              30-дневная гарантия возврата денег • Кредитная карта не требуется для пробной версии
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
