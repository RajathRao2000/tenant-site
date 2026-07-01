'use client';
import { Link } from '@/src/i18n/navigation';
import { Fuel, Shapes, SlidersVertical, Tag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export interface CarCardInterface {
  pic: string;
  year: string;
  name: string;
  price: string;
  fuel: string;
  transmission: string;
  bodyType: string;
  stock: string;
}

export const CarCard = ({
  pic,
  year,
  name,
  price,
  fuel,
  transmission,
  bodyType,
  stock,
}: CarCardInterface) => {
  const t = useTranslations('HomePage');
  return (
    <>
      {/* <div className="group border-secondary/20 overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:shadow-md">
        <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
          <Image
            fill
            sizes="100%"
            src={pic}
            alt="Car"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
        <div className="space-y-4 p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-text text-base font-semibold">{name}</h3>
              <p className="text-[10px] font-medium text-gray-400">
                Year: {year}
              </p>
            </div>
            <span className="text-text text-base font-bold">{price}</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-100 pt-4 text-sm font-semibold text-[#475569]">
            <span className="flex items-center gap-2 truncate">
              <Fuel className="size-4" />
              {fuel}
            </span>
            <span className="flex items-center gap-2 truncate">
              <Tag className="size-4" />
              {stock}
            </span>
            <span className="flex items-center gap-2 truncate">
              <SlidersVertical className="size-4" />
              {transmission}
            </span>
            <span className="flex items-center gap-2 truncate">
              <Shapes className="size-4" />
              {bodyType}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <Link
              className="flex-1 cursor-pointer rounded-xl border border-gray-300 py-3 text-base font-bold text-[#1e293b] transition hover:bg-gray-50"
              href={'/stock/123/details'}
            >
              <button className="size-full cursor-pointer">
                {t('viewDetails')}
              </button>
            </Link>
            <button className="flex-1 cursor-pointer rounded-xl border border-[#049364] bg-[#049364] py-3 text-base font-bold text-white transition hover:bg-[#037a53]">
              {t('bookNow')}
            </button>
          </div>
        </div>
      </div> */}
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
        <div className="relative h-40 w-full">
          <Image
            fill
            sizes="100%"
            src={pic}
            alt="Car"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 left-2 z-20 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
            New
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-white via-white/5 to-transparent"></div>
        </div>
        <div className="relative z-10 -mt-11 px-4 pb-4">
          <h3 className="mb-2 line-clamp-2 text-2xl leading-tight font-semibold text-gray-950">
            {name}
          </h3>
          <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="text-lg font-medium text-gray-500">{year}</span>
            <span className="text-xl font-extrabold text-green-700">
              {price}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"
                  ></path>
                </svg>
                <span className="text-[18px] font-semibold text-gray-700">
                  {transmission}
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 13c0-3.31-2.69-6-6-6H9c-3.31 0-6 2.69-6 6v3h18v-3z"></path>
                  <path d="M6 16v2"></path>
                  <path d="M18 16v2"></path>
                  <path d="M6 13h12"></path>
                </svg>
                <span className="text-[18px] font-semibold text-gray-700">
                  {bodyType}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-[18px] font-semibold text-gray-700">
                  1400cc
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 rounded-lg border-2 border-blue-800 py-1.5 font-bold text-blue-800">
              {t('view')}
            </button>
            <button className="flex-1 rounded-lg bg-[#006634] py-1.5 font-bold text-white transition-all hover:bg-green-700">
              {t('bookNow')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
