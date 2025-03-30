
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is VLESS VPN and how does it work?",
    answer: "VLESS VPN is a modern VPN protocol that provides secure, encrypted connections between your device and our servers. It works by routing your internet traffic through encrypted tunnels, hiding your IP address and protecting your data from prying eyes."
  },
  {
    question: "How is VLESS different from other VPN protocols?",
    answer: "VLESS is designed to be faster and more efficient than traditional VPN protocols. It uses modern encryption techniques while reducing overhead, resulting in better speeds and reliability, especially on networks with restrictions."
  },
  {
    question: "Can I use VLESS VPN on multiple devices?",
    answer: "Yes, depending on your plan. Our Basic plan supports 1 connection, Premium supports 5 simultaneous connections, and Enterprise offers unlimited connections. All plans work across Windows, Mac, iOS, Android, and Linux."
  },
  {
    question: "Will VLESS VPN slow down my internet connection?",
    answer: "All VPNs can potentially reduce internet speed due to encryption overhead. However, VLESS is designed to minimize this impact. Most users notice minimal speed reduction, and some even experience improved speeds if their ISP is throttling certain services."
  },
  {
    question: "Do you keep logs of my online activity?",
    answer: "No. We maintain a strict no-logs policy. We don't track, collect, or share any of your browsing activities, connection logs, or IP addresses. Your privacy is our priority."
  },
  {
    question: "Can I stream content with VLESS VPN?",
    answer: "Absolutely! Our Premium and Enterprise plans are optimized for streaming services. You can access content from Netflix, Hulu, Disney+, and other platforms from anywhere in the world with high-definition quality."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our service for any reason, you can request a full refund within the first 30 days of your subscription."
  },
  {
    question: "How do I set up VLESS VPN on my device?",
    answer: "Setting up VLESS VPN is easy. After purchasing a plan, you'll receive download links and detailed setup instructions. Our apps feature one-click connections, and our support team is available to help if you need assistance."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-vless-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our VLESS VPN service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-vless-blue/50 rounded-xl px-6 border border-white/5">
                <AccordionTrigger className="text-left text-lg font-medium py-4">
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
