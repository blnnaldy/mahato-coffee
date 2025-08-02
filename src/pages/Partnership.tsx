import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import SurveyImg from '@/assets/survey.png';
import KontrakImg from '@/assets/kontrak.png';
import RenovasiImg from '@/assets/renovasi.png';
import PelatihanImg from '@/assets/pelatihan.png';
import GrandOpeningImg from '@/assets/grandopening.png';

const steps = [
  { number: '01.', title: 'Survey Lokasi', image: SurveyImg },
  { number: '02.', title: 'Penandatanganan Kontrak', image: KontrakImg },
  { number: '03.', title: 'Pembangunan dan Renovasi', image: RenovasiImg },
  { number: '04.', title: 'Pelatihan Barista', image: PelatihanImg },
  { number: '05.', title: 'Grand Opening', image: GrandOpeningImg },
];

const PartnershipStepsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 relative">
      <svg
        viewBox="0 0 1440 1450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-[300px] left-0 w-full h-auto -z-10"
      >
        <path
          transform="translate(274,245)"
          d="m0 0h739l11 3 10 5 10 9 6 9 4 10 1 5 1 52 11 10 12 9 10 9 5 8 2 7 1 11 2 98v142l43-13 16-5h4l1-15 4-15 8-16 8-10 11-8 16-7 24-6 26-6 12-5 10-6 12-11 8-9 1-17 4-16 4-6 2-2h4l1-4-1-2-7-2-2-3 1-10 5-16 2-5-6-1-1-2v-8l4-10 8-11 9-8 12-7 19-7 14-3 10-1h17l19 3 19 6 16 8 15 9 13 11 10 11 8 13 5 15 2 15v12l-3 26-6 36-1 18 1 20 3 15 5 12 6 11 11 13 10 8 15 9 23 12 15 9 13 10 7 7 7 10 6 14 3 12v22l-3 12-8 17-3 5 1 4 13 17 11 13 8 10 13 16 13 17 11 15 8 16 3 14v15l-4 16-6 10-9 11-7 8 2 2 54 23 37 16 8 6 6 10 2 8v15l-3 11-11 26-46 108-7 11-8 8-10 6-7 2h-10l-13-5-35-15-38-16-91-39-8-3-11 10-6 4-3 1h-9l-9-4-2-1-6 16-7 14-10 14-7 8-13 10-19 13-17 12-19 13-23 16-16 11-20 14-4 3-1 1 69 4h52l20-4 21-6 21-3 9-1h11l3 2 3 14 12 70 7 51 1 14v14l-2 19-4 17-5 13-6 11-10 14-6 7-4 1-7-3-15-13-10-10-9-13-5-12-4-20-4-35-5-6-10-8-7-6h-16l-57 3-7 15-13 25-17 28-9 14-1 1h-8l-35-16-30-13-20-9-3 12-20 100-18 92-3 13v10l7 52 11 23 11 25 9 27 4 17v9l-8 7-10 8-13 11-10 8-17 14-11 9-10 9-7 8-9 10-9 8-17 9-32 9-30 7-33 7h-16l-6-3-3-3-2-8 1-17 3-16 6-15 8-12 9-10 8-8 14-9 17-10 10-9 6-10 7-16 2-10v-38l-7-38-3-18-41-12-36-12-16-7-11-7-10-9-7-8-4-8-1-4v-7l5-14 15-39 22-59 15-40 19-50 23-61-1-4-11-9-10-9-10-11-7-11-6-13-4-18v-26l4-20 5-14 8-16 12-17 11-13 7-8 24-24 8-7 20-18 8-7 10-9 8-7 10-9 8-7 10-9 11-9 13-12 11-9 12-11 11-9 12-11 11-9 3-4-10-6-6-9-3-8v-20l4-13 23-54 22-51 12-28 8-11 8-7 10-5h2l-3-7-10-15-6-10-5-15-1-13-74 19-71 18-24 5h-6v290l-3 14-5 10-10 11-12 7-10 3-176 1-14 25-14 24-3 5h-65l-15-26-14-24-2-4-441-1-11-4-10-6-7-7-7-11-3-9-1-5v-509l3-11 5-10 9-10 10-7 12-4 7-1h730l12 2 7 3 5-1 6-4v-26l2-22 1-2-10 7-11 5-4 1h-744l-14-5-9-7-7-7-6-10-3-10-1-132 3-13 5-10 9-10 8-6 9-4zm781 138v18l3 3h2l1-14-3-5zm422 413-14 15-9 11-10 11-7 9 1 5 39 17 73 31 4-2 7-8-6-8-12-12-7-8-10-10-7-8-11-11-7-8-22-22z"
          fill="#06769D"
        />
      </svg>

      <div className="container mx-auto px-4">
        <h2 className="text-center text-[28px] md:text-[36px] font-bold leading-tight mb-12">
          LANGKAH UNTUK MEMULAI MENJADI MITRA
        </h2>

        <div className="relative">
          <button
            onClick={scrollPrev}
            className="absolute left-[-1rem] top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-110 transition"
          >
            <ChevronLeft className="w-8 h-8 text-gray-800" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex space-x-2 px-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="min-w-[260px] md:min-w-[320px] flex-shrink-0 text-center"
                >
                  <div className="h-44 md:h-48 mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full mx-auto object-contain"
                    />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-semibold mb-2">
                    {step.title}
                  </h3>
                  <div className="text-[14px] font-bold text-white bg-black rounded-full inline-block px-4 py-1">
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute right-[-1rem] top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-110 transition"
          >
            <ChevronRight className="w-8 h-8 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipStepsCarousel;
