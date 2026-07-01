
export const Header = () => {
  return (
    <header className="sticky top-0 z-[9999] w-full bg-white">
  {/* 1. Top Bar */}
  <div className="hidden md:flex bg-[#102A5C] text-white py-3 px-8 font-medium text-[14px] lg:text-[16px]">
    <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
      <div className="flex gap-4 lg:gap-6">
        <span>
          Browse Used Cars for Sale:{" "}
          <strong className="font-bold">176,437</strong>
        </span>
        <span className="border-l border-white/30 pl-4 lg:pl-6">
          Cars in Inventory: <strong className="font-bold">176,437</strong>
        </span>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <span className="font-semibold opacity-90 text-[14px] lg:text-base">
          Japan time 02:35 pm
        </span>
        <div className="flex gap-2 lg:gap-3">
          <button className="bg-white/10 px-3 py-1 rounded border border-white/20 text-xs lg:text-sm flex items-center gap-2">
            <img src="https://flagcdn.com/w20/us.png" className="w-5 h-4" /> USD
            ▾
          </button>
          <button className="bg-white/10 px-3 py-1 rounded border border-white/20 text-xs lg:text-sm flex items-center gap-2">
            <img src="https://flagcdn.com/w20/gb.png" className="w-5 h-4" />{" "}
            English ▾
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="py-4 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8">
      <img
        src="/car _Trde _suite_logo.png"
        alt="Logo"
        className="h-8 md:h-10 w-auto"
      />
      <button id="menu-btn" className="md:hidden text-2xl">
        ☰
      </button>
      <div className="hidden md:flex flex-1 max-w-sm lg:max-w-xl border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <select className="px-4 bg-gray-50 outline-none text-sm font-medium border-r border-gray-300">
          <option>Used Cars</option>
        </select>
        <input
          type="text"
          placeholder="Search Your Dream Car..."
          className="flex-1 px-4 outline-none border-none text-sm"
        />
        <button className="bg-[#ff4a01] text-white px-6 lg:px-8 py-2 font-bold hover:bg-[#1a8cd9] transition rounded-lg">
          Search
        </button>
      </div>
      <div className="hidden md:flex gap-2 lg:gap-3">
        <button className="bg-green-500 text-white px-3 lg:px-6 py-2 rounded-lg font-bold flex items-center gap-2 text-xs lg:text-sm">
          <i className="fa-brands fa-whatsapp" /> WhatsApp
        </button>
        <button className="bg-green-600 text-white px-3 lg:px-6 py-2 rounded-lg font-bold flex items-center gap-2 text-xs lg:text-sm">
          <i className="fa-brands fa-line" /> Chat on LINE
        </button>
      </div>
    </div>
  </div>
  <div className="py-3 px-4 md:px-8 border-t md:border-t-0">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="hidden md:flex gap-4 lg:gap-8 font-semibold text-gray-700 text-[14px] lg:text-[15px]">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <div className="group relative">
          <button className="hover:text-blue-600">About Us ▾</button>
          <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg border p-2 w-40 z-[9999] rounded">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2A26D9]"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2A26D9]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2A26D9]"
            >
              Accreditations
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2A26D9]"
            >
              Customer Reviews
            </a>
          </div>
        </div>
        <div className="group relative">
          <button className="hover:text-blue-600">Vehicles ▾</button>
          <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg border p-2 w-40 z-[9999] rounded">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
            >
              Stock Details
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600"
            >
              Stock List
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-blue-600">
          How To Buy
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
        <a href="#" className="hover:text-blue-600">
          FAQ
        </a>
      </div>
      <div className="hidden md:flex gap-4 lg:gap-8 font-bold text-gray-800 text-[13px] lg:text-[15px]">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-phone text-blue-600" /> +91 98765 43210
        </span>
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-phone text-blue-600" /> +91 91234 56789
        </span>
      </div>
    </div>
  </div>
</header>

  )
}
