import React, { useState } from "react";
interface CheckboxState {
    login: boolean;
    salesBill: boolean;
    billUpdate: boolean;
    lrSMS: boolean;
    softwareDay: boolean;
    pm2: boolean;
    pm5: boolean;
    pm7: boolean;
    pm10: boolean;
    discountOTP: boolean;
    normal: boolean;
    point: boolean;
    club: boolean;
    withoutAmount: boolean;
  }
const SMSSending = () => {
  const [checks, setChecks] = useState({
    login: false,
    salesBill: false,
    billUpdate: false,
    lrSMS: false,
    softwareDay: false,
    pm2: false,
    pm5: false,
    pm7: false,
    pm10: false,
    discountOTP: false,
    normal: true,
    point: false,
    club: false,
    withoutAmount: false
  });
  const toggleCheck = (name: keyof CheckboxState) => {
    setChecks(prev => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white border border-gray-200 rounded-sm">
      {/* Header */}
      <h1 className="text-lg font-bold mb-4 border-b pb-2">SMS Sending</h1>
      {/* General SMS Section */}
      <div className="mb-6">
        <h2 className="font-medium mb-2">General SMS</h2>
        <div className="space-y-2 pl-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="login"
              checked={checks.login}
              onChange={() => toggleCheck("login")}
              className="h-4 w-4"
            />
            <label htmlFor="login" className="ml-2 text-sm">Login</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="salesBill"
              checked={checks.salesBill}
              onChange={() => toggleCheck("salesBill")}
              className="h-4 w-4"
            />
            <label htmlFor="salesBill" className="ml-2 text-sm">Sales Bill</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="billUpdate"
              checked={checks.billUpdate}
              onChange={() => toggleCheck("billUpdate")}
              className="h-4 w-4"
            />
            <label htmlFor="billUpdate" className="ml-2 text-sm">Bill Update SMS</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lrSMS"
              checked={checks.lrSMS}
              onChange={() => toggleCheck("lrSMS")}
              className="h-4 w-4"
            />
            <label htmlFor="lrSMS" className="ml-2 text-sm">On Sales Bill Update LR SMS</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="softwareDay"
              checked={checks.softwareDay}
              onChange={() => toggleCheck("softwareDay")}
              className="h-4 w-4"
            />
            <label htmlFor="softwareDay" className="ml-2 text-sm">Software Day - Closing Sales</label>
          </div>
          <div className="pl-6 text-sm mb-1">Day Sales SMS Upto</div>
          <div className="pl-6 grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pm2"
                checked={checks.pm2}
                onChange={() => toggleCheck("pm2")}
                className="h-4 w-4"
              />
              <label htmlFor="pm2" className="ml-2 text-sm">For 02.00 P.M.</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pm5"
                checked={checks.pm5}
                onChange={() => toggleCheck("pm5")}
                className="h-4 w-4"
              />
              <label htmlFor="pm5" className="ml-2 text-sm">For 05.00 P.M.</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pm7"
                checked={checks.pm7}
                onChange={() => toggleCheck("pm7")}
                className="h-4 w-4"
              />
              <label htmlFor="pm7" className="ml-2 text-sm">For 07.00 P.M.</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pm10"
                checked={checks.pm10}
                onChange={() => toggleCheck("pm10")}
                className="h-4 w-4"
              />
              <label htmlFor="pm10" className="ml-2 text-sm">For 10.00 P.M.</label>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="discountOTP"
              checked={checks.discountOTP}
              onChange={() => toggleCheck("discountOTP")}
              className="h-4 w-4"
            />
            <label htmlFor="discountOTP" className="ml-2 text-sm">For Sales Discount OTP SMS</label>
          </div>
        </div>
      </div>
      {/* Note Section */}
      <div className="mb-6 text-sm bg-yellow-50 p-2 border-l-4 border-yellow-300">
        <p><strong>Note :</strong> If we want sms to multipal number then fill like this - 7415664456,9340806036,....</p>
      </div>
      {/* SMS Format Section */}
      <div className="mb-6">
        <h2 className="font-medium mb-2">Sms Formate</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="normal"
              checked={checks.normal}
              onChange={() => toggleCheck("normal")}
              className="h-4 w-4"
            />
            <label htmlFor="normal" className="ml-2 text-sm">Normal</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="point"
              checked={checks.point}
              onChange={() => toggleCheck("point")}
              className="h-4 w-4"
            />
            <label htmlFor="point" className="ml-2 text-sm">Point</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="club"
              checked={checks.club}
              onChange={() => toggleCheck("club")}
              className="h-4 w-4"
            />
            <label htmlFor="club" className="ml-2 text-sm">Club</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="withoutAmount"
              checked={checks.withoutAmount}
              onChange={() => toggleCheck("withoutAmount")}
              className="h-4 w-4"
            />
            <label htmlFor="withoutAmount" className="ml-2 text-sm">W/O Amount</label>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-center space-x-2 mb-4">
        <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded-sm">
          Update
        </button>
        <button className="px-4 py-1 bg-gray-200 text-gray-800 text-sm rounded-sm">
          Cancel
        </button>
        <button className="px-4 py-1 bg-red-500 text-white text-sm rounded-sm">
          Close
        </button>
      </div>
      {/* Footer */}
      <div className="text-xs text-gray-500 border-t pt-2">
        <span>Created By : (Date) </span>
        <span className="ml-4">Last Updated By (Date)</span>
      </div>
    </div>
  );
};
export default SMSSending;