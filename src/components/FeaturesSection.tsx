
import { Shield, Zap, Globe, Lock, Server, Smartphone, Wifi, Clock } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-yellow-400" />,
    title: "Военный уровень шифрования",
    description: "Защитите ваши данные с шифрованием AES-256, тем же стандартом, который используют эксперты по безопасности во всем мире."
  },
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: "Молниеносная скорость",
    description: "Наслаждайтесь сверхбыстрыми соединениями с нашим оптимизированным протоколом и серверной сетью 10 Гбит/с."
  },
  {
    icon: <Globe className="h-6 w-6 text-yellow-400" />,
    title: "Глобальная сеть серверов",
    description: "Получите доступ к контенту из любой точки мира благодаря серверам в более чем 30 странах."
  },
  {
    icon: <Lock className="h-6 w-6 text-yellow-400" />,
    title: "Политика отсутствия логов",
    description: "Мы никогда не отслеживаем, не собираем и не передаем ваши данные о просмотрах. Ваша конфиденциальность гарантирована."
  },
  {
    icon: <Server className="h-6 w-6 text-yellow-400" />,
    title: "Выделенные серверы",
    description: "Получите персональные выделенные IP-адреса с частными серверами для повышенной безопасности."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-yellow-400" />,
    title: "Поддержка всех устройств",
    description: "Подключайте все свои устройства одновременно с поддержкой Windows, Mac, iOS, Android и Linux."
  },
  {
    icon: <Wifi className="h-6 w-6 text-yellow-400" />,
    title: "Обход ограничений провайдера",
    description: "Обходите ограничения интернет-провайдера для стабильной скорости потоковой передачи и загрузки."
  },
  {
    icon: <Clock className="h-6 w-6 text-yellow-400" />,
    title: "Поддержка 24/7",
    description: "Получайте помощь в любое время благодаря нашей круглосуточной службе поддержки клиентов."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 network-lines opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Продвинутые <span className="text-gradient">функции</span> для полной защиты
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Наш VPN предлагает передовые функции безопасности без ущерба для производительности, позволяя вам просматривать, стримить и работать с полной уверенностью.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/40 rounded-xl p-6 border border-white/5 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="rounded-full bg-yellow-400/10 w-12 h-12 flex items-center justify-center mb-4">
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
