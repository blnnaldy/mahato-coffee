import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  { number: '01.', title: 'Survey Lokasi' },
  { number: '02.', title: 'Penandatanganan Kontrak' },
  { number: '03.', title: 'Pembangunan dan Renovasi' },
  { number: '04.', title: 'Pelatihan Barista' },
  { number: '05.', title: 'Grand Opening' },
];

const PartnershipStepsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 relative bg-gray-50">
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
            <div className="flex space-x-4 px-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="min-w-[260px] md:min-w-[320px] flex-shrink-0 text-center bg-white shadow-md p-4 rounded-lg"
                >
                  <div className="h-44 md:h-48 mb-4 flex items-center justify-center bg-gray-100 rounded">
                    <span className="text-gray-400 text-xl">No Image</span>
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
