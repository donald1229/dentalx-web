import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black py-4 px-6">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PublicLayout;
