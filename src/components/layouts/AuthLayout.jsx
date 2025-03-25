import React from "react";
import { LuTrendingUp, LuTrendingUpDown } from "react-icons/lu";
import CARD_2 from "../../assets/images/card2.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black ">Finance Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-green-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative"> 
        <div className="w-48 h-48 rounded-[40px] bg-green-600 absolute -top-7 -left-7"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-green-400 absolute top-[30%] -right-10"></div>
        <div className="w-48 h-48 rounded-[40px] bg-green-500 absolute -bottom-7 -left-7"></div>

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown className="text-white" />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-green-500"
          />
        </div>

        <img
          src={CARD_2}
          className="w-64 lg:w-[90%] absolute bottom-10 shadow-lg rounded-xl overflow-hidden shadow-green-400/20"
          alt="Finance Tracker Illustration"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-green-400/20 boarder border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl shadow-lg`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm font-medium text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px] font-medium">${value}</span>
      </div>
    </div>
  );
};
