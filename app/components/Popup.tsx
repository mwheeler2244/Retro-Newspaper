"use client";

import { AlertCircle, X } from "lucide-react";

interface PopupProps {
  showPopup: boolean;
  popupContent: {
    title: string;
    message: string;
  };
  popupPosition: {
    top: number;
    left: number;
  };
  setShowPopup: (show: boolean) => void;
  isDarkMode: boolean;
}

export default function Popup({
  showPopup,
  popupContent,
  popupPosition,
  setShowPopup,
  isDarkMode,
}: PopupProps) {
  if (!showPopup) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        top: `${popupPosition.top}px`,
        left: `${popupPosition.left}px`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`w-[300px] shadow-xl rounded-lg overflow-hidden animate-fadeIn ${
          isDarkMode
            ? "bg-[#1e1e1e] border-2 border-amber-700"
            : "bg-white border-2 border-black"
        }`}
      >
        <div
          className={`flex justify-between items-center p-3 ${
            isDarkMode ? "bg-amber-700 text-black" : "bg-[#8B4513] text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <AlertCircle size={18} />
            <h3 className="font-bold">{popupContent.title}</h3>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowPopup(false);
            }}
            className="cursor-pointer rounded-full p-1 hover:bg-opacity-20 hover:bg-black transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className={`p-4 ${isDarkMode ? "text-amber-100" : "text-black"}`}>
          <p
            className="text-sm"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {popupContent.message}
          </p>
        </div>
        <div className={`px-4 pb-4 flex justify-end`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowPopup(false);
            }}
            className={`cursor-pointer ${
              isDarkMode
                ? "bg-amber-700 hover:bg-amber-600 text-black"
                : "bg-[#8B4513] hover:bg-[#A0522D] text-white"
            } px-4 py-2 rounded font-bold text-xs uppercase tracking-wider`}
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            DISMISS
          </button>
        </div>
      </div>
      <div
        className={`w-4 h-4 transform rotate-45 absolute -top-2 left-[148px] ${
          isDarkMode ? "bg-amber-700" : "bg-[#8B4513]"
        }`}
      ></div>
    </div>
  );
}
