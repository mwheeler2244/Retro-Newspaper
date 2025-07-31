"use client";

interface MainContentProps {
  isDarkMode: boolean;
  handleSubscriptionButtonClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    buttonType: string
  ) => void;
}

export default function MainContent({
  isDarkMode,
  handleSubscriptionButtonClick,
}: MainContentProps) {
  return (
    <main
      className={`grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 xl:gap-8 p-3 sm:p-4 md:p-5 xl:p-6 ${
        isDarkMode ? "text-amber-100" : "text-black"
      }`}
    >
      <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4 sm:gap-6 xl:gap-8">
        <div
          className={`col-span-1 sm:col-span-2 xl:col-span-12 border-b ${
            isDarkMode ? "border-amber-800" : "border-black"
          } pb-4 sm:pb-6 mb-4 sm:mb-6`}
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 ${
              isDarkMode ? "text-amber-300" : ""
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            MARIA BEVETTY: THE RISING STAR
          </h2>

          <div className="relative">
            <div
              className={`float-none sm:float-right mt-2 ml-0 sm:ml-4 mb-3 w-full sm:w-[55%] md:w-[45%] h-[220px] sm:h-[280px] md:h-[300px] overflow-hidden rounded-lg border-4 ${
                isDarkMode ? "border-amber-700" : "border-black"
              } relative shape-outside-[rectangle]`}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1664391791708-7734f98ebafc?w=800&auto=format&fit=crop"
                alt="Maria Bevety"
                className={`w-full h-full object-cover ${
                  isDarkMode
                    ? "filter sepia-70 contrast-125 brightness-75"
                    : "filter sepia-50 contrast-125 brightness-110 grayscale-10"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 ${
                  isDarkMode
                    ? "bg-[#111] bg-opacity-80"
                    : "bg-black bg-opacity-70"
                } p-2 sm:p-3 text-white text-center text-[10px] sm:text-xs`}
              >
                MARIA BEVETTY • PHOTO BY: JULIE SCHIGALLT
              </div>
            </div>

            <div
              className="text-sm sm:text-base leading-relaxed"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              <div
                className={`border-l-4 ${
                  isDarkMode
                    ? "border-amber-700  bg-opacity-50"
                    : "border-black"
                } pl-4 mb-4 italic`}
              >
                <p>
                  "I never dreamed of Hollywood - it dreamed of me," says Bevety
                  in her signature rasp, lighting a cigarette with the same hand
                  that penned three bestsellers last year. "These studios?
                  They're just playgrounds for grown-ups who never learned to
                  share."
                </p>
              </div>
              <p className="mb-3">
                At just 28, Maria Bevety has become the most talked-about
                creative force since Kubrick. Her debut novel{" "}
                <span className="italic">"Sunset Shadows"</span> spent 47 weeks
                on the Times list, while her uncredited rewrites on{" "}
                <span className="italic">"Cosmic Drifter"</span> allegedly saved
                the $12M production from disaster.
              </p>
              <p className="mb-3">
                Critics call Bevety's style "ferociously honest and
                unapologetically raw," blending gritty realism with a surreal,
                dreamlike edge. To her growing fanbase, she's the voice of a new
                generation disillusioned by Hollywood's gloss.
              </p>
              <p className="mb-3">
                The Melbourne native's rise reads like one of her plots:
              </p>
              <ul className="mb-3 pl-5 list-disc text-sm">
                <li>
                  <span className="font-bold">1972</span> - Waitress by day,
                  jazz singer by night
                </li>
                <li>
                  <span className="font-bold">1975</span> - Published first
                  short story in{" "}
                  <span className="italic">"Tales of the Unseen"</span>
                </li>
                <li>
                  <span className="font-bold">1977</span> - Signed by William
                  Morris after controversial stage adaptation
                </li>
              </ul>
              <div
                className={`${
                  isDarkMode ? "bg-[#1e1e1e]" : "bg-[#f5f0e6]"
                } p-6 my-4 border-t-2 border-b-2 ${
                  isDarkMode ? "border-amber-800" : "border-black"
                }`}
              >
                <p
                  className={`text-xs uppercase font-bold mb-1 ${
                    isDarkMode ? "text-amber-400" : ""
                  }`}
                >
                  Bevety's Law:
                </p>
                <p className="text-s italic">
                  "Never trust a producer who wears sunglasses indoors, and
                  always demand final cut - even if it's just your grocery
                  list."
                </p>
              </div>
              <p className="mb-6">
                Next month sees the release of her passion project - a neo-noir
                thriller shot guerilla-style on leftover film stock from
                abandoned MGM productions. "They called me reckless," she grins,
                "until the dailies came back. Now they're calling it genius.
                Hollywood loves a winner."
              </p>
            </div>
          </div>

          <button
            className={`cursor-pointer clear-both w-full sm:w-auto ${
              isDarkMode
                ? "bg-amber-700 hover:bg-amber-600 text-black"
                : "bg-[#8B4513] hover:bg-[#A0522D] text-white"
            } cursor-pointer font-bold px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)]`}
            style={{ fontFamily: "'Oswald', sans-serif" }}
            onClick={(e) => handleSubscriptionButtonClick(e, "full story")}
          >
            READ FULL STORY ➔
          </button>
        </div>

        <div
          className={`col-span-1 sm:col-span-1 xl:col-span-6 border-b-4 sm:border-b-0 sm:border-r-2 ${
            isDarkMode ? "border-amber-800" : "border-black"
          } pb-6 sm:pr-4`}
        >
          <div className="flex mb-2">
            <div
              className={`text-[10px] sm:text-xs ${
                isDarkMode ? "text-amber-500" : "text-gray-600"
              }`}
            >
              March 25, 1976
            </div>
          </div>
          <h2
            className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${
              isDarkMode ? "text-amber-300" : ""
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            HOLLYWOOD'S SECRET PARTIES
          </h2>
          <div className="flex mb-4">
            <div
              className={`w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden rounded-lg border-4 ${
                isDarkMode ? "border-amber-700" : "border-black"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1579104173178-badf689ac6b6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hollywood Party Scene"
                className={`w-full h-full object-cover ${
                  isDarkMode
                    ? "filter sepia-70 contrast-125 brightness-75"
                    : "filter sepia-40 contrast-100 brightness-110 grayscale-20"
                }`}
              />
            </div>
          </div>
          <p
            className="text-xs sm:text-sm"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            The glittering facade of Hollywood hides wild parties that would
            shock even the most liberal audiences. Our undercover reporter spent
            three months infiltrating these exclusive gatherings... Behind the
            polished exterior of red carpets and glamorous award shows lies a
            hidden world of excess and secrecy.
          </p>
          <button
            className={`cursor-pointer mt-4 flex items-center text-[10px] sm:text-xs font-bold border-b-2 ${
              isDarkMode
                ? "border-amber-700 hover:text-amber-400"
                : "border-black hover:text-[#8B4513]"
            } pb-1 transition-colors duration-200`}
            onClick={(e) => handleSubscriptionButtonClick(e, "full article")}
          >
            CONTINUE READING <span className="ml-1">→</span>
          </button>
        </div>

        <div className="col-span-1 sm:col-span-1 xl:col-span-6">
          <div className="relative">
            <div
              className={`w-full h-[300px] sm:h-[350px] md:h-[400px] xl:h-[470px] shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] rounded-none overflow-hidden rounded-md border-4 ${
                isDarkMode ? "border-amber-700" : "border-black"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1682718619022-e5e6289ab3ea?w=800&auto=format&fit=crop"
                alt="Graphic Design Trends"
                className={`w-full h-full object-cover ${
                  isDarkMode
                    ? "filter sepia-70 contrast-125 brightness-75"
                    : "filter sepia-50 contrast-125 brightness-110 grayscale-10"
                } transition-transform duration-500`}
              />
            </div>

            <div
              className={`absolute top-4 left-4 ${
                isDarkMode
                  ? "bg-amber-600 text-black"
                  : "bg-[#FFD700] text-black"
              } px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold rotate-[-5deg] shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] z-10`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              EXCLUSIVE
            </div>

            <div
              className={`absolute bottom-0 left-0 right-0 ${
                isDarkMode
                  ? "bg-[#111] bg-opacity-90"
                  : "bg-black bg-opacity-90"
              } p-3 sm:p-4 md:p-6 text-white`}
            >
              <h3
                className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 ${
                  isDarkMode ? "text-amber-300" : "text-white"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                GRAPHIC DESIGN REVOLUTION
              </h3>
              <p
                className="text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                The art of movie posters is changing rapidly. We interview the
                top designers shaping how films are marketed to the public...
                Movie posters have always been a crucial part of the film
                industry.
              </p>
              <button
                className={`cursor-pointer mt-3 sm:mt-4 ${
                  isDarkMode
                    ? "bg-amber-700 hover:bg-amber-600 text-black"
                    : "bg-[#8B4513] hover:bg-[#A0522D] text-white"
                } font-bold cursor-pointer py-1.5 sm:py-2 px-3 sm:px-4 text-[10px] sm:text-xs uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)]`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
                onClick={(e) => handleSubscriptionButtonClick(e, "interview")}
              >
                READ INTERVIEW →
              </button>
            </div>

            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "border-2 border-amber-500"
                  : "border-2 border-yellow-400"
              } pointer-events-none`}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`xl:col-span-4 ${
          isDarkMode ? "bg-[#1a1a1a]" : "bg-[#f5f0e6]"
        } p-3 sm:p-4 border-2 ${
          isDarkMode ? "border-amber-800" : "border-black"
        } space-y-4 sm:space-y-6`}
      >
        <div
          className={`${
            isDarkMode ? "bg-[#2d2518]" : "bg-[#e6d8c3]"
          } p-4 mb-6 border-2 ${
            isDarkMode ? "border-amber-700" : "border-black"
          } relative`}
        >
          <img
            src="https://images.unsplash.com/photo-1611021809244-83074a8a42c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="This Week's Issue"
            className={`absolute inset-0 w-full h-full object-cover ${
              isDarkMode ? "opacity-10" : "opacity-20"
            }`}
          />
          <div className="relative z-10">
            <h3
              className={`text-2xl font-extrabold ${
                isDarkMode ? "text-amber-300" : "text-black"
              } m-2`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              THIS WEEK'S ISSUE
            </h3>
            <p
              className={`text-sm mb-6 ${
                isDarkMode ? "text-amber-100" : "text-black"
              } m-2`}
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Featuring exclusive interviews with rising stars and
              behind-the-scenes looks at upcoming films.
            </p>
            <button
              className={`cursor-pointer w-full ${
                isDarkMode
                  ? "bg-amber-700 hover:bg-amber-600 text-black"
                  : "bg-black hover:bg-[#A0522D] text-white"
              } cursor-pointer px-6 py-2 text-sm uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.2)]`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
              onClick={(e) => handleSubscriptionButtonClick(e, "magazine")}
            >
              BUY NOW $1.25
            </button>
          </div>
        </div>

        <div
          className={`${
            isDarkMode ? "bg-[#111]" : "bg-white"
          } p-4 mb-6 border-2 ${
            isDarkMode ? "border-amber-700" : "border-black"
          } relative rotate-[-2deg] shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]`}
        >
          <div
            className={`absolute -top-2 -left-2 w-4 h-4 ${
              isDarkMode
                ? "border-t-2 border-l-2 border-amber-700"
                : "border-t-2 border-l-2 border-black"
            }`}
          ></div>
          <div
            className={`absolute -top-2 -right-2 w-4 h-4 ${
              isDarkMode
                ? "border-t-2 border-r-2 border-amber-700"
                : "border-t-2 border-r-2 border-black"
            }`}
          ></div>
          <div
            className={`absolute -bottom-2 -left-2 w-4 h-4 ${
              isDarkMode
                ? "border-b-2 border-l-2 border-amber-700"
                : "border-b-2 border-l-2 border-black"
            }`}
          ></div>
          <div
            className={`absolute -bottom-2 -right-2 w-4 h-4 ${
              isDarkMode
                ? "border-b-2 border-r-2 border-amber-700"
                : "border-b-2 border-r-2 border-black"
            }`}
          ></div>

          <div className="flex items-center gap-3">
            <div className="w-1/3">
              <div
                className={`w-full h-[80px] overflow-hidden border-2 ${
                  isDarkMode ? "border-amber-700" : "border-black"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Vintage Movie Poster"
                  className={`w-full h-full object-cover ${
                    isDarkMode
                      ? "filter sepia-70 contrast-125 brightness-75"
                      : ""
                  }`}
                />
              </div>
            </div>
            <div className="w-2/3">
              <h4
                className={`text-sm font-bold uppercase ${
                  isDarkMode ? "text-amber-300" : ""
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                FREE POSTER INSIDE!
              </h4>
              <p
                className={`text-xs mt-1 ${isDarkMode ? "text-amber-100" : ""}`}
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Collectible 1976 STAR WARS poster
              </p>
              <button
                className={`cursor-pointer mt-2 ${
                  isDarkMode
                    ? "bg-amber-700 hover:bg-amber-600 text-black"
                    : "bg-[#8B4513] hover:bg-[#A0522D] text-white"
                } px-4 py-1.5 text-xs uppercase tracking-wider shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
                onClick={(e) => handleSubscriptionButtonClick(e, "poster")}
              >
                CLAIM YOURS ➔
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            isDarkMode ? "bg-[#2d2518]" : "bg-[#e6d8c3]"
          } p-6 border-2 ${isDarkMode ? "border-amber-700" : "border-black"}`}
        >
          <h3
            className={`text-lg font-bold mb-4 border-b-2 ${
              isDarkMode ? "border-amber-700 text-amber-300" : "border-black"
            } pb-3`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            THIS WEEK'S HOROSCOPE
          </h3>
          <div className="text-sm space-y-4">
            {[
              {
                sign: "♈︎ ARIES",
                prediction:
                  "A surprise script offer arrives! This week, you'll find unexpected opportunities knocking at your door—be ready to seize them. Trust your instincts and stay bold.",
              },
              {
                sign: "♍︎ VIRGO",
                prediction:
                  "Beware of backstage gossip. Keep a low profile in professional settings, and don't let others' opinions distract you from your path. It's a time for reflection, not drama.",
              },
              {
                sign: "♌︎ LEO",
                prediction:
                  "Your charm opens new doors. Whether it's in social circles or your career, your magnetic personality will attract positive attention. Let your confidence lead the way.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-18 flex-shrink-0">
                  <span
                    className={`font-bold text-[10px] ${
                      isDarkMode
                        ? "bg-[#111] p-1.5 rounded-md border border-amber-700 text-amber-400"
                        : "bg-[#f5f0e6] p-1.5 rounded-md border border-black"
                    }`}
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {item.sign}
                  </span>
                </div>
                <div className="flex-1">
                  <p
                    className={`text-xs leading-relaxed ${
                      isDarkMode
                        ? "bg-[#111] p-3 rounded-md border border-amber-700 text-amber-100"
                        : "bg-[#f5f0e6] p-3 rounded-md border border-black"
                    }`}
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    {item.prediction}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className={`cursor-pointer mt-6 text-xs font-bold border-b-2 ${
              isDarkMode
                ? "border-amber-700 hover:text-amber-400 text-amber-300"
                : "border-black hover:text-[#8B4513]"
            } pb-1 transition-colors duration-200`}
          >
            READ ALL SIGNS →
          </button>
        </div>

        <div
          className={`${
            isDarkMode ? "bg-[#2d2518]" : "bg-[#e6d8c3]"
          } p-6 border-2 ${
            isDarkMode ? "border-amber-700" : "border-black"
          } relative`}
        >
          <div
            className={`absolute top-2 left-2 w-4 h-4 ${
              isDarkMode
                ? "border-t-2 border-l-4 border-amber-700"
                : "border-t-2 border-l-4 border-black"
            }`}
          ></div>

          <div
            className={`absolute bottom-2 right-2 w-4 h-4 ${
              isDarkMode
                ? "border-b-2 border-r-4 border-amber-700"
                : "border-b-2 border-r-4 border-black"
            }`}
          ></div>

          <h3
            className={`text-lg font-bold mb-3 border-b-2 ${
              isDarkMode ? "border-amber-700 text-amber-300" : "border-black"
            } pb-2`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CONTACT US
          </h3>
          <p
            className={`text-xs ${
              isDarkMode ? "text-amber-400" : "text-gray-600"
            } mb-4`}
          >
            For subscriptions, advertising, or tips:
          </p>

          <div
            className={`text-sm space-y-2 ${
              isDarkMode ? "text-amber-100" : ""
            }`}
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            <p className="font-bold">STAR GAZER MAGAZINE</p>
            <p>123 Hollywood Blvd</p>
            <p>Los Angeles, CA 90028</p>

            <div className="mt-3">
              <p className="font-bold">Tel: (213) 555-1976</p>
              <p className="font-bold">Email: info@stargazermagazine.com</p>
              <p className="font-bold">Website: www.stargazermagazine.com</p>
            </div>

            <div className="mt-3 text-xs">
              <p className="font-bold">Office Hours:</p>
              <p>Monday - Friday, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="mt-3 text-xs italic">
              <p className="font-bold">For editorial inquiries:</p>
              <p className="font-bold">editor@stargazermagazine.com</p>
            </div>
          </div>

          <div
            className={`absolute -top-3 -right-3 ${
              isDarkMode ? "bg-red-900" : "bg-red-700"
            } text-white px-2 py-1 text-xs font-bold rotate-12 shadow-[2px_2px_0_0_rgba(0,0,0,0.3)]`}
          >
            CALL NOW!
          </div>
        </div>
      </div>
    </main>
  );
}
