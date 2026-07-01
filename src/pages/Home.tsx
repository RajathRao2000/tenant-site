export const Home = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-4 font-sans sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Content Column */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-text text-3xl leading-tight font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Find your <span className="text-secondary">perfect car</span> with
              precision.
            </h1>
            <p className="text-text/70 max-w-lg text-sm leading-relaxed font-light md:text-lg">
              Explore our curated selection of high-end vehicles. From luxury
              sedans to high-performance sports cars, we make your search
              effortless.
            </p>
            <div className="flex gap-4 pt-1">
              <button className="flex transform items-center justify-center gap-3 rounded-xl bg-[#ff4a01] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#001ac7]/30 transition hover:-translate-y-0.5 hover:bg-[#ff4a01] md:px-8 md:py-4 md:text-base">
                <span className="capitalize">view all vehicles</span>
                <svg
                  className="h-5 h-6 w-5 animate-[arrow-slide_1.5s_infinite_ease-in-out] md:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 12h14m0 0l-4-4m4 4l-4 4"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Right Image Column */}
          <div className="relative">
            <div className="shadow-secondary/30 relative z-10 overflow-hidden rounded-3xl shadow-xl">
              {/* Main Image */}
              <div className="aspect-[16/9] overflow-hidden md:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury Car"
                  className="h-full w-full transform object-cover transition duration-700 ease-in-out hover:scale-[1.01]"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute top-4 left-0 z-20 md:top-6">
                <div className="relative animate-pulse rounded-r-full bg-[#5d76cb] px-4 py-2 text-xs font-bold text-white shadow-lg md:px-6 md:py-3 md:text-sm">
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 h-5 w-4 md:w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                    </svg>
                    500,000+ Vehicle Listings
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-#6EB1D6 absolute top-10 -right-10 -z-10 h-72 w-72 rounded-full opacity-60 mix-blend-multiply blur-3xl filter"></div>
          </div>
        </div>
      </section>
      {/* Advanced Search  */}
      <section className="relative z-20 mx-auto mt-6 mb-8 max-w-7xl px-4 md:mt-10">
        <div className="rounded-2xl border border-gray-100 bg-white p-3.5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.12)] sm:p-4 md:rounded-3xl md:p-4.5">
          <form className="grid grid-cols-1 items-end gap-3 md:grid-cols-5 md:gap-4">
            <div className="grid grid-cols-2 gap-2.5 md:col-span-4 md:gap-3.5 lg:grid-cols-4">
              <div>
                <label className="mb-1 ml-0.5 block text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  Make
                </label>
                <select className="focus:border-primary focus:ring-primary/5 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs font-semibold text-gray-800 transition-all outline-none focus:ring-4 sm:text-sm">
                  <option>Select Make</option>
                </select>
              </div>
              <div>
                <label className="mb-1 ml-0.5 block text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  Model
                </label>
                <select className="focus:border-primary focus:ring-primary/5 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs font-semibold text-gray-800 transition-all outline-none focus:ring-4 sm:text-sm">
                  <option>Select Model</option>
                </select>
              </div>
              <div>
                <label className="mb-1 ml-0.5 block text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  Min Year
                </label>
                <select className="focus:border-primary focus:ring-primary/5 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs font-semibold text-gray-800 transition-all outline-none focus:ring-4 sm:text-sm">
                  <option>From</option>
                </select>
              </div>
              <div>
                <label className="mb-1 ml-0.5 block text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  Max Year
                </label>
                <select className="focus:border-primary focus:ring-primary/5 w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs font-semibold text-gray-800 transition-all outline-none focus:ring-4 sm:text-sm">
                  <option>To</option>
                </select>
              </div>
            </div>
            <div className="w-full md:col-span-1">
              <button
                type="submit"
                className="flex h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-[#ff4a01] text-sm font-bold text-white shadow-lg shadow-[#001ac7]/40 transition-all duration-300 hover:scale-[1.01] hover:bg-[#ff4a01] active:scale-[0.99] sm:h-[55px] sm:text-base"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                search
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="font-poppins w-full bg-white py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">NEW ARRIVALS</h2>
              <div className="mt-2 h-0.5 w-36 rounded-full bg-blue-500" />
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-sm font-bold tracking-wider text-[#433bff] uppercase transition-colors hover:text-blue-800"
              >
                View all
              </a>
              <div className="flex gap-2">
                <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-all hover:border-[#433bff] hover:bg-[#433bff] hover:text-white">
                  <svg
                    className="h-6 w-6 rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-all hover:border-[#433bff] hover:bg-[#433bff] hover:text-white">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://p.turbosquid.com/ts-thumb/8N/uEOthz/3qhjaxSK/1200x630_generic_sport_car_gt3_realtime/jpg/1496396819/1920x1080/fit_q87/8971089dfecb931bd1601fa8dea0f7cfac05a3de/1200x630_generic_sport_car_gt3_realtime.jpg"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  New
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <span className="text-xl font-extrabold text-green-700">
                    $78,000
                  </span>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jv74fNlwUqJclrD_5yOwwuaXpr6pAfJ_EdRyspnl6B8wRGhVjvDLIx4&s=10"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  New
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <span className="text-xl font-extrabold text-green-700">
                    $78,000
                  </span>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnseEAZn_8AgkrA8HPNv9t5In_6xstuS8M69sAR7yChg&s=10"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  New
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <span className="text-xl font-extrabold text-green-700">
                    $78,000
                  </span>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyjDHTnSfuNufnbKEB2VOE0mHZ0CqU_Na33QVrxxBAA&s=10"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <span className="text-xl font-extrabold text-green-700">
                    $78,000
                  </span>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CLEARANCE SALE SECTION */}
      <section className="font-poppins w-full bg-slate-100 py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Clearance Sale
              </h2>
              <div className="mt-1 h-0.5 w-24 rounded-full bg-blue-700 md:w-36" />
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-sm font-bold tracking-wider text-blue-700 uppercase hover:text-blue-900"
              >
                View all
              </a>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-all hover:border-green-600 hover:bg-green-600 hover:text-white md:h-12 md:w-12">
                  <svg
                    className="h-5 w-5 rotate-180 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-all hover:border-green-600 hover:bg-green-600 hover:text-white md:h-12 md:w-12">
                  <svg
                    className="h-5 w-5 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* card 1 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://images.kobemotor.com/images/v84415-ai002.jpg"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  25% OFF
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                    <span className="text-grey-600 text-sm line-through">
                      $85,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://images.kobemotor.com/images/v66885-yi001.jpeg"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  25% OFF
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                    <span className="text-grey-600 text-sm line-through">
                      $85,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/*card 3 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxSrwVn5Kl_wt6xlfconGX_xQMjzYp_xGh0K-mhGHFg&s=10"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  25% OFF
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                    <span className="text-grey-600 text-sm line-through">
                      $85,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* card 4*/}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  25% OFF
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                    <span className="text-grey-600 text-sm line-through">
                      $85,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Selling In India*/}
      <section className="font-poppins w-full bg-white py-6">
        <div className="mx-auto max-w-7xl px-3">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Top Selling
              </h2>
              <div className="mt-1 h-0.5 w-24 rounded-full bg-blue-700 md:w-36" />
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-sm font-bold tracking-wider text-blue-700 uppercase hover:text-blue-900"
              >
                View all
              </a>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-all hover:border-green-600 hover:bg-green-600 hover:text-white md:h-12 md:w-12">
                  <svg
                    className="h-5 w-5 rotate-180 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 p-3 text-gray-500 transition-all hover:border-green-600 hover:bg-green-600 hover:text-white md:h-12 md:w-12">
                  <svg
                    className="h-5 w-5 md:h-6 md:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* card 1 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcDdkBmoAutc8xseWt1oeNLQ5Pv0MsawA0KLA-VxOBA&s=10"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuobCrv7_oov_D7pVcF3DgPX0ccAR5SNVgTzBKNjrc-w&s=10"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/*card 3 */}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* card 4*/}
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
              <div className="relative h-40 w-full">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80"
                  className="h-full w-full object-cover"
                  alt="Car"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
              </div>
              <div className="relative z-10 -mt-11 px-4 pb-4">
                <h3 className="mb-2 text-2xl leading-tight font-semibold text-gray-950">
                  2003 Toyota
                  <br /> Raum NCZ25 4WD
                </h3>
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-lg font-medium text-gray-500">
                    2026/4
                  </span>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-extrabold text-green-700">
                      $78,000
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-3 flex justify-start gap-3">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        42,300Km
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Hybrid
                      </span>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-start gap-4">
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z" />
                        <path d="M6 16v2" />
                        <path d="M18 16v2" />
                        <path d="M6 13h12" />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        Sedan
                      </span>
                    </div>
                    <div className="flex w-[48%] items-center gap-1">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[18px] font-semibold text-gray-700">
                        1400cc
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
                    View
                  </button>
                  <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
