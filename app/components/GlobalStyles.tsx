"use client";

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap");
      @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap");

      body {
        margin: 0;
        padding: 0;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
    `}</style>
  );
}
