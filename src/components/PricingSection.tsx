
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Базовый",
      monthlyPrice: 299,
      annualPrice: 199,
      features: [
        "1 Подключение",
        "15 Локаций серверов",
        "До 100 Мбит/с",
        "Базовое шифрование",
        "Политика отсутствия логов",
        "Email поддержка"
      ],
      cta: "Начать",
      popular: false
    },
    {
      name: "Премиум",
      monthlyPrice: 599,
      annualPrice: 399,
      features: [
        "5 Подключений",
        "30+ Локаций серверов",
        "До 500 Мбит/с",
        "Военный уровень шифрования",
        "Политика отсутствия логов",
        "Приоритетная поддержка",
        "Блокировщик рекламы",
        "Оптимизация для стриминга"
      ],
      cta: "Выбрать Премиум",
      popular: true
    },
    {
      name: "Корпоративный",
      monthlyPrice: 1299,
      annualPrice: 999,
      features: [
        "Безлимитные подключения",
        "50+ Локаций серверов",
        "До 10 Гбит/с",
        "Военный уровень шифрования",
        "Политика отсутствия логов",
        "Выделенная поддержка 24/7",
        "Блокировщик рекламы",
        "Оптимизация для стриминга",
        "Выделенный IP адрес",
        "Панель управления командой"
      ],
      cta: "Связаться с отделом продаж",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-transparent to-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Простые <span className="text-gradient">тарифы</span>, полная защита
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Выберите идеальный план для ваших нужд. Все тарифы включают гарантию возврата денег в течение 30 дней.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="bg-black/50 p-1 rounded-full inline-flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-sm ${
                  !isAnnual ? 'bg-yellow-400 text-black' : 'text-gray-300'
                }`}
              >
                Помесячно
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-sm ${
                  isAnnual ? 'bg-yellow-400 text-black' : 'text-gray-300'
                }`}
              >
                Годовой <span className="text-xs opacity-75">Скидка 20%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-b from-black/80 to-black/50 border border-yellow-400/50 transform -translate-y-4 scale-105 z-10 shadow-xl shadow-yellow-400/20' 
                  : 'bg-black/70 border border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="bg-yellow-400 text-center py-1 text-xs font-medium text-black">
                  САМЫЙ ПОПУЛЯРНЫЙ
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}₽
                  </span>
                  <span className="text-gray-400">/месяц</span>
                </div>
                <p className="text-gray-400 mb-6">
                  {isAnnual ? 'При годовой оплате' : 'При ежемесячной оплате'}
                </p>
                
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-gradient-yellow text-black button-glow-yellow hover:opacity-90' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
