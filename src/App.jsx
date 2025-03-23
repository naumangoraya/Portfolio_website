import { useState, useEffect } from "react";
import DataEntryPage from "./components/DataEntryPage";
import PortfolioPage from "./components/PortfolioPage";
import "./App.css";

function App() {
  const [formData, setFormData] = useState(null);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Check if we have saved data in localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setShowPortfolio(true);
    }
  }, []);

  const handleFormSubmit = (data) => {
    // Save the data to localStorage
    localStorage.setItem("portfolioData", JSON.stringify(data));
    setFormData(data);
    setShowPortfolio(true);
  };

  const handleEditData = () => {
    setShowPortfolio(false);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {showPortfolio ? (
        <PortfolioPage data={formData} onEdit={handleEditData} />
      ) : (
        <DataEntryPage onSubmit={handleFormSubmit} initialData={formData} />
      )}
    </main>
  );
}

export default App;
