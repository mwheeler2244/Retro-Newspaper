"use client";

import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  return (
    <header
      className={`border-b-4 ${
        isDarkMode
          ? "border-amber-700 bg-[#1e1e1e]"
          : "border-black bg-[#f8f1e5]"
      } p-2 sm:p-3 md:p-6 flex flex-col justify-between items-center gap-2 sm:gap-4`}
    >
      <div className="w-full flex justify-end px-2 sm:px-4">
        <button
          onClick={toggleTheme}
          className={`cursor-pointer p-2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
            isDarkMode
              ? "bg-amber-700 text-amber-200"
              : "bg-[#8B4513] text-white"
          } transition-colors duration-300`}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        <div className="sm:col-span-6 lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
          <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] flex-shrink-0">
            <div
              className={`w-full h-full rounded-full border-4 ${
                isDarkMode
                  ? "border-amber-700 bg-[#111]"
                  : "border-black bg-white"
              } flex items-center justify-center relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 ${
                  isDarkMode
                    ? "bg-[#111] opacity-70"
                    : "bg-[#f8f8f8] opacity-50"
                }`}
              ></div>

              <div className="relative z-10 mb-2 w-full h-full flex flex-col items-center justify-center">
                <div
                  className={`text-[7px] sm:text-[8px] md:text-[10px] absolute top-[15%] text-center font-bold tracking-widest ${
                    isDarkMode ? "text-amber-400" : "text-black"
                  }`}
                >
                  STAR
                </div>
                <div
                  className={`text-[5px] sm:text-[6px] md:text-[8px] absolute top-[30%] text-center tracking-widest ${
                    isDarkMode ? "text-amber-300" : "text-black"
                  }`}
                >
                  STUDIOS
                </div>
                <div
                  className={`text-[5px] sm:text-[6px] md:text-[8px] absolute top-[45%] text-center ${
                    isDarkMode ? "text-amber-300" : "text-black"
                  }`}
                >
                  EST. 1972
                </div>
                <div
                  className={`w-[30px] sm:w-[35px] md:w-[45px] h-[1px] absolute top-[60%] ${
                    isDarkMode ? "bg-amber-600" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`text-[14px] sm:text-[16px] md:text-[28px] absolute top-[52%] text-center transform -rotate-6 ${
                    isDarkMode ? "text-amber-500" : "text-black"
                  }`}
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    textShadow: isDarkMode
                      ? "1px 1px 0 rgba(255,193,7,0.3)"
                      : "1px 1px 0 rgba(0,0,0,0.1)",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  S
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div
              className={`text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wide ${
                isDarkMode ? "text-amber-200" : "text-black"
              }`}
              style={{
                fontFamily: "'Abril Fatface', serif",
                textShadow: isDarkMode
                  ? "1px 1px 0 rgba(255,193,7,0.3)"
                  : "1px 1px 0 rgba(0,0,0,0.1)",
              }}
            >
              STARLIGHT CINEMA
            </div>
            <div
              className={`text-[10px] sm:text-xs md:text-sm tracking-widest ${
                isDarkMode ? "text-amber-400" : "text-gray-700"
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              FILMS•STARS•SCANDALS
            </div>
            <div
              className={`text-[8px] sm:text-[10px] md:text-xs ${
                isDarkMode ? "text-amber-500" : "text-gray-600"
              }`}
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Hollywood • Beverly Hills • Malibu
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 lg:col-span-4 order-first sm:order-none">
          <div
            className={`border-2 ${
              isDarkMode
                ? "border-amber-700 bg-[#111]"
                : "border-black bg-white"
            } px-3 sm:px-4 md:px-8 py-2 md:py-3 text-center relative`}
          >
            <div
              className={`absolute top-0 left-0 w-2 h-2 ${
                isDarkMode
                  ? "border-t-2 border-l-2 border-amber-700"
                  : "border-t-2 border-l-2 border-black"
              }`}
            ></div>
            <div
              className={`absolute top-0 right-0 w-2 h-2 ${
                isDarkMode
                  ? "border-t-2 border-r-2 border-amber-700"
                  : "border-t-2 border-r-2 border-black"
              }`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 w-2 h-2 ${
                isDarkMode
                  ? "border-b-2 border-l-2 border-amber-700"
                  : "border-b-2 border-l-2 border-black"
              }`}
            ></div>
            <div
              className={`absolute bottom-0 right-0 w-2 h-2 ${
                isDarkMode
                  ? "border-b-2 border-r-2 border-amber-700"
                  : "border-b-2 border-r-2 border-black"
              }`}
            ></div>

            <h1
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] relative ${
                isDarkMode ? "text-amber-300" : "text-black"
              }`}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "bold",
                textShadow: isDarkMode
                  ? "2px 2px 0 rgba(255,193,7,0.2)"
                  : "2px 2px 0 rgba(0,0,0,0.1)",
              }}
            >
              <span className="relative inline-block transform hover:scale-105 transition-transform duration-200">
                STAR
              </span>
              <span
                className={`mx-2 ${
                  isDarkMode ? "text-amber-500" : "text-[#8B4513]"
                }`}
              >
                •
              </span>
              <span className="relative inline-block transform hover:scale-105 transition-transform duration-200">
                GAZER
              </span>
            </h1>

            <div
              className={`w-3/4 h-[1px] mx-auto mt-2 ${
                isDarkMode ? "bg-amber-700" : "bg-black"
              }`}
            ></div>

            <div
              className={`text-[10px] sm:text-xs md:text-sm ${
                isDarkMode ? "text-amber-400" : "text-gray-600"
              } mt-2`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
              }}
            >
              March 24, 1976
            </div>
          </div>
        </div>

        <div className="sm:col-span-12 lg:col-span-3">
          <div
            className={`text-center lg:text-right ${
              isDarkMode ? "text-amber-200" : "text-black"
            }`}
          >
            <div
              className="text-xs sm:text-sm md:text-base font-bold"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              CALL FOR SUBSCRIPTION
            </div>
            <div
              className="font-bold text-xl sm:text-2xl md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              $1.25
            </div>
            <div
              className={`text-[10px] sm:text-xs md:text-sm ${
                isDarkMode ? "text-amber-400" : "text-gray-600"
              }`}
            >
              Single issue price
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
