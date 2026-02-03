import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuemSomos from "@/components/QuemSomos";
import Servicos from "@/components/Servicos";
import Infraestrutura from "@/components/Infraestrutura";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <QuemSomos />
      <Servicos />
      <Infraestrutura />
      <Localizacao />
      <Footer />
    </>
  );
}
