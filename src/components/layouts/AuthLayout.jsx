import React from "react";
import CARD_2 from "../../assets/images/card2.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-green-700">Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-green-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-green-600 absolute -top-7 left-7"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-green-400 absolute top-1/3 left-1/4"></div>
        <div className="w-48 h-48 rounded-[40px] bg-green-500 absolute -bottom-7 right-10"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCardA
            icon={<LuTrendingUpDown className="text-green-600" />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-green-700"
          />
        </div>

        <img
          src={CARD_2}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-green-400/20"
          alt="Expense Tracker Illustration"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
