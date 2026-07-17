import { Headset, Mic, Pencil, Phone, PhoneCall } from "lucide-react";

export const StockDetails = () => {
  
  // function checkInputs() {
  //   const country = document.getElementById('countrySelect').value;
  //   const fob = document.getElementById('fobInput').value;
  //   const btn = document.getElementById('calcBtn');
  //   if (country !== "" && fob !== "") {
  //     btn.disabled = false;
  //     btn.classList.remove('bg-slate-300', 'cursor-not-allowed');
  //     btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
  //   } else {
  //     btn.disabled = true;
  //     btn.classList.add('bg-slate-300', 'cursor-not-allowed');
  //     btn.classList.remove('bg-blue-600');
  //   }
  // }

  // function showResults() {
  //   document.getElementById('shipping-breakdown').classList.remove('hidden');
  // }


  // const dropdown = document.getElementById('countryDropdown');
  // const options = document.getElementById('optionsList');
  
  // dropdown.addEventListener('click', () => {
  //   options.classList.toggle('hidden');
  // });

  // function selectCountry(name, flagUrl) {
  //   document.getElementById('selectedCountry').innerHTML = `
  //     <img src="${flagUrl}" class="w-6 h-4 rounded-sm shadow-sm">
  //     <span class="text-sm font-bold text-slate-700">${name}</span>
  //   `;
  //   options.classList.add('hidden');
  // }

  return (
    <>

  <div className="max-w-7xl mx-auto p-4 md:p-6">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
      {/* Title & Stock Info */}
      <div className="w-full lg:w-2/3">
        <h1 className="font-black text-slate-800" style={{ fontSize: 28 }}>
          2004 Toyota Prado CBA-TRJ120W TX AWD 5D 4WD
        </h1>
        <div className="inline-block bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-lg font-bold text-x mt-3">
          STOCK NO: 2052341
        </div>
      </div>
      {/* Need Assistance Box  */}
      <div className="w-full lg:w-[383px]">
        <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1={12} x2={12} y1={19} y2={22} />
              </svg>
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-slate-800">
                Need Assistance?
              </h4>
              <p className="text-[14px] text-slate-500">We're here to help.</p>
            </div>
          </div>
          {/* Contact Section */}
          <div className="border-t border-slate-100 pt-3">
            <div className="flex items-center justify-between gap-2">
              {/* Chat with us */}
              <a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2.5 text-green-600 font-bold text-[14px] hover:opacity-80 transition-opacity"
>
  <span className="w-8 h-8 bg-[#25d366] rounded-lg flex items-center justify-center shrink-0 text-white">
    <svg 
      viewBox="0 0 24 24" 
      width="18" 
      height="18" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </span>
  Chat with us
</a>
              {/* Call with us */}
             <a
  href="tel:+919876543210"
  className="flex items-center gap-2 text-slate-700 font-bold text-[14px] hover:text-blue-600 transition-colors"
  aria-label="Call us at +91 98765 43210"
>
  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#2563eb" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
    </svg>
  </span>
  <span className="flex gap-1">
    Call: <span className="text-slate-900">+91 98765 43210</span>
  </span>
</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDE: Image, Thumbnails, and Social/Download */}
      <div className="lg:col-span-2 space-y-4">
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-video">
          <img
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Thumbnails */}
        <div className="grid grid-cols-6 gap-2">
          <div className="aspect-square rounded-lg border-2 border-blue-600 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=100&q=80"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg border-2 border-blue-600 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=100&q=80"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg border border-slate-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=100&q=80"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg border border-slate-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=100&q=80"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg border border-slate-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=100&q=80"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg bg-slate-800 flex items-center justify-center text-white text-[10px] font-bold">
            ▶ VIDEO
          </div>
        </div>
        {/* Social & Download Section */}
        <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-wrap items-center gap-4">
          {/* Share Section */}
          <div className="flex items-center gap-3">
            <span className="text-slate-700 font-bold text-xl">Share via:</span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a href="#" className="text-pink-600 hover:scale-120 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  className="w-7 h-7"
                />
              </a>
              {/* Line */}
              {/* WhatsApp */}
              <a href="#" className="text-green-600 hover:scale-120 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png"
                  className="w-7 h-7"
                />
              </a>
              {/* Facebook */}
              <a href="#" className="text-blue-700 hover:scale-120 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  className="w-7 h-7"
                />
              </a>
              {/* X (Twitter) */}
              <a href="#" className="text-black hover:scale-120 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png"
                  className="w-7 h-7"
                />
              </a>
            </div>
          </div>
          {/* Download All Images */}
          <button className="ml-auto flex items-center gap-1 text-blue-600 font-bold text-x hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            DOWNLOAD ALL IMAGES
          </button>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4">
          {/* Odometer */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center gap-1.5 hover:border-blue-400 transition-all duration-300">
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V12h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="block text-[12px] font-black text-slate-600 uppercase tracking-widest">
              Odometer
            </span>
            <span className="block text-[16px] font-extrabold text-slate-800">
              86,500 km
            </span>
          </div>
          {/* Year Model */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center gap-1.5 hover:border-blue-400 transition-all duration-300">
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="block text-[12px] font-black text-slate-600 uppercase tracking-widest">
              Year Month
            </span>
            <span className="block text-[16px] font-extrabold text-slate-800">
              June 2016
            </span>
          </div>
          {/* Engine Size */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center gap-1.5 hover:border-blue-400 transition-all duration-300">
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
            </svg>
            <span className="block text-[12px] font-black text-slate-600 uppercase tracking-widest">
              Engine Size
            </span>
            <span className="block text-[16px] font-extrabold text-slate-800">
              1,600 cc
            </span>
          </div>
          {/* Gearbox */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm flex flex-col items-center justify-center gap-1.5 hover:border-blue-400 transition-all duration-300">
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="block text-[12px] font-black text-slate-600 uppercase tracking-widest">
              Gearbox
            </span>
            <span className="block text-[16px] font-extrabold text-slate-800">
              Automatic
            </span>
          </div>
          {/* Fuel Profile */}
          <div className="bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm col-span-2 md:col-span-1 flex flex-col items-center justify-center gap-1.5 hover:border-blue-400 transition-all duration-300">
            <svg
              className="w-6 h-6 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="block text-[12px] font-black text-slate-600 uppercase tracking-widest">
              Fuel Profile
            </span>
            <span className="block text-[16px] font-extrabold text-slate-800">
              Petrol
            </span>
          </div>
        </section>
        <section className="py-2">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <h3 className="text-2xl font-bold text-[#1E3A8A] uppercase mb-4 pl-1 inline-block border-b-2 border-orange-400 pb-1">
              <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* 1. Stock No */}
              {/* 2. Make */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Make
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  Toyota
                </div>
              </div>
              {/* 3. Model */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Model
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  Land Cruiser Prado
                </div>
              </div>
              {/* 4. Chassis No */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Chassis No
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  GDJ150-0******
                </div>
              </div>
              {/* 5. Sub Model */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  Sub Model
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  LDA-GDJ150W
                </div>
              </div>
              {/* 6. Body Type */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 0a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                  Body Type
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  Wagon
                </div>
              </div>
              {/* 7. Grade */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  Grade
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  TX AWD 5D 4WD
                </div>
              </div>
              {/* 11. Registration */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
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
                  Registration
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  2020 / 8
                </div>
              </div>
              {/* 12. Manufacture Year */}
              {/* 13. Fuel */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L4.44 15.428a2 2 0 00-1.022.547L2 17.5l4-4 4-4 4 4 4-4 4 4-1.572 2.072z"
                    />
                  </svg>
                  Fuel
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  Diesel
                </div>
              </div>
              {/* 14. Transmission */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  Transmission
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  Automatic
                </div>
              </div>
              {/* 15. Drive Type */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Drive Type
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  4WD
                </div>
              </div>
              {/* 16. Engine CC */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Engine CC
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  2754 CC
                </div>
              </div>
              {/* 17. Color */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  Color
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  Gray
                </div>
              </div>
              {/* 18. Weight */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l3-9a5.002 5.002 0 00-6 .001l3 8.999zm0 0v6m6-6l3 1m0 0l3-9a5.002 5.002 0 00-6 .001l3 8.999zm0 0v6"
                    />
                  </svg>
                  Weight
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  2,645 KGs
                </div>
              </div>
              {/* 19. Dimension */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  Dimension
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  482 * 188 * 189
                </div>
              </div>
              {/* 20. M3 */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  M3
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  17.13 M3
                </div>
              </div>
              {/* 8. Steering */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  Steering
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  RHD
                </div>
              </div>
              {/* 9. Doors */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Doors
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  5
                </div>
              </div>
              {/* 10. Seats */}
              <div className="p-4 border border-slate-200 rounded-2xl hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm font-bold uppercase">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Seats
                </div>
                <div className="text-slate-800 font-bold border-b border-slate-100 pb-1">
                  7
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* RIGHT SIDE: Inquiry Form */}
      <div className="sticky top-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm h-fit">
        {/* Header: Total & Vehicle Price */}
        <div className="flex justify-between items-start mb-6 border-b border-slate-200 pb-4">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Total price
            </p>
            <p className="text-blue-800 font-black text-3xl">$8,469</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-left text-slate-400 uppercase tracking-wider">
              Vehicle Price
            </p>
            <p className="text-orange-600 font-bold text-3xl text-left">
              $7,469
            </p>
          </div>
        </div>
        {/* User Details & Comment */}
        <div className="space-y-3 mb-4">
          {/* Form Heading */}
          <h3 className="text-lg font-semibold text-slate-800 justify-center">
            Inquiry Now
          </h3>
          <input
            type="text"
            placeholder="First Name"
            className="w-full border-2 border-slate-100 p-2 rounded-lg text-sm font-bold outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border-2 border-slate-100 p-2 rounded-lg text-sm font-bold outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-2 border-slate-100 p-2 rounded-lg text-sm font-bold outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border-2 border-slate-100 p-2 rounded-lg text-sm font-bold outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full border-2 border-slate-100 p-2 rounded-lg text-sm font-bold outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Comment"
            className="w-full border-2 border-slate-100 p-2 rounded-lg text-sm font-bold outline-none focus:border-blue-500 h-16"
            defaultValue={""}
          />
          <button className="w-full bg-blue-700 text-white font-bold py-2.5 rounded-lg hover:bg-blue-800 transition text-sm">
            GET FREE QUOTE
          </button>
        </div>
        {/* Shipping Calculator Section */}
        <div className="border-t pt-4 bg-blue-50 p-6 rounded-2xl">
          {/* Heading */}
          <h2 className="text-x font-bold text-slate-800 uppercase mb-3 text-center">
            Shipping Calculator
          </h2>
          <h2 className="text-xs font-bold text-slate-800 mb-2 uppercase">
            Calculate Shipping Cost
          </h2>
          <div className="relative w-full mb-3">
            {/* Country Selection UI */}
            <div
              id="countryDropdown"
              className="flex items-center justify-between  p-2.5 rounded-lg bg-grey-200  cursor-pointer  transition-all"
            >
              <div id="selectedCountry" className="flex items-center gap-3">
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India"
                  className="w-6 h-4 rounded-sm "
                />
                <span className="text-sm font-bold text-slate-700">India</span>
              </div>
              <div className="text-slate-400">
                <i className="fa-solid fa-pencil text-[13px]" />
              </div>
            </div>
            {/* Dropdown Options */}
            <div
              id="optionsList"
              className="hidden absolute top-full mt-2 w-full bg-white border border-slate-100 rounded-lg shadow-xl z-50"
            >
              <div
                className="p-2 cursor-pointer hover:bg-slate-50 flex items-center gap-3"
                onclick="selectCountry('India', 'https://flagcdn.com/w40/in.png')"
              >
                <img
                  src="https://flagcdn.com/w40/in.png"
                  className="w-6 h-4 rounded-sm"
                />{" "}
                <span className="text-sm font-bold">India</span>
              </div>
              <div
                className="p-2 cursor-pointer hover:bg-slate-50 flex items-center gap-3"
                onclick="selectCountry('USA', 'https://flagcdn.com/w40/us.png')"
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  className="w-6 h-4 rounded-sm"
                />{" "}
                <span className="text-sm font-bold">USA</span>
              </div>
              <div
                className="p-2 cursor-pointer hover:bg-slate-50 flex items-center gap-3"
                onclick="selectCountry('UK', 'https://flagcdn.com/w40/gb.png')"
              >
                <img
                  src="https://flagcdn.com/w40/gb.png"
                  className="w-6 h-4 rounded-sm"
                />{" "}
                <span className="text-sm font-bold">UK</span>
              </div>
            </div>
          </div>
          <select
            id="portSelect"
            className="w-full border-2 border-slate-100 p-2 rounded-lg text-sm font-bold mb-4"
          >
            <option value="">Select Port</option>
            <option
              value="TYO"
              data-freight={1200}
              data-cbm="2.5"
              data-rate={480}
            >
              Tokyo
            </option>
            <option
              value="JNP"
              data-freight={1013}
              data-cbm={2.0}
              data-rate={506}
            >
              Jawaharlal Nehru Port
            </option>
          </select>
          <button
            id="calcBtn"
            onclick="calculateShipping()"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-sm mb-4"
          >
            CALCULATE SHIPPING COST
          </button>
          <div
            id="shipping-breakdown"
            className="hidden space-y-4 text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-100"
          >
            <h3 className="font-bold border-b border-slate-200 pb-2">
              Shipping Cost Breakdown:
            </h3>
            {/* Freight Section */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-3">
              <span>Freight:</span>
              <div className="text-right">
                <div className="font-medium" id="valFreight">
                  $0
                </div>
                <div
                  className="text-[10px] text-slate-500 italic"
                  id="formulaFreight"
                >
                  ...
                </div>
              </div>
            </div>
            {/* Inspection Fee */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <span>Inspection Fee:</span>
              <span className="font-medium" id="valInsp">
                $95
              </span>
            </div>
            {/* Insurance */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-3">
              <span>Insurance:</span>
              <div className="text-right">
                <div className="font-medium" id="valIns">
                  $0
                </div>
                <div
                  className="text-[10px] text-slate-500 italic"
                  id="formulaIns"
                >
                  ...
                </div>
              </div>
            </div>
            {/* Handling Fee */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <span>Handling Fee:</span>
              <span className="font-medium" id="valHand">
                $114
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t border-slate-300 font-bold text-lg">
              <span>Total Shipping Cost:</span>{" "}
              <span className="text-green-600" id="valTotal">
                $0
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full flex items-center justify-center gap-2 bg-[#25d366] text-white font-bold py-3 rounded-lg shadow-sm">
            {/* WhatsApp Icon */}
            <i className="fa-brands fa-whatsapp text-lg" />
            <span>TALK TO US</span>
          </button>
        </div>
      </div>
    </div>
    <section className="w-full bg-slate-50 py-2 font-poppins">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <h3 className="text-2xl font-bold text-[#1E3A8A] uppercase mb-4 pl-1 inline-block border-b-2 border-orange-500 pb-1">
          Features
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2m-4.93 4.93l-1.41-1.41M6.34 17.66l-1.41-1.41" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">AC</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">ABS</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 11h18M3 15h18M3 19h18M4 7h16M7 3l3 4M17 3l-3 4" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Auto Windows
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Back Camera
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Bluetooth
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 8l2-2m0 0l2 2m-2-2v10m12-10l-2-2m0 0l-2 2m2-2v10" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Body Kit
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M10 14H2m0 0l3-3m-3 3l3 3m12-3h8m0 0l-3-3m3 3l-3 3" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Both Side Power Door
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={10} />
                <path d="M12 2a10 10 0 010 20m0-20a10 10 0 000 20" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              360 Camera
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Central Lock
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={12} r={3} />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Corner Sensor
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M9 18V5l12-2v13" />
                <path d="M6 21a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M18 19a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Display Audio
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 2v4m4 2l2-2m2 4h-4m4 0l-2 2m-2-2l2-2M2 12h4m2 0H6m0 0l2-2m-2 2l2 2" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Fog Lights
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 10v7a2 2 0 002 2h12a2 2 0 002-2v-7M4 10l2-6h12l2 6M4 10h16M10 14h4" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Leather Seats
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3 5H9l3-5zM9 17l3 5 3-5M12 7v10" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">LED</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 21l-7-7 7-7 7 7-7 7z" />
                <path d="M12 12l2 2" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Navigation
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              One Owner
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 11h18M9 4l6 16M15 4l-6 16" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Power Slide Door
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 8h18M3 16h18M9 3v18M15 3v18" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Panoramic Roof
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 8l4 4-4 4M8 12h12" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Power Mirror
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 10v7a2 2 0 002 2h12a2 2 0 002-2v-7" />
                <path d="M12 2v6m0 0l-3-3m3 3l3-3" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Power Seats
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Power Steering
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M14 9V5a3 3 0 00-3-3H6a3 3 0 00-3 3v14a3 3 0 003 3h5a3 3 0 003-3v-4" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Rear Spoiler
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 6h18M3 10h18M5 14h14" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Roof Rail
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              SRS Airbags
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 12h18M12 3v18" />
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">
              Sun Roof
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-[#006634] hover:shadow-md transition-all group">
            <div className="text-[#006634]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x={2} y={7} width={20} height={15} rx={2} />
                <path d="M12 7V4M8 4h8" />
              </svg>
            </div>
            <span className="text-slate-700 font-semibold text-sm">TV</span>
          </div>
        </div>
      </div>
    </section>
    {/* Payment Methods Section */}
    <section className="w-full bg-slate-50 py-10 font-poppins">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#1E3A8A] uppercase border-b-2 border-orange-400 inline-block pb-1">
            Payment Methods
          </h2>
        </div>
        {/* 3 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 1. Bank Transfer */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="bg-blue-50 p-4 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-[#1E3A8A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">
              Bank Transfer
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Safe and direct local bank transfers.
            </p>
            <a
              href="your-bank-page.html"
              className="px-6 py-2 bg-[#1E3A8A] text-white rounded-full text-sm font-semibold hover:bg-blue-900 transition"
            >
              6+ Banks Available
            </a>
          </div>
          {/* 2. Cards */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className="bg-blue-50 p-4 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-[#1E3A8A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">
              Debit / Credit Card
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Accepted Visa &amp; Mastercard{" "}
            </p>
            <div className="flex gap-3">
              <img
                src="visia.png"
                className="w-12 h-10 object-contain mb-3"
                alt="Visa"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                className="w-12 h-10 object-contain mb-3"
                alt="Mastercard"
              />
            </div>
          </div>
          {/* 3. International Payments */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            {/* Icon */}
            <div className="bg-blue-50 p-4 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-[#1E3A8A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">
              Payment Gateway
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Secure transactions via global gateways.
            </p>
            {/* Icons */}
            <div className="flex gap-4 items-center">
              {/* Stripe */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                className="h-6 w-16 object-contain"
                alt="Stripe"
              />
              {/* PayPal */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                className="h-6 w-20 object-contain"
                alt="PayPal"
              />
              {/* Wise */}
              <img
                src="wisse.png"
                className="h-10 w-20 object-contain"
                alt="Wise"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-slate-50 py-3 font-poppins">
      <div className="max-w-7xl mx-auto p-4 md:p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#1E3A8A] uppercase pl-1 inline-block border-b-2 border-orange-400 pb-1">
            Client Testimonials
          </h2>
        </div>
        <div className="flex overflow-x-auto gap-5 pb-8 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
          <div className="bg-white p-6 rounded-2xl shadow-x w-[280px] h-[250px] flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 mb-3 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-slate-600 text-x italic line-clamp-3">
                "An amazing experience! The car was in perfect condition."
              </p>
            </div>
            <div className="font-bold text-slate-800 border-t pt-3">
              - Rahul Patil
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-x w-[280px] h-[250px] flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 mb-3 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-slate-600 text-x italic line-clamp-3">
                "Very professional team, helped me choose the right vehicle."
              </p>
            </div>
            <div className="font-bold text-slate-800 border-t pt-3">
              - Amit Sharma
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-x w-[280px] h-[250px] flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 mb-3 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-slate-600 text-x italic line-clamp-3">
                "Smooth process and great pricing. Highly recommended."
              </p>
            </div>
            <div className="font-bold text-slate-800 border-t pt-3">
              - Priya Kulkarni
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-x w-[280px] h-[250px] flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 mb-3 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-slate-600 text-x italic line-clamp-3">
                Excellent condition of cars. Very happy with the purchase."
              </p>
            </div>
            <div className="font-bold text-slate-800 border-t pt-3">
              - Sneha Deshmukh
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-x w-[280px] h-[250px] flex flex-col justify-between shrink-0">
            <div>
              <div className="flex gap-1 mb-3 text-yellow-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-slate-600 text-x italic line-clamp-3">
                "Best place to buy used cars. Transparent deals."
              </p>
            </div>
            <div className="font-bold text-slate-800 border-t pt-3">
              - Vijay Jadhav
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-slate-50 py-2 font-poppins">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#1E3A8A] uppercase pl-1 inline-block border-b-2 border-orange-400 pb-1">
            Similar Vehicles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* card 1 */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 max-w-sm">
            <div className="relative w-full h-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcDdkBmoAutc8xseWt1oeNLQ5Pv0MsawA0KLA-VxOBA&s=10"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-2xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
                <span className="text-lg text-gray-500 font-medium">
                  2026/4
                </span>
                <div className="flex flex-col items-end">
                  <span className="font-extrabold text-xl text-green-700">
                    $78,000
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-start gap-3 mb-3">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <div className="flex justify-start gap-4 mb-2">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <button className="flex-1 border-2 border-blue-800 text-blue-800 py-1.5 rounded-lg font-bold">
                  View
                </button>
                <button className="flex-1 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 max-w-sm">
            <div className="relative w-full h-40">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuobCrv7_oov_D7pVcF3DgPX0ccAR5SNVgTzBKNjrc-w&s=10"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-2xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
                <span className="text-lg text-gray-500 font-medium">
                  2026/4
                </span>
                <div className="flex flex-col items-end">
                  <span className="font-extrabold text-xl text-green-700">
                    $78,000
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-start gap-3 mb-3">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <div className="flex justify-start gap-4 mb-2">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <button className="flex-1 border-2 border-blue-800 text-blue-800 py-1.5 rounded-lg font-bold">
                  View
                </button>
                <button className="flex-1 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/*card 3 */}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 max-w-sm">
            <div className="relative w-full h-40">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-2xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
                <span className="text-lg text-gray-500 font-medium">
                  2026/4
                </span>
                <div className="flex flex-col items-end">
                  <span className="font-extrabold text-xl text-green-700">
                    $78,000
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-start gap-3 mb-3">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <div className="flex justify-start gap-4 mb-2">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <button className="flex-1 border-2 border-blue-800 text-blue-800 py-1.5 rounded-lg font-bold">
                  View
                </button>
                <button className="flex-1 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/* card 4*/}
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 max-w-sm">
            <div className="relative w-full h-40">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80"
                className="w-full h-full object-cover"
                alt="Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
            </div>
            <div className="px-4 -mt-11 relative z-10 pb-4">
              <h3 className="text-2xl font-semibold text-gray-950 mb-2 leading-tight">
                2003 Toyota
                <br /> Raum NCZ25 4WD
              </h3>
              <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
                <span className="text-lg text-gray-500 font-medium">
                  2026/4
                </span>
                <div className="flex flex-col items-end">
                  <span className="font-extrabold text-xl text-green-700">
                    $78,000
                  </span>
                </div>
              </div>
              <div className="mb-5">
                <div className="flex justify-start gap-3 mb-3">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <div className="flex justify-start gap-4 mb-2">
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                  <div className="flex items-center gap-1 w-[48%]">
                    <svg
                      className="w-5 h-5 text-gray-500"
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
                <button className="flex-1 border-2 border-blue-800 text-blue-800 py-1.5 rounded-lg font-bold">
                  View
                </button>
                <button className="flex-1 bg-[#006634] text-white py-1.5 rounded-lg font-bold hover:bg-green-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</>

  )
}
