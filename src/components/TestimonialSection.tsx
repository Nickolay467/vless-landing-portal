
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    avatar: "/placeholder.svg",
    content: "I've tried many VPN services, but VLESS stands out with its incredible speed. I can stream 4K content without any buffering issues."
  },
  {
    name: "Sarah Williams",
    role: "Digital Nomad",
    company: "Remote Life",
    avatar: "/placeholder.svg",
    content: "As someone who works from coffee shops around the world, online security is crucial. VLESS gives me peace of mind with their military-grade encryption."
  },
  {
    name: "Michael Chen",
    role: "Security Analyst",
    company: "CyberDefense",
    avatar: "/placeholder.svg",
    content: "From a professional standpoint, VLESS implements all the security protocols I recommend to clients. Their no-logs policy is genuine and their encryption is top-tier."
  },
  {
    name: "Elena Rodriguez",
    role: "Content Creator",
    company: "StreamLife",
    avatar: "/placeholder.svg",
    content: "I need consistent access to content from different regions for my work. VLESS has servers everywhere I need, and they're always fast and reliable."
  },
  {
    name: "David Kim",
    role: "IT Manager",
    company: "Global Enterprises",
    avatar: "/placeholder.svg",
    content: "Implementing VLESS across our company has improved our security posture significantly. The team management features are excellent for our distributed workforce."
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Thousands</span> Worldwide
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            See what our customers are saying about their experience with our VLESS VPN service.
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
