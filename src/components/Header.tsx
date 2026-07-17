import { cn } from "@/lib/utils"
import { useState } from "react"

export const Header = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
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
      <button onClick={()=>{
        console.log("click")
          setToggleMenu(!toggleMenu)
        }} id="menu-btn" className="md:hidden text-2xl">
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
        <button className="bg-whtasapp text-white px-3 lg:px-6 py-2 rounded-lg font-bold flex items-center gap-2 text-xs lg:text-sm">
          <svg role="img" className="size-6 text-6xl gap-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>WhatsApp</title>
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
</svg> WhatsApp
        </button>
        <button className="bg-green-600  text-white px-3 lg:px-6 py-2 rounded-lg font-bold flex items-center gap-2 text-xs lg:text-sm">
         <svg className="size-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>LINE</title>
  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
</svg>
 Chat on LINE
        </button>
      </div>
    </div>
  </div>
  <div className="py-3 px-4 md:px-8 border-t md:border-t-0  bg-gray-100">
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
    <>
  <div className="md:hidden">
    {/* 1. Mobile Top Bar (Japan Time + USD/Language) */}
    {/* 3. Mobile Menu (Accordion) */}
    <div
      id="mobile-menu"
      className={cn("hidden bg-gray-50 p-4  flex-col gap-2 border-t",toggleMenu&&"flex")}
    >
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded text-sm w-full"
      />
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-green-500 text-white py-2 rounded text-xs font-bold">
          WhatsApp
        </button>
        <button className="bg-green-600 text-white py-2 rounded text-xs font-bold">
          LINE
        </button>
      </div>
      <a href="#" className="font-bold border-b py-2">
        Home
      </a>
      {/* About Us Submenu */}
      <button
        onclick="toggleMobile('sub-about')"
        className="font-bold border-b py-2 text-left w-full flex justify-between"
      >
        About Us <span>▾</span>
      </button>
      <div id="sub-about" className="hidden pl-4 bg-white p-2 text-sm border-b">
        <a href="#" className="block py-1">
          Terms &amp; Conditions
        </a>
        <a href="#" className="block py-1">
          Privacy Policy
        </a>
        <a href="#" className="block py-1">
          Accreditations
        </a>
        <a href="#" className="block py-1">
          Customer Reviews
        </a>
      </div>
      {/* Vehicles Submenu */}
      <button
        // onclick="toggleMobile('sub-veh')"
        
        className="font-bold border-b py-2 text-left w-full flex justify-between"
      >
        Vehicles <span>▾</span>
      </button>
      <div id="sub-veh" className={cn("hidden pl-4 bg-white p-2 text-sm border-b")}>
        <a href="#" className="block py-1">
          Stock Details
        </a>
        <a href="#" className="block py-1">
          Stock List
        </a>
      </div>
      <a href="#" className="font-bold border-b py-2">
        How To Buy
      </a>
      <a href="#" className="font-bold border-b py-2">
        Contact
      </a>
      <a href="#" className="font-bold border-b py-2">
        FAQ
      </a>
      <div className="mt-2 text-sm text-gray-700">
        <p>+91 98765 43210</p>
        <p>+91 91234 56789</p>
      </div>
    </div>
  </div>
  <script></script>
</>

  </div>
</header>

  )
}
