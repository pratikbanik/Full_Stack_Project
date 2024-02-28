import React, { useState } from "react";

function Setting() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("USD");
  const [distanceUnit, setDistanceUnit] = useState("miles");

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleDistanceUnitChange = (e) => {
    setDistanceUnit(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Enable Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsToggle}
              className="toggle-checkbox"
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">Dark Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkModeEnabled}
              onChange={handleDarkModeToggle}
              className="toggle-checkbox"
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="language" className="text-lg block mb-2">
            Language
          </label>
          <select
            id="language"
            className="border rounded-md p-2"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* Add more language options here */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="currency" className="text-lg block mb-2">
            Currency
          </label>
          <select
            id="currency"
            className="border rounded-md p-2"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currency options here */}
          </select>
        </div>
        <div>
          <label className="text-lg block mb-2">Distance Unit</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                value="miles"
                checked={distanceUnit === "miles"}
                onChange={handleDistanceUnitChange}
                className="mr-2"
              />
              Miles
            </label>
            <label>
              <input
                type="radio"
                value="kilometers"
                checked={distanceUnit === "kilometers"}
                onChange={handleDistanceUnitChange}
                className="mr-2"
              />
              Kilometers
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
