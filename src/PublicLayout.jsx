import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header className="bg-black py-4 px-6">
        <Header />
      </header>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
