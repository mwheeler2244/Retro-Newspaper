"use client";

import { Menu, X } from "lucide-react";

interface NavigationProps {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  handleNavLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    title: string
  ) => void;
}

export default function Navigation({
  isDarkMode,
  isMenuOpen,
  setIsMenuOpen,
  handleNavLinkClick,
}: NavigationProps) {
  const navItems = [
    "LATEST",
    "FEATURED",
    "STAR INTERVIEWS",
    "SCANDALS",
    "FILM REVIEWS",
    "BOX OFFICE",
    "PREMIERES",
    "BACKSTAGE",
  ];

  const movies = [
    { title: "TAXI DRIVER", rating: "9.1" },
    { title: "CHINATOWN", rating: "8.8" },
    { title: "THE GODFATHER", rating: "9.8" },
    { title: "ROCKY", rating: "8.7" },
    { title: "STAR WARS", rating: "9.3" },
    { title: "ONE FLEW OVER", rating: "8.7" },
  ];

  return (
    <nav
      className={`border-b-2 ${
        isDarkMode
          ? "border-amber-700 bg-[#1e1e1e]"
          : "border-black bg-[#f8f1e5]"
      }`}
    >
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`cursor-pointer lg:hidden ${isMenuOpen ? "hidden" : ""} ${
            isDarkMode
              ? "bg-amber-700 text-amber-200 hover:bg-amber-600"
              : "bg-[#8B4513] text-white hover:bg-[#A0522D]"
          } p-2 m-2 rounded-lg transition-colors duration-300 relative z-50 flex items-center gap-2`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span
            className="text-sm font-bold"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            MENU
          </span>
        </button>
      </div>

      <div className="hidden lg:block overflow-x-auto">
        <div className=" flex items-center justify-between px-4 md:px-8 min-w-max py-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => handleNavLinkClick(e, item)}
              className={`px-2 lg:px-3 xl:px-6 py-1 text-xs md:text-sm font-bold ${
                isDarkMode
                  ? "hover:bg-amber-800 hover:text-amber-200 text-amber-300"
                  : "hover:bg-black hover:text-white text-black"
              } transition-colors duration-200 whitespace-nowrap uppercase`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed inset-0 ${
            isDarkMode
              ? "z-40 lg:hidden transition-opacity duration-300 backdrop-blur-sm"
              : "bg-opacity-10 z-40 lg:hidden transition-opacity duration-300 backdrop-blur-sm"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[400px] ${
          isDarkMode
            ? "bg-[#111] border-l border-amber-800"
            : "bg-white border-l border-gray-200"
        } z-50 lg:hidden transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } overflow-y-auto shadow-2xl`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2
              className={`text-xl font-bold ${
                isDarkMode ? "text-amber-300" : "text-black"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Navigation
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={`cursor-pointer p-2 rounded-full ${
                isDarkMode
                  ? "bg-amber-800/50 text-amber-200 hover:bg-amber-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              } transition-colors duration-200 hover:scale-110 transform`}
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className={`mb-8 p-4 rounded-lg ${
              isDarkMode ? "bg-[#1a1a1a]" : "bg-gray-100"
            } transform transition-all duration-300 hover:scale-[1.02]`}
          >
            <h3
              className={`text-sm font-bold mb-4 ${
                isDarkMode ? "text-amber-400" : "text-gray-700"
              } flex items-center gap-2`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <span className="w-8 h-[2px] bg-current"></span>
              NOW SHOWING
              <span className="w-8 h-[2px] bg-current"></span>
            </h3>
            <div className="space-y-3">
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-2 rounded-md`}
                >
                  <span
                    className={`text-sm font-bold ${
                      isDarkMode ? "text-amber-300" : "text-gray-800"
                    }`}
                  >
                    {movie.title}
                  </span>
                  <span
                    className={`${
                      isDarkMode
                        ? "bg-amber-800 text-amber-200"
                        : "bg-[#8b4513] text-white"
                    } rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold`}
                  >
                    {movie.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  handleNavLinkClick(e, item);
                  setIsMenuOpen(false);
                }}
                className={`block py-3 px-4 rounded-lg text-sm font-bold ${
                  isDarkMode
                    ? "text-amber-300 hover:bg-amber-900/50"
                    : "text-black hover:bg-gray-100"
                } transition-all duration-200 hover:translate-x-2 relative overflow-hidden`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <span className="relative z-10">{item}</span>
                <span
                  className={`absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 ${
                    isDarkMode ? "bg-amber-900/30" : "bg-gray-100"
                  } group-hover:scale-x-100`}
                ></span>
              </a>
            ))}
          </div>

          <div
            className={`mt-8 p-4 rounded-lg ${
              isDarkMode ? "bg-amber-900/20" : "bg-gray-100"
            } transform transition-all duration-300 hover:scale-[1.02]`}
          >
            <p
              className={`text-sm mb-4 ${
                isDarkMode ? "text-amber-200" : "text-gray-600"
              }`}
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Subscribe to our newsletter for the latest Hollywood news and
              exclusive content.
            </p>
            <button
              className={`cursor-pointer w-full py-3 px-4 rounded ${
                isDarkMode
                  ? "bg-amber-700 text-black hover:bg-amber-600"
                  : "bg-[#8B4513] text-white hover:bg-[#A0522D]"
              } text-sm font-bold transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg relative overflow-hidden group`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
              }}
            >
              <span className="relative z-10">SUBSCRIBE NOW</span>
              <span
                className={`absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 ${
                  isDarkMode ? "bg-amber-600" : "bg-[#A0522D]"
                } group-hover:scale-x-100`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
