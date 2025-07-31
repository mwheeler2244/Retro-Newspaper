"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieTicker from "./components/MovieTicker";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import GlobalStyles from "./components/GlobalStyles";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<{
    title: string;
    message: string;
  }>({ title: "", message: "" });
  const [popupPosition, setPopupPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    title: string
  ): void => {
    e.preventDefault();
    setPopupPosition({
      top: 20,
      left: window.innerWidth - 320,
    });
    setPopupContent({
      title: title,
      message: `You clicked on ${title}. This feature will be available soon!`,
    });
    setShowPopup(true);
  };

  const handleSubscriptionButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    buttonType: string
  ): void => {
    e.preventDefault();
    setPopupPosition({
      top: 20,
      left: window.innerWidth - 320,
    });
    setPopupContent({
      title: "Subscribe Now",
      message: `Please subscribe to access our ${buttonType} content! Get exclusive access to all our features.`,
    });
    setShowPopup(true);
  };

  useEffect(() => {
    const handleClickOutside = () => setShowPopup(false);
    if (showPopup) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopup]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (showPopup) {
      timeoutId = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showPopup]);

  return (
    <div
      className={`min-h-screen font-serif w-full transition-colors duration-300 ${
        isDarkMode ? "bg-[#161616]" : "bg-[#f5f5f5]"
      }`}
    >
      <GlobalStyles />

      <div
        className={`fixed inset-0 pointer-events-none ${
          isDarkMode ? "opacity-10" : "opacity-15"
        }`}
      ></div>

      <div
        className={`md:w-[95%] w-full md:max-w-[90%] mx-auto ${
          isDarkMode
            ? "bg-[#222] shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            : "bg-white shadow-lg"
        } relative`}
      >
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <MovieTicker isDarkMode={isDarkMode} />
        <Navigation
          isDarkMode={isDarkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          handleNavLinkClick={handleNavLinkClick}
        />
        <MainContent
          isDarkMode={isDarkMode}
          handleSubscriptionButtonClick={handleSubscriptionButtonClick}
        />
        <Footer isDarkMode={isDarkMode} />
      </div>

      <Popup
        showPopup={showPopup}
        popupContent={popupContent}
        popupPosition={popupPosition}
        setShowPopup={setShowPopup}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
