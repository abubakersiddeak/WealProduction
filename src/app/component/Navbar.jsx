"use client";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cartContext';
import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from './Navbar/DesktopNav';
import MobileDrawer from './Navbar/MobileDrawer';
import SearchBar from './Navbar/SearchBar';

export default function Navbar() {
  const { cartItems } = useCart();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const drawerCheckboxRef = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => {
      if (drawerCheckboxRef.current) {
        drawerCheckboxRef.current.checked = false;
        setIsDrawerOpen(false);
      }
    };
    // The `router.events` API is deprecated, so we listen to the `routeChangeComplete` event on the router instance itself.
    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.length > 0) {
        fetch(`/api/findproduct/search?query=${searchQuery}`)
          .then((res) => res.json())
          .then((data) => setSuggestions(data.products || []));
      } else {
        setSuggestions([]);
      }
    }, 100);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleSelect = (item) => {
    setSearchQuery(item.name || ''); // Ensure searchQuery is always a string
    setSuggestions([]);
    router.push(`/dynamic/${item._id}`);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    router.push(`/searchproduct/${encodeURIComponent(searchQuery)}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-black border-b border-gray-200 shadow-sm">
      <div className="container mx-auto h-[80px] flex justify-between items-center px-4 md:px-6 lg:px-8">
        <DesktopNav />

        <div className="flex items-center gap-2 flex-shrink-0 justify-center">
          <Link href={'/'} className="relative h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 flex-shrink-0">
            <Image
              src="/WEinscape.png"
              alt="WealShop Logo"
              fill
              sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <Link href={'/'} className="text-3xl lg:text-[55px] font-extrabold text-gray-800 ">
            WEAL
          </Link>
        </div>

        <div className="hidden w-[35%] md:flex lg:flex flex-grow items-center gap-4 lg:gap-6 justify-end">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            handleKeyPress={handleKeyPress}
          />
          <Link
            href="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label={`View shopping cart with ${totalItems} items`}
          >
            <Image
              src="/cart-shopping-svgrepo-com.svg"
              alt="Cart icon"
              height={24}
              width={24}
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Link
            href="/cart"
            className="relative"
            aria-label={`View shopping cart with ${totalItems} items`}
          >
            <Image
              src="/cart-shopping-svgrepo-com.svg"
              alt="Cart icon"
              height={48}
              width={48}
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          <div className="drawer drawer-end mr-[-10px]">
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle"
              ref={drawerCheckboxRef}
              checked={isDrawerOpen}
              onChange={() => setIsDrawerOpen(!isDrawerOpen)}
            />
            <div className="drawer-content ">
              <label htmlFor="my-drawer" className="btn btn-ghost p-0 m-0">
                <Image
                  src={'/menu-symbol-of-three-parallel-lines-svgrepo-com.svg'}
                  alt="Menu icon"
                  height={24}
                  width={24}
                />
              </label>
            </div>
            <MobileDrawer
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              handleKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-80 overflow-y-auto w-64 sm:w-80 backdrop-blur-sm transition-all duration-300 ease-in-out ring-1 ring-gray-100">
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-100 to-blue-50 border-b border-gray-200">
            <span className="text-sm font-semibold text-blue-800">
              Suggestions
            </span>
            <button
              className="text-xs text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md shadow-sm transition"
              onClick={() => setSuggestions([])}
            >
              ✖ Close
            </button>
          </div>

          {suggestions.map((item) => (
            <li
              key={item._id}
              className="flex items-center gap-2 px-4 py-3 text-sm sm:text-base text-gray-700 hover:bg-blue-100/60 transition-all duration-200 cursor-pointer group"
              onClick={() => handleSelect(item)}
            >
              {item.images && item.images.length > 0 && (
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="rounded-md object-cover"
                />
              )}
              <span className="truncate font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
