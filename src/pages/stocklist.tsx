import React from 'react'

export const StockList = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    <section className="lg:col-span-3">
      <div className="bg-white p-6  ">
        <section className="max-w-7xl mx-auto p-4 md:p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Row 1 */}
            {/* Row 1 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Make
              </label>
              <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option>All Makes</option>
                <option>Toyota</option>
                <option>Honda</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Model
              </label>
              <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option>All Models</option>
                <option>Corolla</option>
                <option>Civic</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Year Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                  <option>Min</option>
                  <option>2020</option>
                </select>
                <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                  <option>Max</option>
                  <option>2026</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Mileage
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                  <option>Min</option>
                </select>
                <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                  <option>Max</option>
                </select>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Transmission
              </label>
              <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option>All</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Steering
              </label>
              <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option>All</option>
                <option>Left Hand</option>
                <option>Right Hand</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-500 uppercase">
                Color
              </label>
              <select className="filter-input w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50">
                <option>Any</option>
                <option>White</option>
                <option>Black</option>
              </select>
            </div>
            {/* Buttons */}
            <div className="flex flex-col justify-end gap-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onclick="applyFilters()"
                  className="bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Search
                </button>
                <button
                  onclick="resetFilters()"
                  className="bg-gray-100 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Filter Display Section */}
        <section className="max-w-7xl mx-auto py-2 px-2 bg-white">
          <div className="flex items-center justify-between">
            {/* */}
            <div className="flex items-center gap-4">
              {/* filtericon*/}
              <div className="text-slate-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              {/*(Toyota X .) */}
              <div id="selected-filters" className="flex flex-wrap gap-2"></div>
            </div>
            {/* right side: Sort By */}
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:border-blue-400 transition-colors shrink-0 min-w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={19}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="m3 8 4-4 4 4" />
                <path d="M7 4v16" />
                <path d="M11 12h4" />
                <path d="M11 16h7" />
                <path d="M11 20h10" />
              </svg>
              <select className="bg-transparent text-sm font-semibold text-gray-700 outline-none cursor-pointer appearance-none flex-grow focus:text-base focus:font-bold">
                <option>Select </option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto py-2 px-4">
          <div className="flex items-center justify-between border-b border-blue-200 pb-2 mb-2">
            <h2 className="text-xl font-bold text-gray-900">
              Vehicles
              <span className="text-xs text-gray-400 font-medium ml-2">
                (Showing 200 of 3,00,000)
              </span>
            </h2>
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border--200 shadow-x">
              <button
                id="list-btn"
                onclick="setView('list')"
                className="p-1 rounded-md text-gray-400 hover:text-blue-600 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <button
                id="grid-btn"
                onclick="setView('grid')"
                className="p-1 rounded-md bg-blue-50 text-blue-600 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="display-container"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          ></div>
          <div className="flex items-center justify-end mt-4 gap-1 text-[11px]">
            <button className="px-2 py-1 border border-gray-200 rounded-md font-semibold text-gray-600 hover:bg-gray-50 transition-all disabled:opacity-50">
              Previous
            </button>
            <div className="flex gap-1">
              <button className="w-7 h-7 border border-blue-600 bg-blue-600 text-white rounded-md font-bold">
                1
              </button>
              <button className="w-7 h-7 border border-gray-200 bg-white text-gray-600 rounded-md font-semibold hover:border-gray-300">
                2
              </button>
              <button className="w-7 h-7 border border-gray-200 bg-white text-gray-600 rounded-md font-semibold hover:border-gray-300">
                3
              </button>
              <span className="flex items-end pb-1 text-gray-400 px-0.5">
                ...
              </span>
              <button className="w-7 h-7 border border-gray-200 bg-white text-gray-600 rounded-md font-semibold hover:border-gray-300">
                10
              </button>
            </div>
            <button className="px-2 py-1 border border-gray-200 rounded-md font-semibold text-gray-600 hover:bg-gray-50 transition-all">
              Next
            </button>
          </div>
        </section>
        {/* card 1*/}
        <div
          id="list"
          className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4 max-w-full"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-48 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80"
                alt="Car"
                className="w-full h-48 md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-1 whitespace-nowrap  text-ellipsis">
                2015 MERCEDES-BENZ S-CLASS HYBRID S400
              </h3>
              <div className="inline-block border border-blue-500 bg-blue-50 px-2 py-1 rounded-md mb-2">
                <span className="text-blue-700 font-bold text-[14px]">
                  STOCK NO. 105482
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[14px]">
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Mileage
                  </span>
                  <span className="font-semibold">81,596 km</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Year
                  </span>
                  <span className="font-semibold">2015/3</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine
                  </span>
                  <span className="font-semibold">3,490cc</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Location
                  </span>
                  <span className="font-semibold">Yokohama</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Model Code
                  </span>
                  <span className="font-semibold">DAA-222057</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Steering
                  </span>
                  <span className="font-semibold">Left</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Fuel
                  </span>
                  <span className="font-semibold">Hybrid(Petrol)</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Seats
                  </span>
                  <span className="font-semibold">5</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine Code
                  </span>
                  <span className="font-semibold">276-21227</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Color
                  </span>
                  <span className="font-semibold">White</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Drive
                  </span>
                  <span className="font-semibold">2WD</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Doors
                  </span>
                  <span className="font-semibold">4</span>
                </div>
              </div>
            </div>
            <div className="md:w-40 border-t md:border-t-0 md:pt-0 pt-4 flex flex-col justify-center gap-4 shrink-0">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] text-gray-700 font-medium">
                    Price:
                  </p>
                  <p className="text-[15px] text-blue-900 font-bold">$14,800</p>
                </div>
                <p className="text-[15px] text-gray-700 pb-1">
                  Total: <span className="text-black font-bold">ASK</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <a href="form.html" className="w-full">
                  <button className="w-full bg-orange-500 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    INQUIRY
                  </button>
                </a>
                <button className="w-full bg-green-600 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                  <svg
                    role="img"
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  CHAT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          id="grid"
          className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4 max-w-full"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-48 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80"
                alt="Car"
                className="w-full h-48 md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-1 whitespace-nowrap  text-ellipsis">
                2015 MERCEDES-BENZ S-CLASS HYBRID S400
              </h3>
              <div className="inline-block border border-blue-500 bg-blue-50 px-2 py-1 rounded-md mb-2">
                <span className="text-blue-700 font-bold text-[14px]">
                  STOCK NO. 105482
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[14px]">
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Mileage
                  </span>
                  <span className="font-semibold">81,596 km</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Year
                  </span>
                  <span className="font-semibold">2015/3</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine
                  </span>
                  <span className="font-semibold">3,490cc</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Location
                  </span>
                  <span className="font-semibold">Yokohama</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Model Code
                  </span>
                  <span className="font-semibold">DAA-222057</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Steering
                  </span>
                  <span className="font-semibold">Left</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Fuel
                  </span>
                  <span className="font-semibold">Hybrid(Petrol)</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Seats
                  </span>
                  <span className="font-semibold">5</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine Code
                  </span>
                  <span className="font-semibold">276-21227</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Color
                  </span>
                  <span className="font-semibold">White</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Drive
                  </span>
                  <span className="font-semibold">2WD</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Doors
                  </span>
                  <span className="font-semibold">4</span>
                </div>
              </div>
            </div>
            <div className="md:w-40 border-t md:border-t-0 md:pt-0 pt-4 flex flex-col justify-center gap-4 shrink-0">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] text-gray-700 font-medium">
                    Price:
                  </p>
                  <p className="text-[15px] text-blue-900 font-bold">$14,800</p>
                </div>
                <p className="text-[15px] text-gray-700 pb-1">
                  Total: <span className="text-black font-bold">ASK</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <a href="form.html" className="w-full">
                  <button className="w-full bg-orange-500 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    INQUIRY
                  </button>
                </a>
                <button className="w-full bg-green-600 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                  <svg
                    role="img"
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  CHAT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4 max-w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-48 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80"
                alt="Car"
                className="w-full h-48 md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-1 whitespace-nowrap  text-ellipsis">
                2015 MERCEDES-BENZ S-CLASS HYBRID S400
              </h3>
              <div className="inline-block border border-blue-500 bg-blue-50 px-2 py-1 rounded-md mb-2">
                <span className="text-blue-700 font-bold text-[14px]">
                  STOCK NO. 105482
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[14px]">
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Mileage
                  </span>
                  <span className="font-semibold">81,596 km</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Year
                  </span>
                  <span className="font-semibold">2015/3</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine
                  </span>
                  <span className="font-semibold">3,490cc</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Location
                  </span>
                  <span className="font-semibold">Yokohama</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Model Code
                  </span>
                  <span className="font-semibold">DAA-222057</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Steering
                  </span>
                  <span className="font-semibold">Left</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Fuel
                  </span>
                  <span className="font-semibold">Hybrid(Petrol)</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Seats
                  </span>
                  <span className="font-semibold">5</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine Code
                  </span>
                  <span className="font-semibold">276-21227</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Color
                  </span>
                  <span className="font-semibold">White</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Drive
                  </span>
                  <span className="font-semibold">2WD</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Doors
                  </span>
                  <span className="font-semibold">4</span>
                </div>
              </div>
            </div>
            <div className="md:w-40 border-t md:border-t-0 md:pt-0 pt-4 flex flex-col justify-center gap-4 shrink-0">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] text-gray-700 font-medium">
                    Price:
                  </p>
                  <p className="text-[15px] text-blue-900 font-bold">$14,800</p>
                </div>
                <p className="text-[15px] text-gray-700 pb-1">
                  Total: <span className="text-black font-bold">ASK</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <a href="form.html" className="w-full">
                  <button className="w-full bg-orange-500 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    INQUIRY
                  </button>
                </a>
                <button className="w-full bg-green-600 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                  <svg
                    role="img"
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  CHAT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4 max-w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-48 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80"
                alt="Car"
                className="w-full h-48 md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <h3 className="text-lg font-bold text-gray-900 mb-1 whitespace-nowrap  text-ellipsis">
                2015 MERCEDES-BENZ S-CLASS HYBRID S400
              </h3>
              <div className="inline-block border border-blue-500 bg-blue-50 px-2 py-1 rounded-md mb-2">
                <span className="text-blue-700 font-bold text-[14px]">
                  STOCK NO. 105482
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[14px]">
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Mileage
                  </span>
                  <span className="font-semibold">81,596 km</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Year
                  </span>
                  <span className="font-semibold">2015/3</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine
                  </span>
                  <span className="font-semibold">3,490cc</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Location
                  </span>
                  <span className="font-semibold">Yokohama</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Model Code
                  </span>
                  <span className="font-semibold">DAA-222057</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Steering
                  </span>
                  <span className="font-semibold">Left</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Fuel
                  </span>
                  <span className="font-semibold">Hybrid(Petrol)</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Seats
                  </span>
                  <span className="font-semibold">5</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Engine Code
                  </span>
                  <span className="font-semibold">276-21227</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Color
                  </span>
                  <span className="font-semibold">White</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Drive
                  </span>
                  <span className="font-semibold">2WD</span>
                </div>
                <div>
                  <span className="block text-[12px] text-gray-400 font-bold uppercase">
                    Doors
                  </span>
                  <span className="font-semibold">4</span>
                </div>
              </div>
            </div>
            <div className="md:w-40 border-t md:border-t-0 md:pt-0 pt-4 flex flex-col justify-center gap-4 shrink-0">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] text-gray-700 font-medium">
                    Price:
                  </p>
                  <p className="text-[15px] text-blue-900 font-bold">$14,800</p>
                </div>
                <p className="text-[15px] text-gray-700 pb-1">
                  Total: <span className="text-black font-bold">ASK</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <a href="form.html" className="w-full">
                  <button className="w-full bg-orange-500 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    INQUIRY
                  </button>
                </a>
                <button className="w-full bg-green-600 text-white font-bold py-1.5 rounded flex items-center justify-center gap-2">
                  <svg
                    role="img"
                    className="size-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  CHAT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 mt-1 mb-2 text-xs">
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 disabled:opacity-50">
            Previous
          </button>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-blue-500 bg-blue-50 text-blue-600 rounded-lg font-bold">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
              3
            </button>
            <span className="px-2 py-1 text-gray-400">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
              10
            </button>
          </div>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">
            Next
          </button>
        </div>
        {/* grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {/* Repeat this block 4 times for 4 cards */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="relative w-full h-40">
              <img
                src="https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/1920x1080/fit_q87/8971089dfecb931bd1601fa8dea0f7cfac05a3de/1200x630_generic_sport_car_gt3_realtime.jpg"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="inline-block  border border-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mb-3">
                <span className="text-blue-700 font-bold text-[11px]">
                  STOCK NO. 105482
                </span>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center mb-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                {/* Price (Start) */}
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Price
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    $12,000
                  </span>
                </div>
                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-gray-200" />
                {/* Total Price (End) */}
                <div className="text-right">
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Total Price
                  </span>
                  <span className="text-sm font-extrabold text-blue-900">
                    $12,500
                  </span>
                </div>
              </div>
              {/* Details Grid (2 Columns) */}
              <div className="mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[16px]">
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Mileage
                    </span>
                    <span className="text-sm font-semibold">81,596 km</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Year
                    </span>
                    <span className="text-sm font-semibold">2015/3</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Engine
                    </span>
                    <span className="text-sm font-semibold">3,490cc</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold">Yokohama</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Steering
                    </span>
                    <span className="text-sm font-semibold">Left</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Fuel
                    </span>
                    <span className="text-sm font-semibold">Petrol</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Seats
                    </span>
                    <span className="text-sm font-semibold">5</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Color
                    </span>
                    <span className="text-sm font-semibold">White</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Drive
                    </span>
                    <span className="text-sm font-semibold">2WD</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Doors
                    </span>
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      ModelCode
                    </span>
                    <span className="text-sm font-semibold">DA222057</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {/* Inquiry Button (Side by side) */}
                <a href="form.html" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-1.5 rounded-lg font-bold hover:bg-orange-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Inquiry
                  </button>
                </a>
                {/* Chat Button (Side by side) */}
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End of Card Block */}
          {/* Repeat this block 4 times for 4 cards */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="relative w-full h-40">
              <img
                src="https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/1920x1080/fit_q87/8971089dfecb931bd1601fa8dea0f7cfac05a3de/1200x630_generic_sport_car_gt3_realtime.jpg"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="inline-block  border border-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mb-3">
                <span className="text-blue-700 font-bold text-[11px]">
                  STOCK NO. 105482
                </span>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center mb-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                {/* Price (Start) */}
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Price
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    $12,000
                  </span>
                </div>
                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-gray-200" />
                {/* Total Price (End) */}
                <div className="text-right">
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Total Price
                  </span>
                  <span className="text-sm font-extrabold text-blue-900">
                    $12,500
                  </span>
                </div>
              </div>
              {/* Details Grid (2 Columns) */}
              <div className="mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[16px]">
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Mileage
                    </span>
                    <span className="text-sm font-semibold">81,596 km</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Year
                    </span>
                    <span className="text-sm font-semibold">2015/3</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Engine
                    </span>
                    <span className="text-sm font-semibold">3,490cc</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold">Yokohama</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Steering
                    </span>
                    <span className="text-sm font-semibold">Left</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Fuel
                    </span>
                    <span className="text-sm font-semibold">Petrol</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Seats
                    </span>
                    <span className="text-sm font-semibold">5</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Color
                    </span>
                    <span className="text-sm font-semibold">White</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Drive
                    </span>
                    <span className="text-sm font-semibold">2WD</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Doors
                    </span>
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      ModelCode
                    </span>
                    <span className="text-sm font-semibold">DA222057</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {/* Inquiry Button (Side by side) */}
                <a href="form.html" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-1.5 rounded-lg font-bold hover:bg-orange-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Inquiry
                  </button>
                </a>
                {/* Chat Button (Side by side) */}
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Repeat this block 4 times for 4 cards */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="relative w-full h-40">
              <img
                src="https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/1920x1080/fit_q87/8971089dfecb931bd1601fa8dea0f7cfac05a3de/1200x630_generic_sport_car_gt3_realtime.jpg"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="inline-block  border border-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mb-3">
                <span className="text-blue-700 font-bold text-[11px]">
                  STOCK NO. 105482
                </span>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center mb-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                {/* Price (Start) */}
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Price
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    $12,000
                  </span>
                </div>
                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-gray-200" />
                {/* Total Price (End) */}
                <div className="text-right">
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Total Price
                  </span>
                  <span className="text-sm font-extrabold text-blue-900">
                    $12,500
                  </span>
                </div>
              </div>
              {/* Details Grid (2 Columns) */}
              <div className="mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[16px]">
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Mileage
                    </span>
                    <span className="text-sm font-semibold">81,596 km</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Year
                    </span>
                    <span className="text-sm font-semibold">2015/3</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Engine
                    </span>
                    <span className="text-sm font-semibold">3,490cc</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold">Yokohama</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Steering
                    </span>
                    <span className="text-sm font-semibold">Left</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Fuel
                    </span>
                    <span className="text-sm font-semibold">Petrol</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Seats
                    </span>
                    <span className="text-sm font-semibold">5</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Color
                    </span>
                    <span className="text-sm font-semibold">White</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Drive
                    </span>
                    <span className="text-sm font-semibold">2WD</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Doors
                    </span>
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      ModelCode
                    </span>
                    <span className="text-sm font-semibold">DA222057</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {/* Inquiry Button (Side by side) */}
                <a href="form.html" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-1.5 rounded-lg font-bold hover:bg-orange-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Inquiry
                  </button>
                </a>
                {/* Chat Button (Side by side) */}
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Repeat this block 4 times for 4 cards */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="relative w-full h-40">
              <img
                src="https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/1920x1080/fit_q87/8971089dfecb931bd1601fa8dea0f7cfac05a3de/1200x630_generic_sport_car_gt3_realtime.jpg"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="inline-block  border border-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mb-3">
                <span className="text-blue-700 font-bold text-[11px]">
                  STOCK NO. 105482
                </span>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center mb-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                {/* Price (Start) */}
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Price
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    $12,000
                  </span>
                </div>
                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-gray-200" />
                {/* Total Price (End) */}
                <div className="text-right">
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Total Price
                  </span>
                  <span className="text-sm font-extrabold text-blue-900">
                    $12,500
                  </span>
                </div>
              </div>
              {/* Details Grid (2 Columns) */}
              <div className="mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[16px]">
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Mileage
                    </span>
                    <span className="text-sm font-semibold">81,596 km</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Year
                    </span>
                    <span className="text-sm font-semibold">2015/3</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Engine
                    </span>
                    <span className="text-sm font-semibold">3,490cc</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold">Yokohama</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Steering
                    </span>
                    <span className="text-sm font-semibold">Left</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Fuel
                    </span>
                    <span className="text-sm font-semibold">Petrol</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Seats
                    </span>
                    <span className="text-sm font-semibold">5</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Color
                    </span>
                    <span className="text-sm font-semibold">White</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Drive
                    </span>
                    <span className="text-sm font-semibold">2WD</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Doors
                    </span>
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      ModelCode
                    </span>
                    <span className="text-sm font-semibold">DA222057</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {/* Inquiry Button (Side by side) */}
                <a href="form.html" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-1.5 rounded-lg font-bold hover:bg-orange-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Inquiry
                  </button>
                </a>
                {/* Chat Button (Side by side) */}
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Repeat this block 4 times for 4 cards */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="relative w-full h-40">
              <img
                src="https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/1920x1080/fit_q87/8971089dfecb931bd1601fa8dea0f7cfac05a3de/1200x630_generic_sport_car_gt3_realtime.jpg"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="inline-block  border border-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mb-3">
                <span className="text-blue-700 font-bold text-[11px]">
                  STOCK NO. 105482
                </span>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center mb-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                {/* Price (Start) */}
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Price
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    $12,000
                  </span>
                </div>
                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-gray-200" />
                {/* Total Price (End) */}
                <div className="text-right">
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Total Price
                  </span>
                  <span className="text-sm font-extrabold text-blue-900">
                    $12,500
                  </span>
                </div>
              </div>
              {/* Details Grid (2 Columns) */}
              <div className="mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[16px]">
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Mileage
                    </span>
                    <span className="text-sm font-semibold">81,596 km</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Year
                    </span>
                    <span className="text-sm font-semibold">2015/3</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Engine
                    </span>
                    <span className="text-sm font-semibold">3,490cc</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold">Yokohama</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Steering
                    </span>
                    <span className="text-sm font-semibold">Left</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Fuel
                    </span>
                    <span className="text-sm font-semibold">Petrol</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Seats
                    </span>
                    <span className="text-sm font-semibold">5</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Color
                    </span>
                    <span className="text-sm font-semibold">White</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Drive
                    </span>
                    <span className="text-sm font-semibold">2WD</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Doors
                    </span>
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      ModelCode
                    </span>
                    <span className="text-sm font-semibold">DA222057</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {/* Inquiry Button (Side by side) */}
                <a href="form.html" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-1.5 rounded-lg font-bold hover:bg-orange-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Inquiry
                  </button>
                </a>
                {/* Chat Button (Side by side) */}
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Repeat this block 4 times for 4 cards */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <div className="relative w-full h-40">
              <img
                src="https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/1920x1080/fit_q87/8971089dfecb931bd1601fa8dea0f7cfac05a3de/1200x630_generic_sport_car_gt3_realtime.jpg"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="inline-block  border border-blue-500 bg-blue-50 px-2 py-0.5 rounded-md mb-3">
                <span className="text-blue-700 font-bold text-[11px]">
                  STOCK NO. 105482
                </span>
              </div>
              {/* Price Section */}
              <div className="flex justify-between items-center mb-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                {/* Price (Start) */}
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Price
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    $12,000
                  </span>
                </div>
                {/* Vertical Divider */}
                <div className="h-6 w-[1px] bg-gray-200" />
                {/* Total Price (End) */}
                <div className="text-right">
                  <span className="block text-[9px] text-gray-500 font-bold uppercase">
                    Total Price
                  </span>
                  <span className="text-sm font-extrabold text-blue-900">
                    $12,500
                  </span>
                </div>
              </div>
              {/* Details Grid (2 Columns) */}
              <div className="mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[16px]">
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Mileage
                    </span>
                    <span className="text-sm font-semibold">81,596 km</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Year
                    </span>
                    <span className="text-sm font-semibold">2015/3</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Engine
                    </span>
                    <span className="text-sm font-semibold">3,490cc</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Location
                    </span>
                    <span className="text-sm font-semibold">Yokohama</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Steering
                    </span>
                    <span className="text-sm font-semibold">Left</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Fuel
                    </span>
                    <span className="text-sm font-semibold">Petrol</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Seats
                    </span>
                    <span className="text-sm font-semibold">5</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Color
                    </span>
                    <span className="text-sm font-semibold">White</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Drive
                    </span>
                    <span className="text-sm font-semibold">2WD</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      Doors
                    </span>
                    <span className="text-sm font-semibold">4</span>
                  </div>
                  <div>
                    <span className="block text-[14px] text-gray-400 font-bold uppercase">
                      ModelCode
                    </span>
                    <span className="text-sm font-semibold">DA222057</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {/* Inquiry Button (Side by side) */}
                <a href="form.html" className="flex-1">
                  <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-1.5 rounded-lg font-bold hover:bg-orange-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Inquiry
                  </button>
                </a>
                {/* Chat Button (Side by side) */}
                <a
                  href="https://wa.me/YOUR_NUMBER"
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <aside className="lg:col-span-1">
      <div className="border border-blue-200 rounded-lg overflow-hidden">
        <h3 className="bg-blue-600 text-white font-bold py-3 px-4">
          Shop By Make
        </h3>
        <ul className="text-sm">
          <ul className="text-sm p-2 space-y-1">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">TOYOTA</span>
                <span className="text-slate-400 font-normal">(87,389)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">NISSAN</span>
                <span className="text-slate-400 font-normal">(38,201)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">HONDA</span>
                <span className="text-slate-400 font-normal">(35,483)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">MAZDA</span>
                <span className="text-slate-400 font-normal">(13,262)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">MITSUBISHI</span>
                <span className="text-slate-400 font-normal">(13,434)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">MITSUBISHI</span>
                <span className="text-slate-400 font-normal">(13,434)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">MITSUBISHI</span>
                <span className="text-slate-400 font-normal">(13,434)</span>
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">MITSUBISHI</span>
                <span className="text-slate-400 font-normal">(13,434)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">SUBARU</span>
                <span className="text-slate-400 font-normal">(10,579)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">SUZUKI</span>
                <span className="text-slate-400 font-normal">(42,378)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">DAIHATSU</span>
                <span className="text-slate-400 font-normal">(34,257)</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
              >
                <span className="text-lg">🚗</span>
                <span className="font-semibold flex-1">MERCEDES-BENZ</span>
                <span className="text-slate-400 font-normal">(21,381)</span>
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div className="border border-blue-200 rounded-lg overflow-hidden bg-white">
        <h3 className="bg-blue-600 text-white font-bold py-3 px-4">
          Shop By Price
        </h3>
        <ul className="text-sm p-2 space-y-1">
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              Under $500
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              $500 - $1,000
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              $1,000 - $1,500
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              Over $4,000
            </a>
          </li>
        </ul>
      </div>
      <div className="border border-blue-200 rounded-lg overflow-hidden bg-white">
        <h3 className="bg-blue-600 text-white font-bold py-3 px-4">
          Shop By Discount
        </h3>
        <ul className="text-sm p-2 space-y-1">
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              70% Off or More
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              50% Off or More
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              30% Off or More
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              10% - 30% Off
            </a>
          </li>
        </ul>
      </div>
      {/* Shop By Type Section */}
      <div className="border border-blue-200 rounded-lg overflow-hidden bg-white">
        <h3 className="bg-blue-600 text-white font-bold py-3 px-4">
          Shop By Type
        </h3>
        <ul className="text-sm p-2 space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              <span>🚗</span> SUV
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              <span>🚚</span> Truck
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              <span>🚐</span> Van
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              <span>🚗</span> Sedan
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition"
            >
              <span>🚌</span> Bus
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</main>

  )
}
