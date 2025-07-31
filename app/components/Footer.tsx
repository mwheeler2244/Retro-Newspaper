"use client";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer
      className={`${
        isDarkMode
          ? "bg-[#111] text-amber-100 border-t border-amber-900"
          : "bg-black text-white border-t border-gray-700"
      } p-4 md:p-6`}
    >
      <div className="text-center lg:text-left grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-dashed border-gray-600 pb-6 md:pb-8">
        <div className="md:col-span-5 space-y-4">
          <h4
            className={`text-2xl font-bold mb-3 ${
              isDarkMode ? "text-amber-300" : ""
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            STAR GAZER MAGAZINE
          </h4>
          <p
            className={`text-sm leading-relaxed ${
              isDarkMode ? "text-amber-200" : "text-gray-300"
            }`}
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Your premiere source for Hollywood news, celebrity gossip, and film
            reviews. Celebrating over 50 years of bringing you the latest from
            the world of entertainment.
          </p>
          <div className="pt-4 space-y-2">
            <h5
              className={`text-lg font-bold ${
                isDarkMode ? "text-amber-400" : "text-[#ffcb69]"
              }`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Visit Us:
            </h5>
            <p className="text-sm">123 Hollywood Blvd</p>
            <p className="text-sm">Los Angeles, CA 90028</p>
            <p
              className={`text-sm ${
                isDarkMode ? "text-amber-400" : "text-gray-400"
              } mt-2 italic`}
            >
              Located in the heart of Hollywood, just a short stroll from the
              iconic TCL Chinese Theatre and the Walk of Fame. Our office is
              open to special guests and media inquiries, and we'd love to hear
              from fellow film lovers, journalists, and enthusiasts who are
              passionate about the ever-evolving world of entertainment.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4
            className={`text-lg font-bold mb-4 ${
              isDarkMode ? "text-amber-300" : ""
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            QUICK LINKS
          </h4>
          <ul className="text-sm space-y-2">
            {[
              "About Us",
              "Contact",
              "Advertise",
              "Subscriptions",
              "Archive",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-[#ddb892]"
                  } transition-colors duration-200`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4
            className={`text-lg font-bold mb-4 ${
              isDarkMode ? "text-amber-300" : ""
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CONTACT
          </h4>
          <div className="space-y-4">
            <div>
              <h5
                className={`text-sm font-bold ${
                  isDarkMode ? "text-amber-400" : "text-[#ffcb69]"
                } mb-2`}
              >
                Postal Address:
              </h5>
              <p className="text-sm">P.O. Box 1000</p>
              <p className="text-sm">Los Angeles, CA 90028</p>
            </div>
            <div>
              <h5
                className={`text-sm font-bold ${
                  isDarkMode ? "text-amber-400" : "text-[#ffcb69]"
                } mb-2`}
              >
                Editorial Office:
              </h5>
              <p className="text-sm">Tel: (213) 555-1976</p>
              <p className="text-sm">Email: editor@stargazermagazine.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div
          className={`text-sm ${
            isDarkMode ? "text-amber-400" : "text-gray-400"
          }`}
        >
          <p>Editor: Patrick Pessner</p>
          <p>Design: Maria Bevety</p>
        </div>
        <div
          className={`text-right text-xs ${
            isDarkMode ? "text-amber-700" : "text-gray-500"
          }`}
        >
          © 1976 STAR GAZER Magazine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
