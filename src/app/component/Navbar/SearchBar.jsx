import Image from 'next/image';

export default function SearchBar({ searchQuery, setSearchQuery, handleSearch, handleKeyPress }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 h-10 w-36 lg:w-48 xl:w-64 text-gray-700 outline-none"
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
  );
}
