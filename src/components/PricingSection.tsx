// components/PricingSection.tsx
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const pricingPlans = [
    {
      id: "starter",
      title: "Starter",
      price: "49",
      currency: "USD",
      originalPrice: "99",
      features: [
        "Access to standard code snippets",
        "20 AI-powered snippets per month",
        "Community support",
      ],
      stripeUrl: "https://buy.stripe.com/4gw16X8kffncfgAcMM",
      isPopular: false,
    },
    {
      id: "pro",
      title: "Pro",
      price: "69",
      currency: "USD",
      originalPrice: "119",
      features: [
        "Unlimited AI-powered snippets",
        "Premium snippet library",
        "Priority support",
      ],
      stripeUrl: "https://buy.stripe.com/7sIdTJ2ZV4Iy5G0aEF",
      isPopular: true,
    },
    // ... more plans if needed
  ];

  return (
    <div id="pricing">
      <section className="bg-white py-12 mb-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Streamline Your Code with CodeWeave
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                currency={plan.currency}
                originalPrice={plan.originalPrice}
                features={plan.features}
                stripeUrl={plan.stripeUrl}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
