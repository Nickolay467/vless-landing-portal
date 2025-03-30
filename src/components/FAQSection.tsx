
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Что такое HurikyNetwork VPN и как он работает?",
    answer: "HurikyNetwork VPN - это современный VPN протокол, который обеспечивает безопасные, зашифрованные соединения между вашим устройством и нашими серверами. Он работает путем маршрутизации вашего интернет-трафика через зашифрованные туннели, скрывая ваш IP-адрес и защищая ваши данные от посторонних глаз."
  },
  {
    question: "Чем HurikyNetwork отличается от других VPN протоколов?",
    answer: "HurikyNetwork разработан, чтобы быть быстрее и эффективнее, чем традиционные VPN протоколы. Он использует современные методы шифрования при уменьшении накладных расходов, что приводит к лучшей скорости и надежности, особенно в сетях с ограничениями."
  },
  {
    question: "Могу ли я использовать HurikyNetwork VPN на нескольких устройствах?",
    answer: "Да, в зависимости от вашего тарифа. Наш Базовый тариф поддерживает 1 подключение, Премиум - 5 одновременных подключений, а Корпоративный - неограниченное количество подключений. Все тарифы работают на Windows, Mac, iOS, Android и Linux."
  },
  {
    question: "Замедлит ли HurikyNetwork VPN мое интернет-соединение?",
    answer: "Все VPN потенциально могут снизить скорость интернета из-за накладных расходов на шифрование. Однако HurikyNetwork разработан для минимизации этого воздействия. Большинство пользователей замечают минимальное снижение скорости, а некоторые даже испытывают улучшение скорости, если их интернет-провайдер ограничивает определенные сервисы."
  },
  {
    question: "Вы храните логи моей онлайн-активности?",
    answer: "Нет. Мы придерживаемся строгой политики отсутствия логов. Мы не отслеживаем, не собираем и не передаем данные о ваших действиях в интернете, журналы подключений или IP-адреса. Ваша конфиденциальность - наш приоритет."
  },
  {
    question: "Могу ли я использовать стриминговые сервисы с HurikyNetwork VPN?",
    answer: "Абсолютно! Наши тарифы Премиум и Корпоративный оптимизированы для стриминговых сервисов. Вы можете получить доступ к контенту с Netflix, Hulu, Disney+ и других платформ из любой точки мира с высоким качеством."
  },
  {
    question: "Есть ли гарантия возврата денег?",
    answer: "Да, мы предлагаем 30-дневную гарантию возврата денег на все наши тарифы. Если вы не удовлетворены нашим сервисом по какой-либо причине, вы можете запросить полный возврат средств в течение первых 30 дней вашей подписки."
  },
  {
    question: "Как настроить HurikyNetwork VPN на моем устройстве?",
    answer: "Настройка HurikyNetwork VPN очень проста. После покупки тарифа вы получите ссылки для скачивания и подробные инструкции по установке. Наши приложения имеют функцию подключения в один клик, а наша команда поддержки всегда готова помочь, если вам понадобится помощь."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-security-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые <span className="text-gradient">вопросы</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Найдите ответы на распространенные вопросы о нашем VPN сервисе HurikyNetwork.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-black/40 rounded-xl px-6 border border-white/5">
                <AccordionTrigger className="text-left text-lg font-medium py-4 [&[data-state=open]>svg]:text-yellow-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
