
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Алексей Иванов",
    role: "Программист",
    company: "ТехКорп",
    avatar: "/placeholder.svg",
    content: "Я пробовал множество VPN сервисов, но HurikyNetwork выделяется своей невероятной скоростью. Я могу смотреть контент в 4K без каких-либо проблем с буферизацией."
  },
  {
    name: "Светлана Петрова",
    role: "Цифровой кочевник",
    company: "Удаленная работа",
    avatar: "/placeholder.svg",
    content: "Как человек, который работает из кафе по всему миру, онлайн-безопасность имеет решающее значение. HurikyNetwork дает мне душевное спокойствие благодаря шифрованию военного уровня."
  },
  {
    name: "Михаил Чен",
    role: "Аналитик безопасности",
    company: "КиберЗащита",
    avatar: "/placeholder.svg",
    content: "С профессиональной точки зрения, HurikyNetwork реализует все протоколы безопасности, которые я рекомендую клиентам. Их политика отсутствия логов подлинная, а шифрование высшего уровня."
  },
  {
    name: "Елена Родригес",
    role: "Контент-криэйтор",
    company: "СтримЛайф",
    avatar: "/placeholder.svg",
    content: "Мне нужен стабильный доступ к контенту из разных регионов для моей работы. HurikyNetwork имеет серверы везде, где мне нужно, и они всегда быстрые и надежные."
  },
  {
    name: "Дмитрий Ким",
    role: "ИТ-менеджер",
    company: "Глобал Энтерпрайзес",
    avatar: "/placeholder.svg",
    content: "Внедрение HurikyNetwork во всей нашей компании значительно улучшило нашу безопасность. Функции управления командой отлично подходят для нашей распределенной рабочей силы."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нам доверяют <span className="text-gradient">тысячи</span> пользователей
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Узнайте, что говорят наши клиенты о своем опыте использования HurikyNetwork VPN.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full bg-vless-blue/50 rounded-xl p-6 border border-white/5">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-vless-purple/20 overflow-hidden mr-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
