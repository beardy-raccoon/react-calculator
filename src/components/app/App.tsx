import React from "react";
import Calculator from "@/components/calculator/Calculator";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[95svh]">
      <Header />
      <h1 className="pt-10 text-2xl">React calculator</h1>
      <main className="flex justify-center grow">
        <Calculator />
      </main>
      <Footer />
    </div>
  );
};

export default App;
