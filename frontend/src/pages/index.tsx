// pages/index.tsx
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import PricingCard from "../components/PricingCard";
import ComparisonSection from "../components/ComparisonSection";
import PricingSection from "../components/PricingSection";
import FaqSection from "../components/FaqSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      {/* Map through your pricing plans and render PricingCard components */}
      <ComparisonSection />
      <PricingSection />
      <FaqSection />
      <TestimonialsSection />
      <Footer />
      <Analytics />
    </div>
  );
}
