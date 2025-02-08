import React from "react";

const Footer1 = () => {
  return (
    <div>
      <div className="bg-pink-50 py-8 max-w-[1440px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Feature 1 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Free Delivery
            </h3>
            <p className="text-gray-500 mt-2">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              90 Days Return
            </h3>
            <p className="text-gray-500 mt-2">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Secure Payment
            </h3>
            <p className="text-gray-500 mt-2">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
