// components/FeatureList.tsx

const FeatureList = () => {
  return (
    <ul className="list-none text-left">
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔</span>1-minute no-code setup
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔</span>Reduce customer support
      </li>
      <li className="flex items-center">
        <span className="text-green-500 mr-2">✔</span>No 0.4% Stripe invoice fee
      </li>
    </ul>
  );
};

export default FeatureList;
