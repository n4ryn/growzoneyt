import ChooseUs from "@/components/ChooseUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import Services from "@/components/Services";
import WhatsappSupport from "@/components/WhatsappSupport";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Services />
      <ChooseUs />
      <Questions />
      <Contact />

      <WhatsappSupport />
    </div>
  );
}
