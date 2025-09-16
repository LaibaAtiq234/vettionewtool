import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import HiringOptions from "./components/HiringOptions";
import CVCalculator from "./components/CVCalculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <HiringOptions />
      <CVCalculator />
    </div>
  );
}
