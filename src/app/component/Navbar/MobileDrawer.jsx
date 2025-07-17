import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileDrawer({ searchQuery, setSearchQuery, handleSearch, handleKeyPress }) {
  const [openMobileSections, setOpenMobileSections] = useState({
    man: false,
    kids: false,
    accessories: false,
    offer: false,
  });

  const toggleMobileSection = (section) => {
    setOpenMobileSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu bg-base-200 text-base-content min-h-full w-64 sm:w-80 p-4 pt-8">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden mb-6">
          <input
            type="search"
            placeholder="Search..."
            className="flex-1 px-4 py-2 text-gray-700 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            aria-label="Search products"
          />
          <button
            onClick={handleSearch}
            className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Perform search"
          >
            <Image
              src={"/search-svgrepo-com.svg"}
              alt="Search icon"
              height={20}
              width={20}
            />
          </button>
        </div>
        <ul className="space-y-4 text-xl font-semibold">
          <li>
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleMobileSection("man")}
            >
              <span>Man</span>
              <span>{openMobileSections.man ? "-" : "+"}</span>
            </div>
            {openMobileSections.man && (
              <ul className="ml-4 space-y-2 text-base font-normal text-gray-700">
                <li>
                  <Link href="/daynamicShowproduct/Men-Full-Sleeve-Jersey">
                    Full Sleeve Jersey
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Men-Half-Sleeve-Jersey">
                    Half Sleeve Jersey
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Men-Shorts">
                    Shorts
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Men-Trouser">
                    Trouser
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Men-Others">
                    Others
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleMobileSection("kids")}
            >
              <span>Kids</span>
              <span>{openMobileSections.kids ? "-" : "+"}</span>
            </div>
            {openMobileSections.kids && (
              <ul className="ml-4 space-y-2 text-base font-normal text-gray-700">
                <li>
                  <Link href="/daynamicShowproduct/Kids-Full-Sleeve-Jersey">
                    Full Sleeve Jersey
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Kids-Half-Sleeve-Jersey">
                    Half Sleeve Jersey
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Kids-Shorts">
                    Shorts
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Kids-Trouser">
                    Trouser
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Kids-Others">
                    Others
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleMobileSection("accessories")}
            >
              <span>Accessories</span>
              <span>{openMobileSections.accessories ? "-" : "+"}</span>
            </div>
            {openMobileSections.accessories && (
              <ul className="ml-4 space-y-2 text-base font-normal text-gray-700">
                <li>
                  <Link href="/daynamicShowproduct/Accessories-Cricket">
                    Cricket
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Accessories-Football">
                    Football
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Accessories-Badminton">
                    Badminton
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Accessories-Volleyball">
                    Volleyball
                  </Link>
                </li>
                <li>
                  <Link href="/daynamicShowproduct/Accessories-Others">
                    Others
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleMobileSection("offer")}
            >
              <span>Offer</span>
              <span>{openMobileSections.offer ? "-" : "+"}</span>
            </div>
            {openMobileSections.offer && (
              <ul className="ml-4 space-y-2 text-base font-normal text-gray-700">
                <li>
                  <Link href="#" className="text-red-500">
                    No Offer Available Now
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
