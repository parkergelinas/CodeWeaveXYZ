// components/PricingCard.tsx

const PricingCard = ({
  title,
  price,
  currency,
  originalPrice,
  features,
  stripeUrl,
  isPopular,
}) => {
  return (
    <div
      className={`card relative p-6 text-left ${
        isPopular ? "ring-2 ring-green-500 ring-opacity-50" : ""
      }`}
    >
      {isPopular && (
        <span className="absolute top-0 right-0 bg-green-500 text-white text-sm py-1 px-3 rounded-bl-lg">
          POPULAR CHOICE
        </span>
      )}
      <h3 className="text-xl font-semibold mb-4">{title} Plan</h3>
      <div className="text-4xl font-bold mb-4">
        <span className="text-green-600">
          {currency}${price}
        </span>
        <span className="text-sm text-gray-500 line-through ml-2">
          {currency}${originalPrice}
        </span>
      </div>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="text-green-500 mr-2">✔</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className="bg-green-500 text-white w-full py-3 rounded-md font-bold my-4 hover:bg-green-600 transition-all duration-300"
        onClick={() => (window.location.href = stripeUrl)}
      >
        Get {title}
      </button>
      <p className="text-gray-600 text-xs">
        One-time payment, it's yours forever
      </p>
    </div>
  );
};

export default PricingCard;
