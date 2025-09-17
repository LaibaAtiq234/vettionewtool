import Header from "./components/Header";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import HiringOptions from "./components/HiringOptions";
import CVCalculator from "./components/CVCalculator";
import BeforeAfterComparison from "./components/BeforeAfterComparison";
import HowSallyWorks from "./components/HowSallyWorks";
import WhyLoveSally from "./components/WhyLoveSally";
import SectionDivider from "./components/SectionDivider";
import WhySwitchToSally from "./components/WhySwitchToSally";
import TestimonialsSection from "./components/TestimonialsSection";
import SecurityPrivacySection from "./components/SecurityPrivacySection";
import MetricsSection from "./components/MetricsSection";
import ProcessFlowSection from "./components/ProcessFlowSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <HiringOptions />
      <CVCalculator />
      <HowSallyWorks />
      <WhyLoveSally />
      <BeforeAfterComparison />
      <SectionDivider />
      <WhySwitchToSally />
      <TestimonialsSection />
      <SecurityPrivacySection/>
      <MetricsSection />
      <ProcessFlowSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
