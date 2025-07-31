"use client";

interface MovieTickerProps {
  isDarkMode: boolean;
}

export default function MovieTicker({ isDarkMode }: MovieTickerProps) {
  const movies = [
    { title: "TAXI DRIVER", rating: "9.1" },
    { title: "CHINATOWN", rating: "8.8" },
    { title: "THE GODFATHER", rating: "9.8" },
    { title: "ROCKY", rating: "8.7" },
    { title: "STAR WARS", rating: "9.3" },
    { title: "ONE FLEW OVER", rating: "8.7" },
  ];

  return (
    <div
      className={`w-full overflow-x-auto ${
        isDarkMode
          ? "bg-[#2d2518] text-amber-300"
          : "bg-[#e6d8c3] text-gray-800"
      } py-2 md:py-3 border-b-2 ${
        isDarkMode ? "border-amber-800" : "border-black"
      } hidden lg:block`}
    >
      <div className="flex items-center justify-between px-2 md:px-8 min-w-max mx-auto gap-2 md:gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="flex items-center gap-1 md:gap-2 whitespace-nowrap"
          >
            <span
              className="font-bold uppercase text-[11px] md:text-sm"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {movie.title}
            </span>
            <span
              className={`${
                isDarkMode
                  ? "bg-amber-800 text-amber-200"
                  : "bg-black text-white"
              } rounded-full w-6 md:w-7 h-6 md:h-7 flex items-center justify-center text-[10px] md:text-xs font-bold`}
            >
              {movie.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
